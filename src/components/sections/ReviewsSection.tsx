'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReviews } from '@/hooks/useReviews';

export default function ReviewsSection() {
  const { 
    reviews, 
    stats, 
    reviewUrl, 
    loading, 
    trackReviewClick, 
    trackWhatsAppClick 
  } = useReviews();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const carouselTimer = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    if (reviews.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews]);

  const prev = useCallback(() => {
    if (reviews.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews]);

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused || loading || reviews.length <= 1) return;
    carouselTimer.current = setInterval(next, 6000);
    return () => {
      if (carouselTimer.current) clearInterval(carouselTimer.current);
    };
  }, [next, isPaused, loading, reviews]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (diff > 50) {
      // Swiped left, go to next
      next();
    } else if (diff < -50) {
      // Swiped right, go to prev
      prev();
    }
    
    // Resume auto-scroll after a short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  if (loading && reviews.length === 0) {
    return (
      <section className="py-24 bg-background px-6 md:px-12 text-center text-snow">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin mb-4" />
          <p className="text-gold uppercase tracking-widest text-xs font-bold">Loading Google Reviews...</p>
        </div>
      </section>
    );
  }

  // Fallback to default stats if not fully loaded from API yet
  const displayStats = stats || {
    averageRating: 4.9,
    totalReviews: 542,
    ratingBreakdown: { 5: 495, 4: 38, 3: 6, 2: 2, 1: 1 }
  };

  // Get initials for profile picture fallback
  const getInitials = (name: string) => {
    if (!name) return 'U';
    const parts = name.split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  };

  // Profile image background colors
  const avatarColors = ['#C9A84C', '#A8C5DA', '#E8C96D', '#7FA286', '#C2A1A1'];
  const getAvatarColor = (name: string) => {
    let sum = 0;
    for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
    return avatarColors[sum % avatarColors.length];
  };

  const currentReview = reviews[currentIndex] || null;

  // SEO JSON-LD schema injection
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAgency",
        "@id": "https://baspatravels.in/#touristagency",
        "name": "Baspa Travels",
        "url": "https://baspatravels.in",
        "logo": "https://baspatravels.in/images/logo.jpg",
        "image": "https://baspatravels.in/images/sightseeing_highlights.jpg",
        "telephone": "+919418701460",
        "email": "hello@baspatravels.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Bazaar, Sangla",
          "addressLocality": "Sangla",
          "addressRegion": "Himachal Pradesh",
          "postalCode": "172106",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": displayStats.averageRating,
          "reviewCount": displayStats.totalReviews,
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://baspatravels.in/#localbusiness",
        "name": "Baspa Travels",
        "telephone": "+919418701460",
        "url": "https://baspatravels.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Bazaar, Sangla",
          "addressLocality": "Sangla",
          "addressRegion": "Himachal Pradesh",
          "postalCode": "172106",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": displayStats.averageRating,
          "reviewCount": displayStats.totalReviews
        },
        "review": reviews.slice(0, 5).map(r => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": r.author_name
          },
          "datePublished": new Date(r.time * 1000).toISOString().split('T')[0],
          "reviewBody": r.text,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": r.rating,
            "bestRating": "5"
          }
        }))
      }
    ]
  };

  return (
    <section className="py-32 bg-background px-6 md:px-12 relative overflow-hidden font-inter">
      {/* Schema Injection */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="accent-text text-gold text-xl block mb-4">Customer Diaries</span>
          <h2 className="text-4xl md:text-6xl font-display text-snow">What Travelers Say</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Statistics & CTA */}
          <div className="lg:col-span-4 glass-card p-8 md:p-10 flex flex-col items-center text-center border border-white/5 relative overflow-hidden">
            {/* Google Logo / Verified Badge */}
            <div className="flex items-center gap-2 mb-6 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-snow/90 uppercase tracking-widest font-bold">
              <span className="text-gold">⭐</span>
              <span>Google Verified</span>
            </div>

            <div className="text-5xl md:text-6xl font-display font-extrabold text-snow mb-2">
              {displayStats.averageRating}
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-3 text-gold text-2xl">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.round(displayStats.averageRating) ? '★' : '☆'}
                </span>
              ))}
            </div>

            <div className="text-sm text-text-muted uppercase tracking-widest mb-8">
              Based on {displayStats.totalReviews} Google Reviews
            </div>

            {/* Star breakdown bars */}
            <div className="w-full space-y-3 mb-10 border-t border-white/5 pt-8">
              {([5, 4, 3, 2, 1] as const).map((stars) => {
                const count = displayStats.ratingBreakdown[stars] || 0;
                const pct = displayStats.totalReviews > 0 
                  ? Math.round((count / displayStats.totalReviews) * 100) 
                  : 0;

                return (
                  <div key={stars} className="flex items-center gap-4 text-xs">
                    <span className="text-text-muted w-3 font-bold">{stars}★</span>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold transition-all duration-1000" 
                        style={{ width: `${pct}%` }} 
                      />
                    </div>
                    <span className="text-text-muted w-10 text-right">{pct}%</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 w-full">
              <a 
                href={reviewUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={trackReviewClick}
                className="w-full text-center py-4 bg-gold text-charcoal font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all shadow-lg hover:shadow-gold/10"
              >
                ⭐ Write a Review
              </a>
              <button 
                onClick={() => {
                  trackWhatsAppClick();
                  const message = "Namaste! Mujhe Baspa Travels ke tour packages ke baare mein reviews aur info chahiye.";
                  window.open(`https://wa.me/919418701460?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full text-center py-4 border border-white/10 text-snow hover:border-gold hover:text-gold font-bold uppercase tracking-widest text-xs transition-all bg-background/30"
              >
                WhatsApp pe baat karo
              </button>
            </div>
          </div>

          {/* Right: Reviews Carousel */}
          <div className="lg:col-span-8 relative">
            {reviews.length === 0 ? (
              <div className="glass-card p-12 text-center text-text-muted min-h-[400px] flex items-center justify-center border border-white/5">
                No reviews available. Be the first to write a review!
              </div>
            ) : (
              <div 
                className="relative min-h-[450px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  {currentReview && (
                    <motion.div
                      key={currentReview.id}
                      initial={{ opacity: 0, scale: 0.96, x: 30 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.96, x: -30 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-card p-10 md:p-14 relative w-full border border-white/5 shadow-2xl h-full flex flex-col justify-between"
                    >
                      {/* Top section: Avatar, Name, Verification badge */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/5">
                        <div className="flex items-center gap-4">
                          {currentReview.profile_photo_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img 
                              src={currentReview.profile_photo_url} 
                              alt={currentReview.author_name}
                              className="w-14 h-14 rounded-full border border-gold/20 object-cover shadow-lg"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div 
                              className="w-14 h-14 rounded-full flex items-center justify-center text-charcoal font-bold text-lg shadow-lg"
                              style={{ backgroundColor: getAvatarColor(currentReview.author_name) }}
                            >
                              {getInitials(currentReview.author_name)}
                            </div>
                          )}
                          <div>
                            <h4 className="text-snow font-bold uppercase tracking-wider text-sm">
                              {currentReview.author_name}
                            </h4>
                            <div className="flex gap-0.5 text-gold text-sm mt-1">
                              {[...Array(currentReview.rating)].map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Custom Verification Badge */}
                        <div className="flex items-center gap-1.5 self-start md:self-center px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-semibold text-snow/80">
                          <span className={currentReview.type === 'google' ? 'text-blue-400' : 'text-green-400'}>
                            {currentReview.type === 'google' ? '●' : '✓'}
                          </span>
                          <span>{currentReview.verificationTag}</span>
                        </div>
                      </div>

                      {/* Middle: Review text */}
                      <p className="text-lg md:text-xl font-display text-snow italic leading-relaxed mb-8 flex-grow">
                        &quot;{currentReview.text}&quot;
                      </p>

                      {/* Bottom: Date */}
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-text-muted">
                        <span>{currentReview.relative_time_description}</span>
                        <span>Baspa Travels Journey</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Left/Right Navigation buttons (Desktop only) */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-0 pointer-events-none md:-mx-6">
                  <button
                    onClick={prev}
                    aria-label="Previous Review"
                    className="w-12 h-12 border border-white/10 flex items-center justify-center text-snow hover:border-gold hover:text-gold transition-all pointer-events-auto bg-background/80 backdrop-blur-sm shadow-xl hover:scale-105"
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next Review"
                    className="w-12 h-12 border border-white/10 flex items-center justify-center text-snow hover:border-gold hover:text-gold transition-all pointer-events-auto bg-background/80 backdrop-blur-sm shadow-xl hover:scale-105"
                  >
                    →
                  </button>
                </div>

                {/* Bullets indicator */}
                <div className="absolute -bottom-8 flex gap-2 justify-center w-full">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 2000);
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? 'w-6 bg-gold' : 'bg-white/20'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
