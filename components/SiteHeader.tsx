'use client';
import Link from 'next/link';
import {ChevronDown, ArrowUpRight, Menu, X} from 'lucide-react';
import {usePathname} from 'next/navigation';
import {useState, useEffect, useRef, useCallback} from 'react';
import {motion} from 'motion/react';
import {Logo} from './Logo';
import {services} from '@/content/services';

export function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMenu(false);
    setServicesOpen(false);
  }, [pathname]);

  const openDropdown = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }, []);

  const active = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const isHome = pathname === '/' && !active('/services') && !active('/about') && !active('/insights') && !active('/careers');

  const navItems = [
    { id: 'home', label: 'Home', href: '/', isActive: isHome },
    { id: 'services', label: 'Services', href: '/services', isActive: active('/services') || servicesOpen, isDropdown: true },
    { id: 'about', label: 'About', href: '/about', isActive: active('/about') },
    { id: 'insights', label: 'Insights', href: '/insights', isActive: active('/insights') },
    { id: 'careers', label: 'Careers', href: '/careers', isActive: active('/careers') },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="relative mx-auto max-w-[1480px] rounded-2xl border border-white/70 bg-[#f8f7f2]/78 shadow-[0_16px_50px_rgba(5,16,36,.09)] backdrop-blur-2xl">
        <div className="flex h-[62px] items-center justify-between px-3 sm:px-4">
          <Link href="/" aria-label="BizNiti home">
            <Logo />
          </Link>

          {/* ── Desktop nav with iOS-style liquid layoutId pill animation ── */}
          <nav 
            className="relative hidden items-center gap-1 rounded-xl bg-black/[0.03] p-1 border border-black/5 md:flex" 
            onMouseLeave={closeDropdown}
          >
            {navItems.map((item) => {
              return (
                <div key={item.id} className="relative">
                  {item.isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-black/5"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}

                  {item.isDropdown ? (
                    <div onMouseEnter={openDropdown}>
                      <button
                        className={`relative z-10 inline-flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                          item.isActive ? 'text-[var(--ink)] font-bold' : 'text-black/65 hover:text-black'
                        }`}
                      >
                        Services{' '}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative z-10 block px-3.5 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                        item.isActive ? 'text-[var(--ink)] font-bold' : 'text-black/65 hover:text-black'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* ── Services Mega Dropdown (Centered under Desktop Nav Container) ── */}
            {servicesOpen && (
              <div
                className="dropdown-enter dropdown-panel absolute left-1/2 top-[calc(100%+12px)] z-50 w-[min(780px,calc(100vw-32px))] max-h-[calc(100vh-90px)] -translate-x-1/2 overflow-y-auto rounded-[28px] border border-black/10 bg-[#fcfcf9] p-4 shadow-[0_28px_80px_rgba(5,16,36,0.22)]"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="absolute -top-3 left-0 right-0 h-3" />
                <div className="grid grid-cols-1 md:grid-cols-[.65fr_1.35fr] gap-3">
                  <div className="flex flex-col justify-between rounded-2xl bg-[var(--ink)] p-5 text-white relative overflow-hidden">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--blue)]/30 blur-2xl pointer-events-none" />
                    <div className="relative z-10">
                      <span className="mono text-[9px] text-white/50">Capabilities / 07</span>
                      <h3 className="display mt-3 text-3xl sm:text-4xl leading-[.92]">Build the next move.</h3>
                      <p className="mt-3 text-xs leading-5 text-white/65">
                        From digital foundations to demand generation and strategic leadership.
                      </p>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lime)] hover:underline"
                    >
                      All services <ArrowUpRight size={14} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="group rounded-xl p-3 transition-all duration-200 hover:bg-black/[0.04]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="mono text-[9px] text-black/40">{s.number}</span>
                          <ArrowUpRight
                            size={13}
                            className="text-black/30 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-[-.02em] text-[var(--ink)]">
                          {s.navName || s.name}
                        </p>
                        <p className="mt-0.5 line-clamp-1 text-[11px] leading-4 text-black/55">{s.short}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
              style={{ color: '#fff' }}
            >
              {"Let's talk"} <ArrowUpRight size={15} />
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 transition-colors hover:bg-white/60 md:hidden"
              onClick={() => setMenu((v) => !v)}
              aria-label={menu ? 'Close menu' : 'Open menu'}
            >
              {menu ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Navigation Menu ── */}
        {menu && (
          <div className="mobile-menu-enter border-t border-black/10 px-3 py-3 md:hidden">
            <div className="grid gap-1">
              {['/', '/about', '/insights', '/careers', '/faqs', '/contact'].map((h, i) => {
                const label = h === '/' ? 'Home' : h === '/contact' ? "Let's talk" : h.slice(1).replace('-', ' ');
                const isActive = h === '/' ? isHome : active(h);
                return (
                  <Link
                    key={h}
                    onClick={() => setMenu(false)}
                    href={h}
                    className={`mobile-nav-item rounded-xl px-3 py-3 text-sm font-semibold capitalize transition-colors ${
                      isActive ? 'bg-white shadow-sm text-[var(--blue)]' : 'hover:bg-white/50'
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="mobile-nav-item mt-1 rounded-xl border border-black/10 p-2" style={{ animationDelay: '300ms' }}>
                <p className="mono px-2 pb-2 pt-1 text-[9px] text-black/40">Services</p>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    onClick={() => setMenu(false)}
                    href={`/services/${s.slug}`}
                    className={`flex items-center justify-between rounded-lg px-2 py-2.5 text-sm transition-colors ${
                      active(`/services/${s.slug}`)
                        ? 'bg-[var(--powder)] text-[var(--blue)] font-semibold'
                        : 'hover:bg-white/50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="mono text-[9px] text-black/30">{s.number}</span>
                      {s.name}
                    </span>
                    <ArrowUpRight size={13} className="opacity-40" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
