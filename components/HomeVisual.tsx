'use client';
import {useEffect,useState} from 'react';

export function HomeVisual(){
 const [p,setP]=useState({x:0,y:0});
 const [mounted,setMounted]=useState(false);
 useEffect(()=>{
  setMounted(true);
  const f=(e:MouseEvent)=>setP({x:(e.clientX/window.innerWidth-.5)*20,y:(e.clientY/window.innerHeight-.5)*20});
  window.addEventListener('mousemove',f);return()=>window.removeEventListener('mousemove',f);
 },[]);

 return <div className="relative h-[400px] sm:h-[480px] lg:h-[540px]" style={{perspective:'1200px'}}>

  {/* ── Main browser card — tilted ── */}
  <div className="hero-card hero-card-browser float-a"
   style={{
    width:'clamp(280px,60%,380px)',height:'clamp(200px,58%,300px)',
    top:'8%',left:'10%',
    transform:`rotateY(${8+p.x*.3}deg) rotateX(${-4+p.y*.2}deg) rotate(-3deg)`,
    zIndex:3,
    opacity:mounted?1:0,transition:'opacity .8s ease .2s, transform .6s cubic-bezier(.22,1,.36,1)',
   }}>
   <div className="browser-bar">
    <span className="browser-dot" style={{background:'#ff5f57'}}/><span className="browser-dot" style={{background:'#ffbd2e'}}/><span className="browser-dot" style={{background:'#28c840'}}/>
    <span className="ml-3 text-[9px] text-white/30 font-mono">bizniti.com</span>
   </div>
   <div className="p-4 sm:p-5">
    <div className="h-2 w-16 rounded bg-[var(--blue)]/60 mb-3"/>
    <p className="display text-white text-xl sm:text-2xl leading-[.9]">Ideas<br/>to real<br/><span className="text-[var(--lime)]">growth.</span></p>
    <div className="mt-4 flex gap-2">
     <div className="h-1.5 w-12 rounded bg-white/15"/>
     <div className="h-1.5 w-8 rounded bg-white/10"/>
    </div>
    <div className="mt-3 grid grid-cols-3 gap-1.5">
     {[28,42,36,50,24,44].map((h,i)=><div key={i} className="rounded bg-white/8" style={{height:h}}/>)}
    </div>
   </div>
  </div>

  {/* ── Secondary card — analytics dashboard ── */}
  <div className="hero-card float-b"
   style={{
    width:'clamp(180px,42%,260px)',height:'clamp(150px,42%,220px)',
    top:'32%',right:'0%',
    transform:`rotateY(${-12+p.x*.2}deg) rotateX(${6+p.y*.15}deg) rotate(5deg)`,
    zIndex:4,background:'#0d1117',border:'1px solid rgba(255,255,255,.08)',
    opacity:mounted?1:0,transition:'opacity .8s ease .4s, transform .6s cubic-bezier(.22,1,.36,1)',
   }}>
   <div className="p-3 sm:p-4">
    <div className="flex items-center justify-between mb-3">
     <span className="mono text-[7px] sm:text-[8px] text-white/35">GROWTH METRICS</span>
     <span className="text-[8px] text-[var(--lime)]">+42%</span>
    </div>
    <div className="flex items-end gap-1 h-16 sm:h-20">
     {[18,28,22,35,48,38,56,44,62,52,72,58].map((h,i)=><div key={i} className="flex-1 rounded-t transition-all duration-500" style={{height:`${h}%`,background:i>=9?'var(--blue)':'rgba(255,255,255,.12)'}}/>)}
    </div>
    <div className="mt-2 flex justify-between">
     <span className="text-[7px] text-white/20">Jan</span>
     <span className="text-[7px] text-white/20">Dec</span>
    </div>
   </div>
  </div>

  {/* ── Small floating card — service tag ── */}
  <div className="hero-card float-c"
   style={{
    width:'clamp(140px,30%,180px)',
    top:'2%',right:'12%',
    transform:`rotateY(${-5+p.x*.15}deg) rotateX(${3+p.y*.1}deg) rotate(-8deg)`,
    zIndex:2,background:'rgba(255,255,255,.92)',border:'1px solid rgba(0,0,0,.06)',
    opacity:mounted?1:0,transition:'opacity .8s ease .5s, transform .6s cubic-bezier(.22,1,.36,1)',
    boxShadow:'0 20px 60px rgba(0,0,0,.2)',
   }}>
   <div className="p-3 sm:p-4">
    <span className="mono text-[7px] sm:text-[8px] text-black/35">STRATEGY</span>
    <p className="mt-2 text-xs sm:text-sm font-semibold text-[var(--ink)] tracking-[-.02em] leading-tight">Digital strategy for<br/>ambitious brands</p>
    <div className="mt-2 flex items-center gap-1.5">
     <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]"/>
     <span className="text-[8px] text-black/40">7 capabilities</span>
    </div>
   </div>
  </div>

  {/* ── Bottom card — social proof / client logos ── */}
  <div className="hero-card"
   style={{
    width:'clamp(160px,35%,210px)',
    bottom:'4%',left:'22%',
    transform:`rotateY(${5+p.x*.1}deg) rotateX(${-8+p.y*.15}deg) rotate(4deg)`,
    zIndex:2,background:'var(--ink)',border:'1px solid rgba(255,255,255,.1)',
    opacity:mounted?1:0,transition:'opacity .8s ease .6s, transform .6s cubic-bezier(.22,1,.36,1)',
   }}>
   <div className="p-3 sm:p-4">
    <span className="mono text-[7px] sm:text-[8px] text-white/30">TRUSTED BY</span>
    <p className="mt-3 text-lg sm:text-xl font-bold text-white tracking-[-.04em]">150+</p>
    <p className="text-[10px] sm:text-xs text-white/40">growing businesses</p>
    <div className="mt-2 flex gap-1">
     {[1,2,3,4].map(i=><div key={i} className="h-5 w-5 rounded-full bg-white/10 border border-white/5" style={{marginLeft:i>1?-6:0}}/>)}
    </div>
   </div>
  </div>

  {/* ── Floating annotations ── */}
  <span className="hero-annotation hidden sm:block" style={{top:'18%',right:'34%',transform:`translate(${p.x*.3}px,${p.y*.3}px)`,opacity:mounted?.35:0,transition:'opacity 1s ease .7s'}}>
   Scroll → explore<br/>& discover.
  </span>
  <span className="hero-annotation hidden lg:block" style={{bottom:'22%',right:'16%',transform:`translate(${p.x*.2}px,${p.y*.2}px)`,opacity:mounted?.3:0,transition:'opacity 1s ease .9s'}}>
   Build with<br/>clarity.
  </span>

  {/* ── Decorative dots/shapes ── */}
  <div className="absolute top-[15%] left-[52%] h-2 w-2 rounded-full bg-[var(--lime)] opacity-60" style={{transform:`translate(${p.x*.5}px,${p.y*.5}px)`}}/>
  <div className="absolute bottom-[30%] right-[35%] h-3 w-3 rounded-full bg-[var(--blue)] opacity-40" style={{transform:`translate(${p.x*.4}px,${p.y*.4}px)`}}/>
  <div className="absolute top-[40%] left-[3%] h-1.5 w-1.5 rounded-full bg-[var(--lav)] opacity-50" style={{transform:`translate(${p.x*.6}px,${p.y*.6}px)`}}/>
 </div>;
}
