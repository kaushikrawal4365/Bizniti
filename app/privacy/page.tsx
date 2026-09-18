import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BizNiti Privacy Policy detailing how we collect, store, protect, and process user and client information.',
};

export default function Privacy() {
  return (
    <main className="bg-[#faf9f5] min-h-screen pt-36 pb-24">
      <section className="pb-12">
        <Container className="max-w-4xl">
          <span className="tag text-black/60">Legal / Privacy</span>
          <h1 className="display mt-6 text-5xl sm:text-7xl lg:text-8xl text-[var(--ink)] leading-[.85]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-black/50 mono">Last updated: September 2026 · BizNiti Compliance</p>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-4xl">
          <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-12 shadow-sm prose prose-lg max-w-none text-black/75 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">1. Information We Collect</h2>
              <p className="text-base leading-7 text-black/70">
                When you submit a project brief, fill out our contact form, or interact with BizNiti, we may collect personal details such as your name, business email, phone number, company name, website URL, and project goals.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">2. How We Use Information</h2>
              <p className="text-base leading-7 text-black/70">
                We use the collected information strictly to:
              </p>
              <ul className="list-disc pl-6 text-base leading-7 text-black/70 mt-2 space-y-1">
                <li>Evaluate your digital strategy and project requirements.</li>
                <li>Communicate directly regarding project proposals and services.</li>
                <li>Improve our website usability and analytics performance.</li>
                <li>Comply with legal obligations and safeguard business integrity.</li>
              </ul>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">3. Cookies & Tracking Technologies</h2>
              <p className="text-base leading-7 text-black/70">
                BizNiti uses essential cookies and performance analytics (such as Vercel Analytics) to understand how visitors engage with our site. We do not sell your personal data to third-party ad brokers. You can customize cookie preferences via our website cookie banner.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">4. Data Storage & Security</h2>
              <p className="text-base leading-7 text-black/70">
                Information submitted via forms is stored securely on encrypted infrastructure (e.g., Supabase Postgres & Resend APIs). We implement industry-standard encryption protocols (TLS/SSL) to protect your data against unauthorized access or disclosure.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">5. Your Rights & Choices</h2>
              <p className="text-base leading-7 text-black/70">
                Depending on your location, you may have rights under applicable privacy laws (including GDPR and CCPA) to access, update, or request deletion of your personal data.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">6. Contact Privacy Team</h2>
              <p className="text-base leading-7 text-black/70">
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at{' '}
                <a href="mailto:vish.nath@bizniti.com" className="text-[var(--blue)] font-bold hover:underline">
                  vish.nath@bizniti.com
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
