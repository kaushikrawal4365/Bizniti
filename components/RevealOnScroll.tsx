'use client';
import {useEffect,useRef,useState} from 'react';

export function RevealOnScroll({children,className='',delay=0,as:Tag='div'}:{children:React.ReactNode;className?:string;delay?:number;as?:React.ElementType}){
  const ref=useRef<HTMLDivElement>(null);
  const [inView,setInView]=useState(false);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setInView(true);obs.disconnect()}},{threshold:0.15,rootMargin:'0px 0px -40px 0px'});
    obs.observe(el);return()=>obs.disconnect();
  },[]);
  return <Tag ref={ref} className={`reveal-up ${inView?'in-view':''} ${className}`} style={{'--reveal-delay':`${delay}ms`} as React.CSSProperties}>{children}</Tag>;
}
