import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import { services } from '@/content/services';

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] py-16 sm:py-20 noise" style={{ color: '#fff' }}>
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_.8fr_1fr]">
          <div>
            <Logo dark />
            <h2 className="display mt-12 max-w-2xl text-5xl leading-[.86] sm:text-7xl" style={{ color: '#fff' }}>
              Make the next move <span style={{ color: 'var(--blue)' }}>count.</span>
            </h2>
            <div className="mt-8 flex items-center gap-2 text-xs text-white/50">
              <MapPin size={14} className="text-[var(--lime)]" />
              <span>Atlanta Metropolitan Area · GA, USA</span>
            </div>
          </div>

          <div>
            <p className="mono text-[9px] text-white/40 uppercase tracking-wider">Explore</p>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Let's talk</Link>
            </div>
          </div>

          <div>
            <p className="mono text-[9px] text-white/40 uppercase tracking-wider">Services</p>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between text-white/40">
          <span>© {new Date().getFullYear()} BizNiti. All rights reserved.</span>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <a href="tel:+11234567890" className="hover:text-white transition-colors">+1 (123) 456-7890</a>
            <a href="mailto:vish.nath@bizniti.com" className="hover:text-white transition-colors flex items-center gap-1">
              vish.nath@bizniti.com <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
