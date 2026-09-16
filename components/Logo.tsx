export function Logo({dark=false}:{dark?:boolean}){
  return <span className={`inline-flex items-center gap-2.5 ${dark?'text-white':'text-[var(--ink)]'}`}>
    <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-[var(--blue)] text-white font-black tracking-[-.06em]">
      <span className="absolute inset-1 rounded-lg border border-white/30"/><span className="relative text-[11px]">BN</span>
    </span>
    <span className="text-[17px] font-semibold tracking-[-.045em]">bizniti<span className="text-[var(--blue)]">.</span></span>
  </span>
}
