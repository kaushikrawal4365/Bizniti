import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Compass } from 'lucide-react';
import { Container } from '@/components/Container';
import { services } from '@/content/services';

export const metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-white noise flex flex-col justify-between pt-36 pb-20">
      <Container className="max-w-4xl flex-1 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-[var(--lime)] w-fit mb-8">
          <Compass size={14} /> 404 / Route Not Found
        </div>

        <h1 className="display text-6xl sm:text-8xl lg:text-9xl leading-[.78]" style={{ color: '#fff' }}>
          Lost in <span className="text-[var(--blue)] font-serif italic">navigation.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-white/65 max-w-2xl leading-8">
          The page or asset you are trying to access isn’t here. It may have been moved, renamed, or is currently under revision.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn btn-blue" style={{ color: '#fff' }}>
            <ArrowLeft size={16} /> Return to Homepage
          </Link>
          <Link href="/contact" className="btn border-white/20 text-white hover:bg-white/10" style={{ color: '#fff' }}>
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Quick Links to Services */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="mono text-[10px] text-white/40 uppercase tracking-wider mb-6">OR EXPLORE CORE CAPABILITIES:</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.08] hover:border-[var(--blue)]/50 transition-all"
              >
                <span className="mono text-[9px] text-[var(--lime)]">{service.number}</span>
                <h3 className="mt-1 text-sm font-semibold text-white group-hover:text-[var(--lime)] transition-colors flex items-center justify-between">
                  {service.name}
                  <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
