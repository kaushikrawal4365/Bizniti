import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Share2, Sparkles, User, CheckCircle2 } from 'lucide-react';
import { insights } from '@/content/insights';
import { Container } from '@/components/Container';

export function generateStaticParams() {
  return insights.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);
  return {
    title: `${article?.title || 'Insight'} — BizNiti`,
    description: article?.excerpt,
  };
}

export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);

  if (!article) notFound();

  const related = insights.filter((i) => i.slug !== slug);

  return (
    <main className="bg-[#faf9f5] min-h-screen">
      {/* ── Article Hero Header ── */}
      <section className="relative overflow-hidden bg-[var(--ink)] pb-20 pt-36 text-white noise">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[var(--blue)]/30 blur-3xl pointer-events-none" />
        <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[var(--lime)]/15 blur-3xl pointer-events-none" />

        <Container className="relative z-10 max-w-4xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-white/70 hover:bg-white/15 hover:text-white transition-all mb-8"
          >
            <ArrowLeft size={14} /> Back to all insights
          </Link>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[var(--blue)] px-3.5 py-1 text-xs font-bold text-white">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/50">
              <Clock size={13} /> {article.readTime}
            </span>
            <span className="text-xs text-white/40">• {article.date}</span>
          </div>

          <h1 className="display mt-6 text-4xl sm:text-6xl lg:text-7xl leading-[.88]" style={{ color: '#fff' }}>
            {article.title}
          </h1>

          <p className="mt-8 text-lg sm:text-xl leading-8 text-white/70 max-w-3xl">
            {article.excerpt}
          </p>

          {/* Author Badge */}
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lime)] text-[var(--ink)] font-extrabold text-sm shadow-[0_0_15px_rgba(216,242,107,0.4)]">
                VN
              </div>
              <div>
                <p className="text-sm font-bold text-white">{article.author.name}</p>
                <p className="text-xs text-white/50">{article.author.role}</p>
              </div>
            </div>

            <a
              href="mailto:vish.nath@bizniti.com"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lime)] hover:underline"
            >
              Contact Vish Nath <ArrowUpRight size={14} />
            </a>
          </div>
        </Container>
      </section>

      {/* ── Article Content Section ── */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          {/* Key Takeaway Highlight Box */}
          {article.takeaway && (
            <div className="relative overflow-hidden rounded-3xl border border-[var(--blue)]/30 bg-white p-6 sm:p-9 shadow-xl mb-12">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--blue)]" />
              <div className="flex items-center gap-2 text-[11px] font-bold text-[var(--blue)] uppercase tracking-wider mb-2">
                <Sparkles size={14} /> Executive Summary / Key Takeaway
              </div>
              <p className="text-base sm:text-lg font-semibold leading-8 text-[var(--ink)]">
                “{article.takeaway}”
              </p>
            </div>
          )}

          {/* Article Main Body */}
          <article className="prose prose-lg max-w-none space-y-8 text-black/75">
            {article.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-base sm:text-lg leading-8 sm:leading-9 text-black/80 font-normal">
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="display mt-10 text-2xl sm:text-4xl text-[var(--ink)] pt-4 border-t border-black/5">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={index}
                    className="my-8 rounded-3xl bg-[var(--paper-2)] border-l-4 border-[var(--blue)] p-6 sm:p-8 italic text-lg sm:text-xl leading-9 text-[var(--ink)] font-serif"
                  >
                    “{block.text}”
                    {block.author && (
                      <cite className="not-italic block mt-3 text-xs font-sans font-bold text-black/50 uppercase tracking-wider">
                        — {block.author}
                      </cite>
                    )}
                  </blockquote>
                );
              }

              if (block.type === 'list' && block.items) {
                return (
                  <ul key={index} className="my-6 space-y-4 pt-2">
                    {block.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base sm:text-lg leading-8 text-black/80">
                        <CheckCircle2 size={20} className="text-[var(--blue)] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === 'callout') {
                return (
                  <div key={index} className="my-8 rounded-2xl bg-[var(--lime)]/15 border border-[var(--lime)]/40 p-6 text-sm sm:text-base font-medium leading-7 text-[var(--ink)]">
                    💡 {block.text}
                  </div>
                );
              }

              return null;
            })}
          </article>

          {/* Article Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2 pt-8 border-t border-black/10">
              <span className="mono text-xs text-black/40 mr-2">TOPICS:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white border border-black/10 px-4 py-1.5 text-xs font-semibold text-black/70 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Profile Bio Box */}
          <div className="mt-14 rounded-3xl border border-black/10 bg-white p-7 sm:p-9 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--lime)] font-extrabold text-xl shadow-lg">
              VN
            </div>
            <div className="flex-1">
              <p className="mono text-[10px] text-black/40 uppercase">AUTHOR PROFILE</p>
              <h3 className="text-xl font-bold text-[var(--ink)] mt-0.5">{article.author.name}</h3>
              <p className="text-xs font-medium text-[var(--blue)]">{article.author.role}</p>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Vish Nath advises growing brands on digital strategy, search, performance marketing systems, and high-converting web experiences.
              </p>
            </div>
            <a
              href="mailto:vish.nath@bizniti.com"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-xs font-bold text-white hover:bg-[var(--blue)] transition-colors shrink-0"
              style={{ color: '#fff' }}
            >
              Email Vish <ArrowUpRight size={14} />
            </a>
          </div>

          {/* ── Related Articles Carousel/Grid ── */}
          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-black/10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="mono text-[9px] text-black/40 uppercase">READ NEXT</span>
                  <h3 className="display text-3xl sm:text-4xl text-[var(--ink)] mt-1">More strategic insights</h3>
                </div>
                <Link href="/insights" className="text-xs font-bold text-[var(--blue)] hover:underline">
                  View all →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/insights/${rel.slug}`}
                    className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[var(--blue)]/30"
                  >
                    <span className="text-[10px] font-bold text-[var(--blue)] uppercase">{rel.category}</span>
                    <h4 className="mt-2 text-xl font-bold text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors leading-tight">
                      {rel.title}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-black/55">{rel.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
