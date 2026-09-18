'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bizniti_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (value: 'accepted' | 'declined') => {
    localStorage.setItem('bizniti_cookie_consent', value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-md w-[calc(100vw-40px)] rounded-3xl border border-white/20 bg-[var(--ink)]/95 p-6 text-white shadow-2xl backdrop-blur-xl noise animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[var(--lime)] uppercase tracking-wider">
          <ShieldCheck size={16} /> Privacy & Cookie Consent
        </div>
        <button
          onClick={() => handleConsent('declined')}
          className="text-white/40 hover:text-white transition-colors"
          aria-label="Close cookie banner"
        >
          <X size={16} />
        </button>
      </div>

      <p className="mt-3 text-xs leading-5 text-white/70">
        We use essential cookies and analytics to ensure your experience on BizNiti is smooth, relevant, and secure. Read our{' '}
        <Link href="/privacy" className="text-white font-semibold underline hover:text-[var(--lime)]">
          Privacy Policy
        </Link>.
      </p>

      <div className="mt-5 flex items-center justify-end gap-3">
        <button
          onClick={() => handleConsent('declined')}
          className="px-4 py-2 text-xs font-semibold text-white/60 hover:text-white transition-colors"
        >
          Decline Optional
        </button>
        <button
          onClick={() => handleConsent('accepted')}
          className="rounded-full bg-[var(--blue)] px-5 py-2 text-xs font-bold text-white hover:bg-[var(--blue)]/80 shadow-md transition-all"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
