'use client';
import {MessageCircle, Send, X, Sparkles} from 'lucide-react';
import {useState} from 'react';
export function ChatWidget(){
 const [open,setOpen]=useState(false);
 const [messages,setMessages]=useState([{role:'bot',text:"Hi — I'm BizNiti's guide. Tell me what you're trying to build, fix or grow."}]);
 const [input,setInput]=useState('');
 function send(t=input){
  t=t.trim();if(!t)return;
  let reply='BizNiti works across websites, SEO, social, PPC, content, email and fractional CMO support. Tell me what is stuck and I\'ll help narrow it down.';
  if(/contact|talk|call/i.test(t))reply='The fastest route is the project brief. Share a little context and BizNiti can follow up with a useful first conversation.';
  if(/process|how/i.test(t))reply='The approach is simple: understand the business, choose the right moves, create, launch, then learn and optimize.';
  setMessages(m=>[...m,{role:'user',text:t},{role:'bot',text:reply}]);setInput('');
 }
 return <>
  {open&&<div className="fixed bottom-24 right-4 z-[60] w-[min(390px,calc(100vw-24px))] overflow-hidden glass rounded-[28px] shadow-2xl">
   <div className="bg-[var(--ink)] p-5" style={{color:'#fff'}}>
    <div className="flex items-start justify-between">
     <div>
      <div className="flex items-center gap-2"><Sparkles size={14} style={{color:'var(--lime)'}}/><p className="mono text-[9px]" style={{color:'rgba(255,255,255,.45)'}}>ASK BIZNITI</p></div>
      <p className="mt-2 text-lg font-semibold">{"Let's figure out the next move."}</p>
     </div>
     <button onClick={()=>setOpen(false)} aria-label="Close chat"><X size={18}/></button>
    </div>
   </div>
   <div className="max-h-80 space-y-3 overflow-y-auto p-4 text-sm">
    {messages.map((m,i)=><div key={i} className={m.role==='user'?'ml-10 rounded-2xl rounded-br-md bg-[var(--blue)] p-3':'mr-8 rounded-2xl rounded-bl-md bg-white/75 p-3'} style={m.role==='user'?{color:'#fff'}:undefined}>{m.text}</div>)}
    <div className="flex flex-wrap gap-2 pt-1">
     {['What do you do?','How do you work?','Talk to someone'].map(q=><button key={q} onClick={()=>send(q)} className="rounded-full border border-black/10 bg-white/55 px-3 py-2 text-xs">{q}</button>)}
    </div>
   </div>
   <form onSubmit={e=>{e.preventDefault();send()}} className="flex gap-2 border-t border-black/10 p-3">
    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask BizNiti…" className="min-w-0 flex-1 rounded-xl border border-black/10 bg-white/60 px-3 py-2 text-sm"/>
    <button aria-label="Send message" className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--ink)]" style={{color:'#fff'}}><Send size={15}/></button>
   </form>
  </div>}
  <button onClick={()=>setOpen(v=>!v)} aria-label="Open BizNiti chatbot" className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border border-white/60 bg-[var(--ink)] px-4 py-3 text-sm font-semibold shadow-xl transition hover:-translate-y-0.5" style={{color:'#fff'}}>
   <MessageCircle size={17}/><span className="hidden sm:inline">Ask BizNiti</span>
  </button>
 </>;
}
