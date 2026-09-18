'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  number: string;
}

const faqs: FaqItem[] = [
  {
    number: '01',
    question: 'What does BizNiti do?',
    answer: 'BizNiti provides digital marketing and strategic services spanning websites, SEO, social media, PPC, content, email and fractional marketing leadership.',
  },
  {
    number: '02',
    question: 'Do you work with businesses of different sizes?',
    answer: 'Yes. The current BizNiti positioning describes its work as serving businesses of all sizes with strategies shaped around their needs and goals.',
  },
  {
    number: '03',
    question: 'Can I start with one service?',
    answer: 'Yes. A business can start with the capability that addresses its immediate need and connect additional services when there is a clear reason to do so.',
  },
  {
    number: '04',
    question: 'What does the process look like?',
    answer: 'The work begins with context and goals, moves into a focused strategy, then execution, measurement and refinement.',
  },
  {
    number: '05',
    question: 'How do I get started?',
    answer: 'Use the project brief to share what you are trying to change and BizNiti can take the conversation from there.',
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="rounded-[28px] border border-black/10 bg-white p-2">
      {faqs.map(({ number, question, answer }, i) => (
        <button
          type="button"
          key={question}
          onMouseEnter={() => setOpen(i)}
          onMouseLeave={() => setOpen(null)}
          onFocus={() => setOpen(i)}
          onBlur={() => setOpen(null)}
          onClick={() => setOpen(open === i ? null : i)}
          aria-expanded={open === i}
          className="group block w-full border-b border-black/10 p-5 text-left last:border-b-0 sm:p-7 transition-colors hover:bg-[var(--paper-2)]/50"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="flex gap-5">
              <span className="mono pt-1 text-[9px] text-black/30">{number}</span>
              <div>
                <span className="text-xl font-semibold tracking-[-.03em] sm:text-2xl text-[var(--ink)]">
                  {question}
                </span>
                {open === i && (
                  <p className="mt-4 max-w-3xl text-sm sm:text-base leading-7 text-black/60 animate-in fade-in duration-200">
                    {answer}
                  </p>
                )}
              </div>
            </div>
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 transition-all duration-300 ${
                open === i ? 'rotate-45 bg-[var(--blue)] text-white shadow-md' : 'text-black/60'
              }`}
            >
              <Plus size={17} />
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
