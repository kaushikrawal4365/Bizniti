import type { Metadata } from 'next';
import { ArrowUpRight, MapPin, Briefcase } from 'lucide-react';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Careers — Join BizNiti',
  description: 'Explore career opportunities and leadership roles at BizNiti. Join our digital strategy and marketing execution team.',
};

export default function Careers() {
  return (
    <main>
      <section className="bg-[var(--ink)] pb-24 pt-36 text-white noise">
        <Container>
          <span className="tag text-white/60">Careers / Opportunities</span>
          <h1 className="display mt-8 max-w-6xl text-[clamp(4rem,8vw,8rem)] leading-[.82]" style={{ color: '#fff' }}>
            Do work that makes digital <span className="text-[var(--lime)]">less disposable.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            BizNiti brings together strategy, technical execution, and creative clarity. Explore open positions to join our team in guiding growing brands.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-[var(--paper-2)]">
        <Container>
          <div className="rounded-3xl border border-black/10 bg-white p-7 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 border-b border-black/10 pb-6">
              <div>
                <span className="mono text-[10px] text-[var(--blue)] font-bold uppercase tracking-wider">
                  CURRENT OPENING
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--ink)]">
                  Fractional Chief Marketing Officer (CMO)
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-black/55">
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} className="text-[var(--blue)]" /> Executive Advisory · Part-time / Hybrid
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-[var(--blue)]" /> Atlanta Metropolitan Area, GA, USA
                  </span>
                </div>
              </div>
              <a
                href="mailto:vish.nath@bizniti.com?subject=BizNiti%20CMO%20Application"
                className="btn btn-dark text-xs shrink-0"
                style={{ color: '#fff' }}
              >
                Apply for position <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-[var(--ink)]">Role Responsibilities</h3>
                <p className="mt-2 text-sm leading-7 text-black/65">
                  Design and execute comprehensive growth strategies aligned with client business goals, mentor internal and client teams, evaluate martech stacks, and ensure marketing investments drive clear ROI.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--ink)]">Qualifications & Experience</h3>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-black/65">
                  <li className="flex items-center gap-2">• 10+ years of proven digital marketing & brand leadership</li>
                  <li className="flex items-center gap-2">• Bachelor’s or Master’s in Marketing, Business, or related discipline</li>
                  <li className="flex items-center gap-2">• Hands-on mastery across SEO, PPC, content, social and CRM systems</li>
                  <li className="flex items-center gap-2">• Exceptional executive presentation and client relationship skills</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
