'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  title?: string;
  items: FaqItem[];
}

export default function FaqAccordion({ title, items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-pulver-grey section-padding">
      <div className="container">
        {title && (
          <h2 className="text-center text-pulver-light text-3xl md:text-4xl font-bold mb-12">
            {title}
          </h2>
        )}

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-pulver-dark rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-pulver-light font-semibold pr-8">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-pulver-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-pulver-text leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
