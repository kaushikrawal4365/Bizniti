import Link from 'next/link';
import {ArrowDown,ArrowUpRight,Plus} from 'lucide-react';
import {Container} from '@/components/Container';
import {HomeVisual} from '@/components/HomeVisual';
import {HorizontalStory} from '@/components/HorizontalStory';
import {ServicesExperience} from '@/components/ServicesExperience';
import {LeadForm} from '@/components/LeadForm';
import {RevealOnScroll} from '@/components/RevealOnScroll';
import {GravityText, ScrollStumbleText} from '@/components/GravityText';
import {services} from '@/content/services';
import {insights} from '@/content/insights';

const stats=[
 ['150+','Projects delivered'],
 ['7','Core capabilities'],
 ['95%','Client retention'],
 ['2026','Year of clarity'],
];

export default function Home(){return <main>

{/* ── Hero ── */}
<section className="relative overflow-hidden bg-[var(--ink)] pb-8 pt-36 noise sm:pt-40" style={{color:'#fff'}}>
 <div className="hero-gradient"/>
 <Container>
  <div className="grid items-end gap-12 lg:grid-cols-[1.02fr_.98fr]">
   <div>
    <span className="reveal tag" style={{'--reveal-delay':'100ms',color:'rgba(255,255,255,.6)'} as React.CSSProperties}><span className="dot" style={{color:'var(--blue)'}}/> A digital growth partner</span>
    
    <div className="mt-8">
      <GravityText
        text="Strategy that moves."
        className="display max-w-6xl text-[clamp(3.5rem,9.2vw,10rem)] leading-[.76]"
        highlightWord="moves."
        highlightClass="text-[var(--blue)] font-serif"
        stagger={0.08}
        as="h1"
      />
    </div>

    <p className="reveal mt-8 max-w-xl text-base leading-8 sm:text-lg" style={{'--reveal-delay':'350ms',color:'rgba(255,255,255,.65)'} as React.CSSProperties}>BizNiti connects strategy, digital experiences and marketing systems to help businesses move with more clarity.</p>
    <div className="reveal mt-7 flex flex-wrap gap-3" style={{'--reveal-delay':'500ms'} as React.CSSProperties}>
     <Link href="/contact" className="btn btn-blue" style={{color:'#fff'}}>Start a conversation <ArrowUpRight size={15}/></Link>
     <Link href="#services" className="btn border-white/15 text-white" style={{color:'#fff'}}>Explore services <ArrowDown size={15}/></Link>
    </div>
   </div>
   <div className="reveal" style={{'--reveal-delay':'400ms'} as React.CSSProperties}><HomeVisual/></div>
  </div>

  {/* Social proof counters */}
  <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
   {stats.map(([num,label],i)=><div key={label} className="reveal counter-card" style={{'--reveal-delay':`${600+i*100}ms`} as React.CSSProperties}>
    <p className="text-2xl font-bold tracking-[-.04em] sm:text-3xl" style={{color:'#fff'}}>{num}</p>
    <p className="mt-1 text-xs sm:text-sm" style={{color:'rgba(255,255,255,.5)'}}>{label}</p>
   </div>)}
  </div>

  <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-4 text-[10px]" style={{color:'rgba(255,255,255,.35)'}}>
   <span className="mono">scroll / explore</span>
   <span className="mono">01 / 08</span>
  </div>
 </Container>
</section>

{/* ── The premise ── */}
<section className="paper-grid py-24 sm:py-32">
 <Container>
  <div className="grid gap-12 lg:grid-cols-[.3fr_1.7fr]">
   <RevealOnScroll><p className="mono text-[9px] text-black/40">01 / The premise</p></RevealOnScroll>
   <div>
    <GravityText
      text="Good businesses don't need more noise. They need a clearer way forward."
      className="display max-w-6xl text-[clamp(2.5rem,7vw,7.5rem)] leading-[.84]"
      highlightWord="forward."
      highlightClass="text-[var(--blue)] font-serif"
      stagger={0.05}
    />
    <RevealOnScroll delay={150}>
     <p className="mt-9 max-w-3xl text-base leading-8 text-black/60 sm:text-lg">From websites and search to social, paid media, content, email and strategic marketing leadership, BizNiti brings the pieces together around the problem behind them.</p>
    </RevealOnScroll>
   </div>
  </div>
 </Container>
</section>

{/* ── Marquee strip ── */}
<div className="overflow-hidden border-y border-black/10 bg-[var(--lime)] py-3">
 <div className="marquee-track text-[11px] font-bold tracking-[.18em]">
  {Array(2).fill(null).map((_,i)=><div key={i} className="flex items-center gap-10 pr-10"><span>STRATEGY</span><span>•</span><span>DIGITAL</span><span>•</span><span>CONTENT</span><span>•</span><span>PERFORMANCE</span><span>•</span><span>GROWTH</span><span>•</span><span>CLARITY</span><span>•</span></div>)}
 </div>
</div>

{/* ── Horizontal scroll story ── */}
<HorizontalStory/>

{/* ── Services ── */}
<section id="services"><ServicesExperience/></section>

{/* ── Why BizNiti ── */}
<section className="bg-[var(--paper-2)] py-24 sm:py-32">
 <Container>
  <div className="grid gap-12 lg:grid-cols-[.52fr_1.48fr]">
   <RevealOnScroll>
    <div>
     <p className="mono text-[9px] text-black/40">03 / Why BizNiti</p>
     <GravityText
       text="Human enough to listen. Sharp enough to act."
       className="display mt-5 text-5xl leading-[.84] sm:text-7xl lg:text-8xl"
       highlightWord="act."
       highlightClass="text-[var(--blue)] font-serif"
       stagger={0.06}
     />
    </div>
   </RevealOnScroll>
   <div className="grid gap-3 sm:grid-cols-2">
    {[
     ['01','Experienced team','Practical expertise across the digital growth stack.'],
     ['02','Customized approach','Strategies shaped around the business, audience and goals.'],
     ['03','End-to-end support','From strategy and creation to execution and measurement.'],
     ['04','Future-facing','Modern digital thinking without losing sight of what works.'],
    ].map(([n,t,d],i)=><RevealOnScroll key={n} delay={i*100}>
     <div className="group glass rounded-[28px] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:p-7">
      <span className="mono text-[9px] text-[var(--blue)]">{n}</span>
      <h3 className="mt-14 text-xl font-semibold tracking-[-.03em] sm:mt-16">{t}</h3>
      <p className="mt-2 text-sm leading-6 text-black/50">{d}</p>
     </div>
    </RevealOnScroll>)}
   </div>
  </div>
 </Container>
</section>

{/* ── Services marquee ── */}
<section className="overflow-hidden bg-[var(--blue)] py-4" style={{color:'#fff'}}>
 <div className="marquee-track reverse text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-.04em]">
  {Array(2).fill(null).map((_,i)=><div key={i} className="flex items-center gap-8 pr-8"><span>WEBSITE</span><span>SEO</span><span>SOCIAL</span><span>PPC</span><span>CONTENT</span><span>EMAIL</span><span>CMO</span></div>)}
 </div>
</section>

{/* ── Insights ── */}
<section className="py-24 sm:py-32">
 <Container>
  <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr]">
   <RevealOnScroll>
    <div>
     <p className="mono text-[9px] text-black/40">04 / Insights</p>
     <GravityText
       text="Ideas worth taking with you."
       className="display mt-5 text-5xl leading-[.84] sm:text-7xl lg:text-8xl"
       stagger={0.07}
     />
     <Link href="/insights" className="btn mt-8">Explore insights <ArrowUpRight size={15}/></Link>
    </div>
   </RevealOnScroll>
   <div className="divide-y divide-black/10 border-y border-black/10">
    {insights.slice(0,4).map((x,i)=><RevealOnScroll key={x.slug} delay={i*80}>
     <Link href={`/insights/${x.slug}`} className="group grid gap-6 py-6 sm:grid-cols-[90px_1fr_auto] sm:items-center">
      <span className="mono text-[9px] text-black/35">0{i+1} / {x.category}</span>
      <div>
       <h3 className="text-xl font-semibold tracking-[-.035em] transition-colors group-hover:text-[var(--blue)] sm:text-2xl">{x.title}</h3>
       <p className="mt-2 max-w-2xl text-sm leading-6 text-black/55">{x.excerpt}</p>
      </div>
      <ArrowUpRight className="opacity-30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" size={18}/>
     </Link>
    </RevealOnScroll>)}
   </div>
  </div>
 </Container>
