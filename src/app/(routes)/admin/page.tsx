'use client';

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GoogleReview, ReviewsConfig, ReviewStats, SyncLog } from '@/lib/reviews';
import { toast, Toaster } from 'react-hot-toast';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState<'settings' | 'curation' | 'manual' | 'diagnostics'>('settings');

  // Config State
  const [reviewUrl, setReviewUrl] = useState('');
  const [placeId, setPlaceId] = useState('');
  const [cid, setCid] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [refreshIntervalHours, setRefreshIntervalHours] = useState(24);

  // Reviews Cache State
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [stats, setStats] = useState<ReviewStats | null>(null);
  const [syncStatus, setSyncStatus] = useState<'success' | 'failed' | 'mock'>('mock');
  const [lastSyncTime, setLastSyncTime] = useState<number>(0);
  const [cacheProvider, setCacheProvider] = useState('unknown');
  const [errorLogs, setErrorLogs] = useState<SyncLog[]>([]);

  // Analytics State
  const [analytics, setAnalytics] = useState({ writeReviewClicks: 0, whatsappClicks: 0, events: [] });

  // Manual Review Form State
  const [manualAuthor, setManualAuthor] = useState('');
  const [manualRating, setManualRating] = useState(5);
  const [manualText, setManualText] = useState('');
  const [manualDate, setManualDate] = useState(new Date().toISOString().split('T')[0]);
  const [manualProfileUrl, setManualProfileUrl] = useState('');

  // Internal Notes State (key: reviewId, val: notes/status)
  const [editingNotes, setEditingNotes] = useState<Record<string, { notes: string; status: 'pending' | 'resolved' | 'ignored' }>>({});

  // Loading indicators
  const [authLoading, setAuthLoading] = useState(true);
  const [syncLoading, setSyncLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [manualLoading, setManualLoading] = useState(false);

  // Check login state on load
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch('/api/admin/login');
        const data = await res.json();
        if (data.isLoggedIn) {
          setIsLoggedIn(true);
          loadAdminData();
        }
      } catch (e) {
        console.error(e);
      } finally {
        setAuthLoading(false);
      }
    };
    checkLogin();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setIsLoggedIn(true);
        toast.success('Access Granted! Welcome, Rajbir Ji.');
        loadAdminData();
      } else {
        toast.error(data.message || 'Incorrect passcode');
      }
    } catch {
      toast.error('Network error during login');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/login', { method: 'DELETE' });
      setIsLoggedIn(false);
      setPasscode('');
      toast.success('Logged out successfully');
    } catch {
      toast.error('Logout failed');
    }
  };

  const loadAdminData = async () => {
    try {
      // 1. Fetch Config
      const configRes = await fetch('/api/reviews/config');
      const configData = await configRes.json();
      if (configData.success) {
        const c: ReviewsConfig = configData.config;
        setReviewUrl(c.reviewUrl);
        setPlaceId(c.placeId);
        setCid(c.cid);
        setApiKey(c.apiKey);
        setRefreshIntervalHours(c.refreshIntervalHours);
      }

      // 2. Fetch Reviews Cache
      const reviewsRes = await fetch('/api/reviews?admin=true');
      const reviewsData = await reviewsRes.json();
      if (reviewsData.success) {
        setReviews(reviewsData.reviews);
        setStats(reviewsData.stats);
        setSyncStatus(reviewsData.syncStatus);
        setLastSyncTime(reviewsData.lastSyncTime);
        setCacheProvider(reviewsData.cacheProvider);
        setErrorLogs(reviewsData.errorLogs || []);
        
        // Populate initial support notes inputs
        const initialNotes: typeof editingNotes = {};
        reviewsData.reviews.forEach((r: GoogleReview) => {
          initialNotes[r.id] = {
            notes: r.internalNotes || '',
            status: r.followUpStatus || 'pending'
          };
        });
        setEditingNotes(initialNotes);
      }

      // We'll also fetch analytics
      const analyticsRes = await fetch('/api/analytics');
      const analyticsData = await analyticsRes.json();
      if (analyticsData.success) {
        setAnalytics(analyticsData.data);
      }
    } catch (e) {
      toast.error('Failed to load dashboard data');
      console.error(e);
    }
  };

  // Auto Place ID/CID extraction
  const handleUrlChange = (urlStr: string) => {
    setReviewUrl(urlStr);
    try {
      if (!urlStr) return;
      // Extract parameters
      const url = new URL(urlStr);
      const pId = url.searchParams.get('placeid') || url.searchParams.get('placeId');
      if (pId) {
        setPlaceId(pId);
        toast.success('Google Place ID extracted!');
      }

      const hash = url.hash;
      const lrdMatch = hash.match(/lrd=([^,]+)/) || urlStr.match(/[?&]lrd=([^,&]+)/);
      if (lrdMatch) {
        const parts = lrdMatch[1].split(':');
        if (parts.length > 1) {
          const hexCid = parts[1];
          if (hexCid.startsWith('0x')) {
            const decCid = BigInt(hexCid).toString();
            setCid(decCid);
            toast.success('Google decimal CID extracted!');
          } else {
            setCid(hexCid);
          }
        }
      }
    } catch {
      // Regex fallbacks
      const placeIdMatch = urlStr.match(/[?&]placei[dD]=([^&]+)/);
      if (placeIdMatch) {
        setPlaceId(placeIdMatch[1]);
        toast.success('Google Place ID extracted!');
      }
      
      const lrdMatch = urlStr.match(/[#?&]lrd=([^,&\s]+)/);
      if (lrdMatch) {
        const parts = lrdMatch[1].split(':');
        if (parts.length > 1) {
          const hexCid = parts[1];
          if (hexCid.startsWith('0x')) {
            try {
              const decCid = BigInt(hexCid).toString();
              setCid(decCid);
              toast.success('Google decimal CID extracted!');
            } catch {}
          } else {
            setCid(hexCid);
          }
        }
      }
    }
  };

  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    try {
      const res = await fetch('/api/reviews/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewUrl,
          placeId,
          cid,
          refreshIntervalHours: Number(refreshIntervalHours),
          apiKey,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Configuration saved!');
        loadAdminData();
      } else {
        toast.error(data.error || 'Failed to save configuration');
      }
    } catch {
      toast.error('Network error saving settings');
    } finally {
      setSaveLoading(false);
    }
  };

  const handleSyncNow = async () => {
    setSyncLoading(true);
    toast.loading('Syncing Google Reviews...', { id: 'sync' });
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sync' }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Sync successful!', { id: 'sync' });
        loadAdminData();
      } else {
        toast.error(data.error || 'Sync failed', { id: 'sync' });
      }
    } catch {
      toast.error('Network error during sync', { id: 'sync' });
    } finally {
      setSyncLoading(false);
    }
  };

  const handleAddManualReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualAuthor || !manualText) {
      toast.error('Name and Review Text are required');
      return;
    }
    setManualLoading(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'addManual',
          author_name: manualAuthor,
          rating: Number(manualRating),
          text: manualText,
          dateStr: manualDate,
          profile_photo_url: manualProfileUrl,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Manual review added!');
        setManualAuthor('');
        setManualText('');
        setManualProfileUrl('');
        loadAdminData();
      } else {
        toast.error(data.error || 'Failed to add manual review');
      }
    } catch {
      toast.error('Network error adding review');
    } finally {
      setManualLoading(false);
    }
  };

  const handleDeleteManualReview = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this manual review?')) return;
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'deleteManual', id }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Manual review deleted');
        loadAdminData();
      } else {
        toast.error(data.error || 'Failed to delete review');
      }
    } catch {
      toast.error('Network error deleting review');
    }
  };

  // Toggle Pinned
  const handleTogglePin = async (reviewId: string) => {
    const isCurrentlyPinned = reviews.find(r => r.id === reviewId)?.isPinned;
    let newPinnedIds = reviews.filter(r => r.isPinned).map(r => r.id);
    
    if (isCurrentlyPinned) {
      newPinnedIds = newPinnedIds.filter(pid => pid !== reviewId);
    } else {
      newPinnedIds.push(reviewId);
    }

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateCuration',
          pinnedIds: newPinnedIds,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(isCurrentlyPinned ? 'Review unpinned' : 'Review pinned!');
        loadAdminData();
      }
    } catch {
      toast.error('Failed to pin/unpin');
    }
  };

  // Toggle Hidden
  const handleToggleHide = async (reviewId: string) => {
    const isCurrentlyHidden = reviews.find(r => r.id === reviewId)?.isHidden;
    let newHiddenIds = reviews.filter(r => r.isHidden).map(r => r.id);
    
    if (isCurrentlyHidden) {
      newHiddenIds = newHiddenIds.filter(hid => hid !== reviewId);
    } else {
      newHiddenIds.push(reviewId);
    }

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateCuration',
          hiddenIds: newHiddenIds,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(isCurrentlyHidden ? 'Review is now visible publicly' : 'Review hidden from public');
        loadAdminData();
      }
    } catch {
      toast.error('Failed to hide/show review');
    }
  };

  // Save Support Notes / Responses
  const handleSaveSupportNotes = async (id: string) => {
    const editState = editingNotes[id];
    if (!editState) return;

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateSupportNotes',
          id,
          internalNotes: editState.notes,
          followUpStatus: editState.status,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Support notes updated!');
        loadAdminData();
      } else {
        toast.error(data.error || 'Failed to update notes');
      }
    } catch {
      toast.error('Network error saving notes');
    }
  };

  // Reorder pinned reviews
  const handleUpdateFeaturedOrder = async (reviewId: string, orderVal: number) => {
    const featuredOrder = reviews.filter(r => r.isPinned).map(r => r.id);
    
    // Simple logic: adjust layout positioning
    // Let's create or update array
    const updatedOrder = [...featuredOrder];
    const itemIndex = updatedOrder.indexOf(reviewId);
    if (itemIndex !== -1) {
      updatedOrder.splice(itemIndex, 1);
    }
    // Insert at specified index
    const targetIdx = Math.max(0, Math.min(updatedOrder.length, orderVal - 1));
    updatedOrder.splice(targetIdx, 0, reviewId);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateCuration',
          featuredOrder: updatedOrder,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Featured order updated');
        loadAdminData();
      }
    } catch {
      toast.error('Failed to update featured order');
    }
  };

  if (authLoading) {
    return (
      <main className="bg-background min-h-screen text-snow flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin mb-4" />
          <p className="text-gold uppercase tracking-widest text-[10px] font-bold">Verifying security credentials...</p>
        </div>
      </main>
    );
  }

  // LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <main className="bg-background min-h-screen font-inter flex flex-col justify-between">
        <Toaster position="top-right" />
        <Navbar />
        
        <section className="flex-grow pt-40 pb-20 px-6 flex items-center justify-center">
          <div className="glass-card max-w-md w-full p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold text-2xl mx-auto mb-6">
              🔒
            </div>
            <h1 className="text-3xl font-display text-snow mb-2">Admin Base Control</h1>
            <p className="text-text-muted text-sm mb-8">
              Authenticate using your secret passcode to access review sync, diagnostics, and manual entry configurations.
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Enter Control Passcode</label>
                <input 
                  type="password" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-center tracking-widest focus:border-gold outline-none transition-colors"
                />
              </div>

              <button 
                type="submit" 
                className="btn-gold-filled w-full py-4 text-xs font-bold uppercase tracking-widest"
              >
                Authenticate Command
              </button>
            </form>
          </div>
        </section>
        
        <Footer />
      </main>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <main className="bg-background min-h-screen font-inter flex flex-col justify-between text-snow">
      <Toaster position="top-right" />
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex-grow">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-white/5">
          <div>
            <span className="accent-text text-gold text-lg block mb-1">Rajbir&apos;s Base Control</span>
            <h1 className="text-3xl md:text-5xl font-display text-snow">Reviews Management System</h1>
          </div>
          <button 
            onClick={handleLogout}
            className="px-6 py-2 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-snow uppercase tracking-widest text-[10px] font-bold transition-all"
          >
            🔒 Sign Out
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/5">
          {(['settings', 'curation', 'manual', 'diagnostics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-3 border text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab 
                  ? 'bg-gold text-charcoal border-gold shadow-[0_0_15px_rgba(201,168,76,0.2)]'
                  : 'border-white/5 text-text-muted hover:border-gold/30 hover:text-snow'
              }`}
            >
              {tab === 'settings' && '🔧 API & Link Settings'}
              {tab === 'curation' && '⭐ Curation & Pins'}
              {tab === 'manual' && '📝 Manual Testimonials'}
              {tab === 'diagnostics' && '📊 Stats & Diagnostics'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          {/* TAB 1: API & LINK SETTINGS */}
          {activeTab === 'settings' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <form onSubmit={handleSaveConfig} className="lg:col-span-8 glass-card p-8 space-y-6 border border-white/5">
                <h3 className="text-xl font-display text-gold mb-6 border-b border-white/5 pb-2">Sync Configuration</h3>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Google Review Link / URL</label>
                  <input 
                    type="url" 
                    value={reviewUrl}
                    onChange={(e) => handleUrlChange(e.target.value)}
                    placeholder="Paste Google search link with hash lrd=..."
                    required
                    className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                  />
                  <p className="text-[9px] text-text-muted">
                    When you paste your Google review link, the system automatically extracts the hex/decimal CID and Place ID details.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Google Place ID (Primary Source)</label>
                    <input 
                      type="text" 
                      value={placeId}
                      onChange={(e) => setPlaceId(e.target.value)}
                      placeholder="e.g. ChIJlfXF6cg7BjQR_dQ5S5WpB20"
                      className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Google Decimal CID</label>
                    <input 
                      type="text" 
                      value={cid}
                      onChange={(e) => setCid(e.target.value)}
                      placeholder="e.g. 7856434533648422141"
                      className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Google Places API Key</label>
                    <input 
                      type="password" 
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder={apiKey ? '************************************' : 'API Key not set'}
                      className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Cache Sync Interval (Hours)</label>
                    <select
                      value={refreshIntervalHours}
                      onChange={(e) => setRefreshIntervalHours(Number(e.target.value))}
                      className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                    >
                      <option value={1}>Every 1 Hour</option>
                      <option value={6}>Every 6 Hours</option>
                      <option value={12}>Every 12 Hours</option>
                      <option value={24}>Every 24 Hours (Recommended)</option>
                      <option value={168}>Weekly (Every 7 Days)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex gap-4">
                  <button 
                    type="submit" 
                    disabled={saveLoading}
                    className="btn-gold-filled py-3 px-8 text-xs font-bold uppercase tracking-widest"
                  >
                    {saveLoading ? 'Saving...' : 'Save Settings'}
                  </button>
                  <button 
                    type="button" 
                    onClick={handleSyncNow}
                    disabled={syncLoading}
                    className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-charcoal font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    {syncLoading ? 'Syncing...' : 'Sync Now 🔄'}
                  </button>
                </div>
              </form>

              <div className="lg:col-span-4 space-y-6">
                <div className="glass-card p-6 border border-white/5">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Sync Status</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">API Connection:</span>
                      <span className={`font-semibold uppercase tracking-wider text-xs ${syncStatus === 'success' ? 'text-green-400' : syncStatus === 'failed' ? 'text-red-400' : 'text-blue-400'}`}>
                        {syncStatus === 'success' ? 'CONNECTED' : syncStatus === 'failed' ? 'ERROR' : 'MOCK FALLBACK'}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">Cache Provider:</span>
                      <span className="text-snow font-medium">{cacheProvider}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">Last Synced:</span>
                      <span className="text-snow font-medium">
                        {lastSyncTime > 0 ? new Date(lastSyncTime).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) : 'Never'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Next Scheduled Sync:</span>
                      <span className="text-snow font-medium">
                        {lastSyncTime > 0 
                          ? new Date(lastSyncTime + refreshIntervalHours * 3600 * 1000).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
                          : 'Upon next reload'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 border border-white/5 bg-gold/5">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Need an API Key?</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    To pull live reviews from Google Maps, create a project in your Google Cloud Console, enable the <strong>Places API</strong>, and restrict the API Key credentials. Insert the key above. If no API Key is provided, the website will seamlessly fallback to your high-quality local testimonials without breaking the user experience.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CURATION & PINS */}
          {activeTab === 'curation' && (
            <div className="glass-card p-8 border border-white/5 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-display text-gold">Review Curation Center</h3>
                  <p className="text-xs text-text-muted mt-1">Pin important reviews to feature them at the top, hide spam content, or add internal tracking notes.</p>
                </div>
                <div className="text-xs text-text-muted">
                  Total Reviews Displayed: <span className="text-gold font-bold">{reviews.length}</span>
                </div>
              </div>

              {reviews.length === 0 ? (
                <div className="text-center py-12 text-text-muted">
                  No reviews cached yet. Trigger a sync or check your configurations.
                </div>
              ) : (
                <div className="space-y-6 divide-y divide-white/5">
                  {reviews.map((r, index) => {
                    const editState = editingNotes[r.id] || { notes: '', status: 'pending' };
                    return (
                      <div key={r.id} className="pt-6 first:pt-0 flex flex-col xl:flex-row justify-between gap-8">
                        {/* Review Content */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-gold">
                                {r.author_name ? r.author_name[0] : 'U'}
                              </div>
                              <div>
                                <h4 className="font-bold text-snow text-sm">{r.author_name}</h4>
                                <div className="flex gap-0.5 text-gold text-xs">
                                  {[...Array(r.rating)].map((_, i) => <span key={i}>★</span>)}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-wider font-semibold text-text-muted">
                                {r.verificationTag}
                              </span>
                              {r.isPinned && (
                                <span className="px-2 py-0.5 bg-gold/20 border border-gold/30 rounded-full text-[9px] uppercase tracking-wider font-semibold text-gold">
                                  📌 PINNED
                                </span>
                              )}
                              {r.isHidden && (
                                <span className="px-2 py-0.5 bg-red-950/20 border border-red-500/30 rounded-full text-[9px] uppercase tracking-wider font-semibold text-red-400">
                                  👁️ HIDDEN
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="text-sm text-snow/80 italic leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                            &quot;{r.text}&quot;
                          </p>

                          <div className="flex items-center gap-6 text-[10px] text-text-muted uppercase tracking-wider">
                            <span>Date: {r.relative_time_description}</span>
                            <span>ID: {r.id}</span>
                          </div>
                        </div>

                        {/* Controls & Notes */}
                        <div className="xl:w-[350px] shrink-0 space-y-4 bg-white/5 p-6 border border-white/5 rounded-2xl flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleTogglePin(r.id)}
                                className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider border transition-all ${
                                  r.isPinned 
                                    ? 'bg-gold text-charcoal border-gold' 
                                    : 'border-white/10 hover:border-gold text-snow'
                                }`}
                              >
                                {r.isPinned ? '📌 Unpin' : '📌 Pin Review'}
                              </button>
                              
                              <button
                                onClick={() => handleToggleHide(r.id)}
                                className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider border transition-all ${
                                  r.isHidden 
                                    ? 'bg-red-500/20 border-red-500 text-red-400' 
                                    : 'border-white/10 hover:border-red-500 text-snow'
                                }`}
                              >
                                {r.isHidden ? '👁️ Show Public' : '👁️ Hide Spam'}
                              </button>
                            </div>

                            {/* Reorder pinned reviews */}
                            {r.isPinned && (
                              <div className="flex items-center justify-between text-xs gap-3">
                                <span className="text-text-muted">Featured Index Position:</span>
                                <select 
                                  value={reviews.filter(item => item.isPinned).findIndex(item => item.id === r.id) + 1}
                                  onChange={(e) => handleUpdateFeaturedOrder(r.id, Number(e.target.value))}
                                  className="bg-background border border-white/10 px-2 py-1 text-gold text-xs"
                                >
                                  {reviews.filter(item => item.isPinned).map((_, idx) => (
                                    <option key={idx} value={idx + 1}>{idx + 1}</option>
                                  ))}
                                </select>
                              </div>
                            )}

                            {/* Internal support responses & notes */}
                            <div className="space-y-2 border-t border-white/5 pt-4">
                              <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-gold font-bold">
                                <span>Internal Notes / Comments</span>
                                <select
                                  value={editState.status}
                                  onChange={(e) => {
                                    setEditingNotes(prev => ({
                                      ...prev,
                                      [r.id]: { ...editState, status: e.target.value as any }
                                    }));
                                  }}
                                  className="bg-transparent border-none text-gold font-bold uppercase cursor-pointer"
                                >
                                  <option value="pending" className="bg-charcoal text-snow">Pending</option>
                                  <option value="resolved" className="bg-charcoal text-snow">Resolved</option>
                                  <option value="ignored" className="bg-charcoal text-snow">Ignored</option>
                                </select>
                              </div>
                              <textarea
                                value={editState.notes}
                                onChange={(e) => {
                                  setEditingNotes(prev => ({
                                    ...prev,
                                    [r.id]: { ...editState, notes: e.target.value }
                                  }));
                                }}
                                rows={2}
                                placeholder="Write internal response or follow-up details..."
                                className="w-full bg-background border border-white/10 px-3 py-2 text-xs text-snow focus:border-gold outline-none resize-none"
                              />
                            </div>
                          </div>

                          <button
                            onClick={() => handleSaveSupportNotes(r.id)}
                            className="w-full text-center py-2 bg-white/5 border border-white/10 hover:border-gold hover:text-gold transition-colors text-[9px] uppercase tracking-wider font-bold"
                          >
                            Save Response Notes
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MANUAL TESTIMONIALS */}
          {activeTab === 'manual' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form to Add Manual Review */}
              <form onSubmit={handleAddManualReview} className="lg:col-span-5 glass-card p-8 space-y-6 border border-white/5">
                <h3 className="text-xl font-display text-gold mb-6 border-b border-white/5 pb-2">Add Manual Testimonial</h3>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Customer Full Name *</label>
                  <input 
                    type="text" 
                    value={manualAuthor}
                    onChange={(e) => setManualAuthor(e.target.value)}
                    placeholder="e.g. Arjun Sharma"
                    required
                    className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Star Rating *</label>
                    <select
                      value={manualRating}
                      onChange={(e) => setManualRating(Number(e.target.value))}
                      className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                    >
                      <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
                      <option value={4}>4 Stars ⭐⭐⭐⭐</option>
                      <option value={3}>3 Stars ⭐⭐⭐</option>
                      <option value={2}>2 Stars ⭐⭐</option>
                      <option value={1}>1 Star ⭐</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Review Date *</label>
                    <input 
                      type="date" 
                      value={manualDate}
                      onChange={(e) => setManualDate(e.target.value)}
                      required
                      className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Profile Photo URL (Optional)</label>
                  <input 
                    type="url" 
                    value={manualProfileUrl}
                    onChange={(e) => setManualProfileUrl(e.target.value)}
                    placeholder="https://example.com/avatar.jpg"
                    className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Review Text *</label>
                  <textarea 
                    value={manualText}
                    onChange={(e) => setManualText(e.target.value)}
                    placeholder="Enter review body here..."
                    required
                    rows={4}
                    className="w-full bg-background border border-white/10 px-4 py-3 text-snow text-sm focus:border-gold outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={manualLoading}
                  className="btn-gold-filled w-full py-4 text-xs font-bold uppercase tracking-widest"
                >
                  {manualLoading ? 'Submitting...' : 'Add Testimonial'}
                </button>
              </form>

              {/* List of Manual Reviews */}
              <div className="lg:col-span-7 glass-card p-8 border border-white/5 space-y-6">
                <h3 className="text-xl font-display text-gold mb-6 border-b border-white/5 pb-2">Active Manual Testimonials</h3>
                
                {reviews.filter(r => r.type === 'manual').length === 0 ? (
                  <div className="text-center py-12 text-text-muted text-sm">
                    No manual testimonials added. Click left to add one.
                  </div>
                ) : (
                  <div className="space-y-6 divide-y divide-white/5">
                    {reviews.filter(r => r.type === 'manual').map((r) => (
                      <div key={r.id} className="pt-6 first:pt-0 flex items-start justify-between gap-6">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-gold text-sm">
                              {r.author_name ? r.author_name[0] : 'M'}
                            </div>
                            <div>
                              <h4 className="font-bold text-snow text-sm">{r.author_name}</h4>
                              <div className="flex gap-0.5 text-gold text-xs">
                                {[...Array(r.rating)].map((_, i) => <span key={i}>★</span>)}
                              </div>
                            </div>
                          </div>

                          <p className="text-xs text-text-muted italic leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                            &quot;{r.text}&quot;
                          </p>

                          <div className="text-[9px] text-text-muted uppercase tracking-wider">
                            Date: {new Date(r.time * 1000).toLocaleDateString()}
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteManualReview(r.id)}
                          className="px-4 py-2 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-snow uppercase tracking-widest text-[9px] font-bold transition-all shrink-0"
                        >
                          Delete 🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: DIAGNOSTICS & ANALYTICS */}
          {activeTab === 'diagnostics' && (
            <div className="space-y-8">
              {/* Analytics metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-8 border border-white/5 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">⭐ Review Button Clicks</span>
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-snow">{analytics.writeReviewClicks}</div>
                  <span className="text-[9px] text-text-muted block mt-2">Write Review Intent Clicks</span>
                </div>
                <div className="glass-card p-8 border border-white/5 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">💬 WhatsApp Chats</span>
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-snow">{analytics.whatsappClicks}</div>
                  <span className="text-[9px] text-text-muted block mt-2">WhatsApp clicks from Reviews section</span>
                </div>
                <div className="glass-card p-8 border border-white/5 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">📋 Total Active Reviews</span>
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-snow">{reviews.length}</div>
                  <span className="text-[9px] text-text-muted block mt-2">Google + Manual Testimonials</span>
                </div>
              </div>

              {/* Event Logs & Sync History */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Event stream */}
                <div className="glass-card p-8 border border-white/5 space-y-6">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold border-b border-white/5 pb-2">Engagement Analytics Stream</h4>
                  
                  {analytics.events && analytics.events.length === 0 ? (
                    <div className="text-center py-8 text-text-muted text-xs">No analytics logs recorded.</div>
                  ) : (
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                      {(analytics.events || []).map((e: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                          <div>
                            <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase font-semibold mr-2 ${
                              e.eventType === 'write_review' ? 'bg-gold/20 text-gold' : 'bg-green-950/20 text-green-400'
                            }`}>
                              {e.eventType === 'write_review' ? 'Review Click' : 'WhatsApp'}
                            </span>
                            <span className="text-text-muted">from {e.sourcePage}</span>
                          </div>
                          <span className="text-text-muted text-[10px]">{e.timestamp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Error/Sync logs */}
                <div className="glass-card p-8 border border-white/5 space-y-6">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold border-b border-white/5 pb-2">Sync Diagnostic History</h4>
                  
                  {errorLogs.length === 0 && reviews.length > 0 ? (
                    <div className="text-center py-8 text-text-muted text-xs">No sync logs recorded yet. Perform a manual sync.</div>
                  ) : (
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                      {errorLogs.map((log, idx) => (
                        <div key={idx} className="flex flex-col text-xs border-b border-white/5 pb-3 last:border-0 last:pb-0">
                          <div className="flex justify-between items-center mb-1">
                            <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase font-semibold ${
                              log.status === 'success' ? 'bg-green-950/20 text-green-400' : 'bg-red-950/20 text-red-400'
                            }`}>
                              {log.status === 'success' ? 'Success' : 'Failed'}
                            </span>
                            <span className="text-text-muted text-[10px]">{log.timestamp}</span>
                          </div>
                          <p className="text-text-muted leading-relaxed font-mono text-[11px] bg-background p-2 rounded-lg border border-white/5">
                            {log.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
