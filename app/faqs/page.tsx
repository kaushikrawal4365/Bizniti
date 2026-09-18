import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQs — Useful Answers',
  description: 'Frequently asked questions about working with BizNiti, project scoping, digital capabilities, processes, and getting started.',
};

export default function FAQs() {
  return (
    <main>
      <section className="pb-20 pt-36">
        <Container>
          <span className="tag">FAQs / useful answers</span>
          <h1 className="display mt-14 max-w-6xl text-[clamp(4.2rem,9vw,9rem)] leading-[.76]">
            The answers,
            <br />
            <span className="text-[var(--blue)]">upfront.</span>
          </h1>
        </Container>
      </section>
      <section className="paper-grid pb-24">
        <Container>
          <FaqAccordion />
        </Container>
      </section>
    </main>
  );
}
