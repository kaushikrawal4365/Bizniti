'use client';
import {useRef, useState} from 'react';
import {useScroll, useTransform, motion, useMotionValueEvent} from 'motion/react';

const slides: [string, string, string, string][] = [
  ['01', 'Understand', 'Start with business context, audience and the actual problem—not the deliverable.', 'var(--blue)'],
  ['02', 'Strategize', 'Choose the few moves with the clearest path to business impact.', 'var(--lav)'],
  ['03', 'Create', 'Turn the strategy into experiences, content and campaigns people can use.', 'var(--lime)'],
  ['04', 'Launch', 'Put the system into the world with care, speed and clarity.', 'var(--peach)'],
  ['05', 'Optimize', 'Learn from what happens, improve the system and keep momentum moving.', 'var(--powder)'],
];

export function HorizontalStory() {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: ref, offset: ['start start', 'end end']});
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const [activeSlide, setActiveSlide] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * slides.length), slides.length - 1);
    setActiveSlide(idx);
  });

  return (
    <section ref={ref} className="relative bg-[var(--ink)] text-white">
      
      {/* ── DESKTOP HORIZONTAL SCROLL STORY (md:block) ── */}
      <div className="hidden md:block h-[400vh] relative">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">

          {/* Floating Progress Bar (Positioned below the fixed top navbar bar) */}
          <div className="absolute left-1/2 top-[84px] sm:top-[92px] z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-[#0b1320]/80 px-4 py-2.5 backdrop-blur-xl shadow-lg">
            <span className="mono text-[9px] text-white/50">The BizNiti System</span>
            <span className="mx-1 h-3 w-px bg-white/20" />
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <span key={i} className={`scroll-progress-dot ${i === activeSlide ? 'active' : ''}`} />
              ))}
            </div>
            <span className="mono text-[9px] text-white/60">
              {String(activeSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
            </span>
          </div>

          <motion.div style={{x}} className="flex gap-5 px-[max(24px,calc((100vw-1480px)/2+24px))] will-change-transform pt-12">
            {slides.map(([n, t, d, accent], i) => {
              const isActive = i === activeSlide;
              return (
                <article
                  key={n}
                  className="relative flex h-[60vh] w-[70vw] min-w-[70vw] flex-col justify-between overflow-hidden rounded-[32px] border border-white/15 p-6 transition-all duration-500 sm:p-10 md:w-[42vw] md:min-w-[42vw] shadow-2xl"
                  style={{background: isActive ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)'}}
                >
                  {/* Grid background */}
                  <div className="absolute inset-0 grid-bg opacity-20" />

                  {/* Accent glow */}
                  <div
                    className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[80px] transition-opacity duration-700 pointer-events-none"
                    style={{background: `${accent}`, opacity: isActive ? 0.5 : 0.15}}
                  />
                  <div
                    className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full blur-[60px] opacity-20 pointer-events-none"
                    style={{background: `${accent}`}}
                  />

                  {/* Top bar */}
                  <div className="relative flex items-center justify-between">
                    <span className="mono text-xs text-white/50">{n} / 05</span>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60 bg-white/5">
                      BizNiti system
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div
                      className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-lg font-bold shadow-md"
                      style={{background: `color-mix(in srgb, ${accent} 20%, transparent)`, color: 'white'}}
                    >
                      {n}
                    </div>
                    <h3 className="display max-w-2xl text-[clamp(2.8rem,5vw,5.5rem)] leading-[.88]">
                      {t}
                      <span style={{color: accent}}>.</span>
                    </h3>
                    <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-white/70">{d}</p>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE & TABLET CARD DECK STACKING (md:hidden) ── */}
      <div className="block md:hidden py-16 px-4">
        {/* Mobile Header indicator */}
        <div className="mb-10 text-center">
          <span className="mono text-[10px] tracking-widest text-[var(--lime)] bg-[var(--lime)]/10 px-3 py-1.5 rounded-full border border-[var(--lime)]/20">
            THE BIZNITI SYSTEM
          </span>
          <h2 className="display mt-4 text-4xl sm:text-5xl leading-none text-white">
            Five steps to clarity.
          </h2>
        </div>

        {/* Stacked Cards Deck Container */}
        <div className="relative space-y-6 pb-20">
          {slides.map(([n, t, d, accent], i) => {
            // Incremental sticky top offsets for card deck peek effect
            const topOffset = 84 + i * 24; 
            return (
              <div
                key={n}
                className="sticky rounded-[28px] border border-white/20 bg-[#0d1320] p-6 shadow-[0_-12px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300"
                style={{
                  top: `${topOffset}px`,
                  zIndex: i + 10,
                }}
              >
                {/* Accent glow aura */}
                <div
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full blur-[60px] opacity-40 pointer-events-none"
                  style={{background: accent}}
                />

                {/* Card Header & Stack Indicator */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="grid h-7 w-7 place-items-center rounded-xl text-xs font-bold text-white shadow-sm"
                      style={{background: `color-mix(in srgb, ${accent} 30%, transparent)`}}
                    >
                      {n}
                    </span>
                    <span className="mono text-xs font-bold text-white/90">{t}</span>
                  </div>
                  <span className="mono text-[10px] text-white/50">{n} / 05</span>
                </div>

                {/* Card Body */}
                <h3 className="display text-3xl leading-[.9] text-white">
                  {t}
                  <span style={{color: accent}}>.</span>
                </h3>
                <p className="mt-3 text-xs leading-6 text-white/70">{d}</p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
