import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div className="space-y-6">
            <Link href="/" className="font-display text-2xl text-snow tracking-tighter">
              BASPA <span className="text-gold">TRAVELS</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Handcrafted journeys to the roof of India. We specialize in premium expeditions across the majestic landscape of Himachal Pradesh.
            </p>
            <div className="flex items-center gap-4">
              {['FB', 'IG', 'TW', 'YT'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs text-text-muted hover:border-gold hover:text-gold transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h4 className="text-snow uppercase tracking-widest text-xs font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {['Tours', 'Destinations', 'Gallery', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-text-muted hover:text-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h4 className="text-snow uppercase tracking-widest text-xs font-bold">Popular Tours</h4>
            <ul className="space-y-4">
              {[
                { name: 'Chitkul Expedition', href: '/tours/chitkul-valley-expedition' },
                { name: 'Spiti Circuit', href: '/tours/spiti-circuit' },
                { name: 'Kinnaur Apple Trail', href: '/tours/kinnaur-apple-trail' },
                { name: 'Pin Parvati Pass', href: '/tours/pin-parvati-pass' },
              ].map((tour) => (
                <li key={tour.name}>
                  <Link href={tour.href} className="text-text-muted hover:text-gold transition-colors text-sm">
                    {tour.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <h4 className="text-snow uppercase tracking-widest text-xs font-bold">Contact Info</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li>Main Bazaar, Sangla, Himachal Pradesh, India - 172106</li>
              <li>+91 98765 43210</li>
              <li>hello@baspatravels.com</li>
            </ul>
            <a href="https://wa.me/919876543210" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium">
              <span>Chat on WhatsApp</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-muted uppercase tracking-[0.2em]">
          <p>© 2024 Baspa Travels. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
