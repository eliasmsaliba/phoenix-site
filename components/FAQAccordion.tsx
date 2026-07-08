"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { q: string; a: string };

export default function FAQAccordion({
  items,
  defaultOpenIndex,
}: {
  items: FAQItem[];
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex ?? null
  );

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        const id = `faq-${slugify(item.q)}`;
        return (
          <div
            key={item.q}
            id={id}
            className="scroll-mt-24 rounded-xl border border-teal-100 bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span className="font-display text-base font-medium text-ink-950">
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-teal-600 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
