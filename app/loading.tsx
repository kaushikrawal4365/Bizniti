import { Container } from '@/components/Container';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-white noise flex items-center justify-center pt-36 pb-24">
      <Container className="max-w-xl text-center flex flex-col items-center">
        {/* Animated Brand Pulse Bar */}
        <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/10 mb-8">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--lime)] animate-[pulse-slide_1.5s_infinite_ease-in-out]" />
        </div>

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[var(--lime)] animate-ping" />
          <span className="mono text-xs text-white/60 tracking-widest uppercase">
            Loading BizNiti Experience...
          </span>
        </div>
      </Container>
    </div>
  );
}