</section>

{/* ── Contact CTA ── */}
<section className="bg-[var(--ink)] py-24 sm:py-32" style={{color:'#fff'}}>
 <Container>
  <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
   <RevealOnScroll>
    <div>
     <span className="tag" style={{color:'rgba(255,255,255,.6)'}}>05 / Start a conversation</span>
     <h2 className="display mt-8 text-5xl leading-[.82] sm:text-7xl lg:text-8xl">Bring the <span className="text-[var(--blue)]">problem.</span></h2>
     <p className="mt-6 max-w-md" style={{color:'rgba(255,255,255,.6)'}}>{"Tell BizNiti what you're trying to change. The first conversation should already feel useful."}</p>
    </div>
   </RevealOnScroll>
   <RevealOnScroll delay={150}><LeadForm/></RevealOnScroll>
  </div>
 </Container>
</section>

{/* ── Bottom CTA ── */}
<section className="bg-[var(--lime)] py-16">
 <Container>
  <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
   <RevealOnScroll>
    <div>
     <p className="mono text-[9px] text-black/45">06 / Next chapter</p>
     <h2 className="display mt-4 max-w-4xl text-4xl leading-[.85] sm:text-5xl lg:text-7xl">Build the system behind the ambition.</h2>
    </div>
   </RevealOnScroll>
   <Link href="/contact" className="btn btn-dark" style={{color:'#fff'}}>{"Let's talk"} <ArrowUpRight size={15}/></Link>
  </div>
 </Container>
</section>

</main>}

