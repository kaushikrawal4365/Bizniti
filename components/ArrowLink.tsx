import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 text-sm font-semibold ${light ? 'text-white' : ''}`}>
      <span>{children}</span>
      <span className="grid h-8 w-8 place-items-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><ArrowUpRight size={15} /></span>
    </Link>
  );
}
