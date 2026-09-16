import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowDown, ArrowUpRight, Check} from 'lucide-react';
import {Container} from './Container';
import {LeadForm} from './LeadForm';
import {services,getService} from '@/content/services';

export function ServicePage({slug}:{slug:string}){const s=getService(slug);if(!s)notFound();return <main>
<section className="relative overflow-hidden bg-[var(--ink)] pb-24 pt-36 noise" style={{color:'#fff'}}>
 <div className="absolute inset-0 grid-bg opacity-30"/>
 <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--blue)]/30 blur-3xl"/>
 <Container className="relative">
  <div className="flex flex-wrap items-center justify-between gap-4">
   <span className="tag" style={{color:'rgba(255,255,255,.55)'}}><span className="dot" style={{color:'var(--blue)'}}/>{s.number} / Service</span>
   <Link href="/services" className="mono text-[9px] hover:text-white transition-colors" style={{color:'rgba(255,255,255,.4)'}}>All services ↗</Link>
  </div>
  <div className="mt-20 grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
   <div>
    <p className="mono text-[9px]" style={{color:'rgba(255,255,255,.35)'}}>BizNiti / {s.name}</p>
    <h1 className="display mt-4 max-w-5xl text-[clamp(4.4rem,9vw,9rem)] leading-[.77]">{s.name}<span style={{color:'var(--blue)'}}>.</span></h1>
   </div>
   <div className="self-end">
    <p className="max-w-md text-lg leading-8" style={{color:'rgba(255,255,255,.6)'}}>{s.short}</p>
    <Link href="#approach" className="btn mt-7 border-white/15" style={{color:'#fff'}}>Explore the approach <ArrowDown size={15}/></Link>
   </div>
  </div>
 </Container>
</section>
<section id="approach" className="paper-grid py-24 sm:py-32"><Container><div className="grid gap-12 lg:grid-cols-[.42fr_1.58fr]"><div><p className="mono text-[9px] text-black/40">01 / The opportunity</p></div><div><h2 className="display max-w-5xl text-[clamp(3.4rem,6.5vw,6.8rem)] leading-[.86]">{s.intro}</h2></div></div></Container></section>
<section className="bg-[var(--paper-2)] py-24"><Container><div className="flex items-end justify-between gap-8"><div><p className="mono text-[9px] text-black/40">02 / Capabilities</p><h2 className="display mt-4 text-5xl leading-[.85] sm:text-7xl">What this can include.</h2></div><div className="hidden sm:block"><span className="tag">{s.points.length} focus areas</span></div></div><div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">{s.points.map((p,i)=><div key={p} className="group min-h-44 bg-white p-6 transition hover:bg-[var(--ink)] hover:text-white"><span className="mono text-[9px] text-black/30 group-hover:text-white/35">0{i+1}</span><div className="mt-16 flex items-end justify-between gap-4"><h3 className="max-w-xs text-lg font-semibold tracking-[-.03em]">{p}</h3><ArrowUpRight size={15} className="opacity-25 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"/></div></div>)}</div></Container></section>
<section className="bg-[var(--blue)] py-24 sm:py-32" style={{color:'#fff'}}><Container><div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><span className="tag" style={{color:'rgba(255,255,255,.6)'}}>03 / The path</span><h2 className="display mt-7 text-6xl leading-[.84] sm:text-8xl">Clarity<br/>before<br/><span style={{color:'var(--lime)'}}>activity.</span></h2></div><div className="grid gap-2">{['Context','Focus','Execution','Measurement'].map((x,i)=><div key={x} className="grid grid-cols-[62px_1fr] items-center border-b border-white/15 py-6"><span className="mono text-[9px]" style={{color:'rgba(255,255,255,.45)'}}>0{i+1}</span><div><p className="text-xl font-semibold">{x}</p><p className="mt-1 text-sm" style={{color:'rgba(255,255,255,.55)'}}>A deliberate stage in the work, shaped around the business problem.</p></div></div>)}</div></div></Container></section>
<section className="py-24 sm:py-32"><Container><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="mono text-[9px] text-black/40">04 / Start here</p><h2 className="display mt-5 text-6xl leading-[.84] sm:text-8xl">Tell us what needs to move.</h2></div><div><LeadForm initialService={s.name}/></div></div></Container></section>
<section className="border-t border-black/10 py-16"><Container><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mono text-[9px] text-black/40">05 / Keep exploring</p><h2 className="display mt-3 text-5xl leading-[.86] sm:text-6xl">More ways to move.</h2></div><div className="grid gap-2 sm:grid-cols-2">{services.filter(x=>x.slug!==s.slug).slice(0,4).map(x=><Link key={x.slug} href={`/services/${x.slug}`} className="flex items-center justify-between border-b border-black/10 px-2 py-3 text-sm font-semibold">{x.name}<ArrowUpRight size={15}/></Link>)}</div></div></Container></section>
</main>}
