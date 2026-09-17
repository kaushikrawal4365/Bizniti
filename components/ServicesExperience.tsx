'use client';
import Link from 'next/link';
import {ArrowUpRight, ChevronDown} from 'lucide-react';
import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {services} from '@/content/services';

export function ServicesExperience() {
  const [active, setActive] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(0);
  const s = services[active];

  return (
    <section className="border-y border-black/10 py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[.38fr_1.62fr]">
          {/* Section Header */}
          <div>
            <p className="mono text-[9px] text-black/40">02 / Capabilities</p>
            <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-8xl leading-[.84]">
              Seven ways to move.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-black/55">
              The full BizNiti offer, reframed as one connected system rather than a menu of disconnected tactics.
            </p>
          </div>

          {/* ── DESKTOP VIEW (Side-by-side hover card preview) ── */}
          <div className="hidden lg:grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {services.map((item, i) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  onMouseEnter={() => setActive(i)}
                  className={`group grid grid-cols-[48px_1fr_auto] items-center gap-3 py-5 transition-colors duration-200 ${
                    i === active ? 'text-[var(--ink)]' : 'text-black/35 hover:text-black/60'
                  }`}
                >
                  <span className="mono text-[9px]">{item.number}</span>
                  <span className="text-xl font-semibold tracking-[-.035em] sm:text-2xl">{item.name}</span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>

            <div className="relative min-h-[480px] overflow-hidden rounded-[30px] bg-[var(--ink)] p-6 text-white sm:p-8 shadow-[0_24px_70px_rgba(5,16,36,0.18)]">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute -right-16 -top-12 h-56 w-56 rounded-full bg-[var(--blue)]/50 blur-3xl pointer-events-none" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="tag text-white/60" style={{ color: 'rgba(255,255,255,.6)' }}>
                    <span className="dot" />
                    {s.number} / {s.navName || s.name}
                  </span>
                  <h3 className="display mt-10 text-5xl sm:text-6xl leading-[.85]" style={{ color: '#fff' }}>
                    {s.name.split(' ').slice(0, 2).join(' ')}
                    <br />
                    <span className="text-[var(--blue)]">with intent.</span>
                  </h3>
                </div>
                <div>
                  <p className="max-w-md text-sm leading-6 text-white/70">{s.short}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[var(--lime)] transition-colors"
                  >
                    Explore service <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE & TABLET VIEW (Inline Expandable Accordion Card Deck) ── */}
          <div className="grid gap-3 lg:hidden">
            {services.map((item, i) => {
              const isOpen = mobileExpanded === i;
              return (
                <div
                  key={item.slug}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-white/20 bg-[var(--ink)] text-white shadow-xl'
                      : 'border-black/10 bg-white/70 text-[var(--ink)]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-4 text-left font-semibold"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`mono text-xs ${isOpen ? 'text-[var(--lime)]' : 'text-black/40'}`}>
                        {item.number}
                      </span>
                      <span className={`text-lg sm:text-xl ${isOpen ? 'text-white font-bold' : 'text-[var(--ink)]'}`}>
                        {item.name}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[var(--lime)]' : 'text-black/40'
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="px-4 pb-5 pt-1"
                      >
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-sm leading-6 text-white/75">{item.short}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-mono text-white/60">
                              {item.points.length} focus areas
                            </span>
                            <Link
                              href={`/services/${item.slug}`}
                              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--lime)] px-4 py-2 text-xs font-bold text-[var(--ink)] shadow-md"
                            >
                              Explore service <ArrowUpRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
