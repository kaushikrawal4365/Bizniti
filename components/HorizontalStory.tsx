'use client';
import {useRef,useState,useEffect} from 'react';
import {useScroll,useTransform,motion,useMotionValueEvent} from 'motion/react';

const slides:[string,string,string,string][]=[
 ['01','Understand','Start with business context, audience and the actual problem—not the deliverable.','var(--blue)'],
 ['02','Strategize','Choose the few moves with the clearest path to business impact.','var(--lav)'],
 ['03','Create','Turn the strategy into experiences, content and campaigns people can use.','var(--lime)'],
 ['04','Launch','Put the system into the world with care, speed and clarity.','var(--peach)'],
 ['05','Optimize','Learn from what happens, improve the system and keep momentum moving.','var(--powder)'],
];

export function HorizontalStory(){
 const ref=useRef<HTMLDivElement>(null);
 const {scrollYProgress}=useScroll({target:ref,offset:['start start','end end']});
 const x=useTransform(scrollYProgress,[0,1],['0%','-75%']);
 const [activeSlide,setActiveSlide]=useState(0);

 useMotionValueEvent(scrollYProgress,'change',v=>{
   const idx=Math.min(Math.floor(v*slides.length),slides.length-1);
   setActiveSlide(idx);
 });

 return <section ref={ref} className="relative h-[400vh] bg-[var(--ink)]" style={{color:'#fff'}}>
  <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">

   {/* Progress indicator */}
   <div className="absolute left-1/2 top-6 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-4 py-2.5 backdrop-blur-md">
     <span className="mono text-[9px]" style={{color:'rgba(255,255,255,.4)'}}>The BizNiti System</span>
    <span className="mx-1 h-3 w-px bg-white/15"/>
    <div className="flex items-center gap-1.5">
     {slides.map((_,i)=><span key={i} className={`scroll-progress-dot ${i===activeSlide?'active':''}`}/>)}
    </div>
     <span className="mono text-[9px]" style={{color:'rgba(255,255,255,.4)'}}>{String(activeSlide+1).padStart(2,'0')}/{String(slides.length).padStart(2,'0')}</span>
   </div>

   <motion.div style={{x}} className="flex gap-5 px-[max(24px,calc((100vw-1480px)/2+24px))] will-change-transform">
    {slides.map(([n,t,d,accent],i)=>{
     const isActive=i===activeSlide;
     return <article key={n} className="relative flex h-[62vh] w-[70vw] min-w-[70vw] flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 p-5 transition-all duration-500 sm:p-8 md:w-[42vw] md:min-w-[42vw]"
      style={{background:isActive?'rgba(255,255,255,0.06)':'rgba(255,255,255,0.03)'}}>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"/>

      {/* Accent glow — unique per card */}
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full blur-[80px] opacity-40 transition-opacity duration-700"
       style={{background:`${accent}`,opacity:isActive?.5:.15}}/>
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full blur-[60px] opacity-20"
       style={{background:`${accent}`}}/>

      {/* Top bar */}
      <div className="relative flex items-center justify-between">
        <span className="mono text-xs" style={{color:'rgba(255,255,255,.45)'}}>{n} / 05</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs" style={{color:'rgba(255,255,255,.45)'}}>BizNiti system</span>
      </div>

      {/* Content */}
      <div className="relative">
       {/* Step number badge */}
       <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-lg font-bold" style={{background:`color-mix(in srgb, ${accent} 15%, transparent)`,color:accent==='var(--lime)'||accent==='var(--peach)'?'white':'white'}}>
        {n}
       </div>
       <h3 className="display max-w-2xl text-[clamp(3rem,6vw,6.5rem)] leading-[.85]">{t}<span style={{color:accent}}>.</span></h3>
        <p className="mt-5 max-w-lg text-sm leading-7 sm:text-base" style={{color:'rgba(255,255,255,.55)'}}>{d}</p>
      </div>
     </article>;
    })}
   </motion.div>
  </div>
 </section>;
}
