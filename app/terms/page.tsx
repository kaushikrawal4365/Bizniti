import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'BizNiti Terms & Conditions governing digital strategy, website development, advertising, and marketing advisory services.',
};

export default function Terms() {
  return (
    <main className="bg-[#faf9f5] min-h-screen pt-36 pb-24">
      <section className="pb-12">
        <Container className="max-w-4xl">
          <span className="tag text-black/60">Legal / Governance</span>
          <h1 className="display mt-6 text-5xl sm:text-7xl lg:text-8xl text-[var(--ink)] leading-[.85]">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-black/50 mono">Last updated: September 2026 · BizNiti Services</p>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-4xl">
          <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-12 shadow-sm prose prose-lg max-w-none text-black/75 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">1. Agreement to Terms</h2>
              <p className="text-base leading-7 text-black/70">
                By accessing our website ([bizniti-v1.vercel.app](https://bizniti-v1.vercel.app/)) or engaging BizNiti for digital strategy, web design, SEO, performance marketing, content, or advisory services, you agree to be bound by these Terms & Conditions.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">2. Services & Scope</h2>
              <p className="text-base leading-7 text-black/70">
                BizNiti provides specialized digital growth and strategic consulting services. All work statements, timelines, deliverables, and performance benchmarks are executed pursuant to mutual project briefs and formal client service agreements.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">3. Intellectual Property Rights</h2>
              <p className="text-base leading-7 text-black/70">
                Unless otherwise specified in a custom client contract, all original website designs, strategic documents, codebase structures, and assets created by BizNiti remain the intellectual property of BizNiti until full payment of agreed fees, whereupon final client deliverables transfer according to the specific master service agreement.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">4. Confidentiality & Data Protection</h2>
              <p className="text-base leading-7 text-black/70">
                Both parties agree to hold non-public business information, strategic plans, customer metrics, and proprietary trade secrets in strict confidence. Please refer to our{' '}
                <Link href="/privacy" className="text-[var(--blue)] font-semibold underline">
                  Privacy Policy
                </Link>{' '}
                for detailed data governance practices.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">5. Limitation of Liability</h2>
              <p className="text-base leading-7 text-black/70">
                BizNiti provides marketing recommendations and digital systems built on experience and strategic foresight. However, third-party platform algorithms (e.g., search engine updates, ad network bidding fluctuations) are beyond our direct control. In no event shall BizNiti be liable for indirect or consequential damages exceeding the fees paid for the specific service scope.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">6. Contact Information</h2>
              <p className="text-base leading-7 text-black/70">
                For legal inquiries regarding these terms, please contact us at{' '}
                <a href="mailto:vish.nath@bizniti.com" className="text-[var(--blue)] font-bold hover:underline">
                  vish.nath@bizniti.com
                </a>{' '}
                or write to BizNiti, Atlanta Metropolitan Area, GA, USA.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
