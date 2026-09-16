import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock, Sparkles, User } from 'lucide-react';
import { Container } from '@/components/Container';
import { insights } from '@/content/insights';

export const metadata: Metadata = {
  title: 'Insights & Perspectives — BizNiti',
  description: 'Ideas, frameworks, and strategic thinking on digital transformation, content systems, and high-converting web architecture by Vish Nath.',
};

export default function Insights() {
  const featured = insights[0];
  const list = insights.slice(1);

  return (
    <main className="bg-[var(--paper)] min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--ink)] pb-20 pt-36 text-white noise">
        <div className="absolute -right-36 top-12 h-96 w-96 rounded-full bg-[var(--blue)]/25 blur-3xl pointer-events-none" />
        <div className="absolute -left-36 bottom-0 h-80 w-80 rounded-full bg-[var(--lime)]/15 blur-3xl pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/10">
              <Sparkles size={14} className="text-[var(--lime)]" />
            </span>
            <span className="mono text-xs tracking-widest text-white/60 uppercase">04 / Insights & Editorial</span>
          </div>

          <h1 className="display mt-6 max-w-5xl text-[clamp(3.8rem,8.5vw,8.5rem)] leading-[.82]">
            Ideas worth <span className="text-[var(--blue)]">carrying forward.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-8 text-white/65">
            Practical frameworks, strategic breakdowns, and actionable digital insights from Vish Nath and the BizNiti team.
          </p>
        </Container>
      </section>

      {/* ── Editorial Articles Grid ── */}
      <section className="py-16 sm:py-24">
        <Container>
          {/* Featured Article Card */}
          {featured && (
            <div className="mb-12">
              <span className="mono text-[10px] tracking-wider text-black/40 uppercase mb-4 block">FEATURED ESSAY</span>
              <Link
                href={`/insights/${featured.slug}`}
                className="group relative block overflow-hidden rounded-[36px] border border-black/10 bg-white p-8 sm:p-12 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--blue)]/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[var(--blue)]/10 px-4 py-1.5 text-xs font-bold text-[var(--blue)]">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-black/40">
                      <Clock size={13} /> {featured.readTime}
                    </span>
                    <span className="text-xs text-black/40">• {featured.date}</span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--ink)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--blue)] group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <h2 className="display mt-8 max-w-4xl text-3xl sm:text-5xl lg:text-6xl leading-[.92] text-[var(--ink)] transition-colors group-hover:text-[var(--blue)]">
                  {featured.title}
                </h2>

                <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-black/65">
                  {featured.excerpt}
                </p>

                {/* Takeaway callout quote inside featured card */}
                <div className="mt-8 rounded-2xl border-l-4 border-[var(--blue)] bg-[var(--paper)] p-5 text-sm leading-7 text-black/80 font-medium">
                  <span className="block text-[11px] font-bold text-[var(--blue)] uppercase tracking-wider mb-1">Key Takeaway</span>
                  “{featured.takeaway}”
                </div>

                {/* Author footer */}
                <div className="mt-8 flex items-center gap-3 pt-6 border-t border-black/5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] text-white font-bold text-xs">
                    VN
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--ink)]">{featured.author.name}</p>
                    <p className="text-[11px] text-black/45">{featured.author.role}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Grid of Remaining Articles */}
          <div className="grid gap-8 md:grid-cols-2">
            {list.map((x, i) => (
              <Link
                key={x.slug}
                href={`/insights/${x.slug}`}
                className="group relative flex flex-col justify-between rounded-[32px] border border-black/10 bg-white p-7 sm:p-9 shadow-md transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--blue)]/30"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="mono text-[10px] font-bold text-[var(--blue)] uppercase">{x.category}</span>
                      <span className="text-xs text-black/30">•</span>
                      <span className="flex items-center gap-1 text-xs text-black/40">
                        <Clock size={12} /> {x.readTime}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--blue)]"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl sm:text-3xl font-bold tracking-[-.03em] text-[var(--ink)] transition-colors group-hover:text-[var(--blue)] leading-tight">
                    {x.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-7 text-black/60">
                    {x.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--paper-2)] text-[var(--ink)] font-bold text-[10px]">
                      VN
                    </div>
                    <span className="text-xs font-semibold text-black/70">{x.author.name}</span>
                  </div>
                  <span className="text-xs text-black/40">{x.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Bottom Insight CTA ── */}
      <section className="bg-[var(--ink)] py-20 text-white">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 backdrop-blur-xl">
            <div>
              <span className="mono text-[9px] text-[var(--lime)] uppercase tracking-widest">GET INSIGHTS DIRECTLY</span>
              <h2 className="display mt-3 text-3xl sm:text-5xl leading-[.9]">Want clearer strategy in your inbox?</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                Contact Vish Nath directly to discuss custom strategy or get our latest frameworks before they are published.
              </p>
            </div>
            <Link
              href="mailto:vish.nath@bizniti.com"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--lime)] px-8 py-3.5 text-sm font-bold text-[var(--ink)] shadow-[0_8px_25px_rgba(216,242,107,0.3)] transition-all hover:scale-[1.03]"
            >
              Email Vish Nath <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
