'use client';

import { ArrowRight, Check, ChevronLeft, LoaderCircle, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const options = [
  'Website Development',
  'SEO',
  'Social Media Management',
  'PPC',
  'Content Marketing',
  'Email Marketing',
  'Fractional CMO',
  'Something else',
];

export function LeadForm({ compact = false, initialService = '' }: { compact?: boolean; initialService?: string }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [data, setData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    services: initialService ? [initialService] : ([] as string[]),
    message: '',
    contact: 'Email',
  });
  const [hp, setHp] = useState('');

  const valid = useMemo(() => {
    if (step === 0) return data.name.trim() !== '' && /\S+@\S+\.\S+/.test(data.email);
    if (step === 1) return data.services.length > 0;
    if (step === 2) return data.message.trim().length >= 8;
    return true;
  }, [data, step]);

  function update(k: string, v: any) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function toggleService(option: string) {
    setData((d) => {
      const exists = d.services.includes(option);
      const updated = exists
        ? d.services.filter((s) => s !== option)
        : [...d.services, option];
      return { ...d, services: updated };
    });
  }

  async function submit() {
    setStatus('loading');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...data,
          service: data.services.join(', '),
          websiteField: hp,
        }),
      });
      if (!r.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done')
    return (
      <div 
        className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/[0.06] p-8 sm:p-12 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
        style={{ color: '#fff' }}
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--lime)]/20 blur-[90px] pointer-events-none" />
        <div className="relative z-10">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[var(--lime)] text-[var(--ink)] shadow-[0_0_30px_rgba(216,242,107,0.4)]">
            <Check size={28} strokeWidth={3} />
          </div>
          <p className="mono mt-8 text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>Enquiry received</p>
          <h3 className="display mt-3 text-4xl sm:text-5xl leading-[.9]" style={{ color: '#fff' }}>Good. Let's make the next move useful.</h3>
          <p className="mt-5 max-w-lg text-sm sm:text-base leading-7" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Thanks for the context. BizNiti will follow up directly with structured analysis rather than a generic sales deck.
          </p>
        </div>
      </div>
    );

  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.05] p-5 sm:p-8 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.5)] transition-all ${
        compact ? 'lg:max-w-2xl' : ''
      }`}
      style={{ color: '#fff' }}
    >
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--blue)]/20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[var(--lime)]/15 blur-[100px] pointer-events-none" />

      {/* Honeypot field */}
      <input
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Header progress bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-white/10">
            <Sparkles size={14} className="text-[var(--lime)]" />
          </div>
          <div>
            <p className="mono text-[9px] tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>PROJECT BRIEF</p>
            <p className="mt-0.5 text-xs font-semibold tracking-tight" style={{ color: '#fff' }}>Step 0{step + 1} / 04</p>
          </div>
        </div>
        
        {/* Dynamic Glowing Progress Indicator */}
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === step
                  ? 'w-8 bg-gradient-to-r from-[var(--blue)] to-[var(--lime)] shadow-[0_0_12px_rgba(18,100,255,0.8)]'
                  : i < step
                  ? 'w-4 bg-white/40'
                  : 'w-2 bg-white/15'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Content with Motion Animations */}
      <div className="relative z-10 min-h-[380px] py-7 sm:py-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <span className="mono text-[9px]" style={{ color: 'rgba(255,255,255,0.45)' }}>01 / YOU</span>
                  <h3 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl leading-[.9]" style={{ color: '#fff' }}>
                    Start with the context.
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <Field label="Name *" value={data.name} onChange={(v) => update('name', v)} placeholder="Jane Doe" />
                  <Field label="Work email *" type="email" value={data.email} onChange={(v) => update('email', v)} placeholder="jane@company.com" />
                  <Field label="Company" value={data.company} onChange={(v) => update('company', v)} placeholder="Acme Inc" />
                  <Field label="Website" value={data.website} onChange={(v) => update('website', v)} placeholder="https://company.com" />
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span className="mono text-[9px]" style={{ color: 'rgba(255,255,255,0.45)' }}>02 / THE NEED</span>
                    <h3 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl leading-[.9]" style={{ color: '#fff' }}>
                      What needs to move?
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70 border border-white/10">
                      Select all that apply
                    </span>
                    {data.services.length > 0 && (
                      <span className="rounded-full bg-[var(--lime)]/20 text-[var(--lime)] px-3 py-1 text-[11px] font-bold border border-[var(--lime)]/35">
                        {data.services.length} selected
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {options.map((o) => {
                    const selected = data.services.includes(o);
                    return (
                      <button
                        type="button"
                        key={o}
                        onClick={() => toggleService(o)}
                        className={`group relative rounded-2xl border p-4 text-left text-sm font-semibold transition-all duration-300 ${
                          selected
                            ? 'border-[var(--lime)] bg-[var(--lime)]/15 shadow-[0_0_24px_rgba(216,242,107,0.25)] text-white scale-[1.02]'
                            : 'border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25 hover:bg-white/[0.08] hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span style={{ color: selected ? '#fff' : 'rgba(255,255,255,0.85)' }}>{o}</span>
                          <span
                            className={`grid h-5 w-5 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                              selected
                                ? 'bg-[var(--lime)] text-[var(--ink)] scale-100'
                                : 'border border-white/20 bg-transparent scale-90 opacity-40 group-hover:opacity-75'
                            }`}
                          >
                            {selected && <Check size={12} strokeWidth={3} />}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <span className="mono text-[9px]" style={{ color: 'rgba(255,255,255,0.45)' }}>03 / THE PROBLEM</span>
                <h3 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl leading-[.9]" style={{ color: '#fff' }}>
                  Tell us what you’re trying to change.
                </h3>
                <textarea
                  value={data.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={7}
                  placeholder="The clearer the context, the better the first conversation..."
                  className="mt-8 w-full resize-none rounded-2xl border border-white/15 bg-white/[0.05] p-5 text-sm leading-6 text-white placeholder:text-white/30 focus:border-[var(--lime)] focus:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/20 transition-all duration-300"
                />
              </div>
            )}

            {step === 3 && (
              <div>
                <span className="mono text-[9px]" style={{ color: 'rgba(255,255,255,0.45)' }}>04 / REACH YOU</span>
                <h3 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl leading-[.9]" style={{ color: '#fff' }}>
                  How should BizNiti reach you?
                </h3>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Email', 'Phone', 'Either'].map((o) => {
                    const selected = data.contact === o;
                    return (
                      <button
                        type="button"
                        key={o}
                        onClick={() => update('contact', o)}
                        className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                          selected
                            ? 'border-[var(--blue)] bg-[var(--blue)] text-white shadow-[0_0_20px_rgba(18,100,255,0.4)]'
                            : 'border-white/15 bg-white/[0.05] text-white/75 hover:bg-white/[0.1]'
                        }`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-10 max-w-xl text-xs sm:text-sm leading-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  By sending this brief, you're asking BizNiti to contact you directly regarding your enquiry.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation Controls */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-5">
        <button
          type="button"
          disabled={step === 0 || status === 'loading'}
          onClick={() => setStep((s) => s - 1)}
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white transition-all disabled:opacity-20 disabled:pointer-events-none"
        >
          <ChevronLeft size={16} /> Back
        </button>

        {step < 3 ? (
          <button
            type="button"
            disabled={!valid}
            onClick={() => setStep((s) => s + 1)}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--blue)] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(18,100,255,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(18,100,255,0.6)] disabled:opacity-30 disabled:pointer-events-none"
            style={{ color: '#fff' }}
          >
            Continue <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            disabled={status === 'loading' || !valid}
            onClick={submit}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--lime)] px-8 py-3 text-sm font-bold text-[var(--ink)] shadow-[0_8px_25px_rgba(216,242,107,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(216,242,107,0.5)] disabled:opacity-40 disabled:pointer-events-none"
          >
            {status === 'loading' ? <LoaderCircle size={16} className="animate-spin" /> : <ArrowRight size={16} />}
            {status === 'loading' ? 'Sending...' : 'Send brief'}
          </button>
        )}
      </div>

      {status === 'error' && (
        <p className="relative z-10 mt-4 text-xs font-semibold text-red-400">
          We couldn't send that just now. Please check details and try again.
        </p>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-xs font-medium">
      <span style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--lime)] focus:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/20 transition-all duration-300"
      />
    </label>
  );
}
