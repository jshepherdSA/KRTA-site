"use client";

import { Accordion } from "@base-ui/react/accordion";
import type { ReactNode } from "react";

/**
 * The FAQ list. Built on the shadcn/ui accordion primitive (Base UI) so the
 * keyboard and ARIA behaviour is real, restyled onto the design system's rules
 * and hairlines. No motion — the system has none.
 */
export function Faq({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  return (
    <Accordion.Root className="faq">
      {items.map((item) => (
        <Accordion.Item key={item.question} className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              {item.question}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="faq-panel">
            <div className="faq-panel-inner">{item.answer}</div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
