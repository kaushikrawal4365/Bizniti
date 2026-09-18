'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[var(--ink)]/90 p-2 shadow-2xl backdrop-blur-xl noise">
        <a
          href="tel:+11234567890"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Call BizNiti"
        >
          <Phone size={18} />
        </a>

        <Link
          href="/contact"
          className="flex flex-1 items-center justify-between rounded-full bg-[var(--blue)] px-5 py-3 text-xs font-bold text-white shadow-lg active:scale-95 transition-all"
          style={{ color: '#fff' }}
        >
          <span>Start a Conversation</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
