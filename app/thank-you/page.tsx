import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft, ArrowUpRight, Calendar, Mail, Clock } from 'lucide-react';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Thank You — Brief Received',
  description: 'Thank you for contacting BizNiti. We have received your project details and will be in touch shortly.',
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[var(--paper-2)] pt-36 pb-24">
      <Container className="max-w-3xl">
        <div className="rounded-[36px] border border-black/10 bg-white p-8 sm:p-14 shadow-xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--lime)] text-[var(--ink)] shadow-[0_0_20px_rgba(216,242,107,0.5)] mb-8">
            <CheckCircle2 size={36} />
          </div>

          <span className="mono text-xs text-[var(--blue)] font-bold tracking-widest uppercase">
            BRIEF RECEIVED / CONFIRMATION
          </span>

          <h1 className="display mt-3 text-4xl sm:text-6xl text-[var(--ink)] leading-[.85]">
            Thank you. <br />
            <span className="text-[var(--blue)] font-serif italic">We're reviewing your context.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-8 text-black/70">
            Your project brief has been logged successfully into our system. Our strategy team will examine your requirements and reach back out with a tailored next step.
          </p>

          {/* Expectations Timeline */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-[var(--paper-2)] p-6 space-y-4">
            <h3 className="text-xs font-bold mono text-black/40 uppercase tracking-wider">
              WHAT HAPPENS NEXT:
            </h3>

            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[var(--blue)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[var(--ink)]">24-Hour Review</p>
                  <p className="text-xs text-black/55 mt-0.5">We analyze your goals and current digital setup.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[var(--blue)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[var(--ink)]">Direct Reachout</p>
                  <p className="text-xs text-black/55 mt-0.5">Vish Nath or a senior team member sends initial feedback.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar size={18} className="text-[var(--blue)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[var(--ink)]">Discovery Call</p>
                  <p className="text-xs text-black/55 mt-0.5">We align on roadmap, scope, and strategic priorities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-black/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)] hover:text-[var(--blue)] transition-colors"
            >
              <ArrowLeft size={16} /> Return to Homepage
            </Link>

            <Link
              href="/insights"
              className="btn btn-dark text-xs"
              style={{ color: '#fff' }}
            >
              Read BizNiti Insights <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
