export type FAQCategory = {
  category: string;
  items: { q: string; a: string }[];
};

export const faqCategories: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        q: "What does Phoenix actually do?",
        a: "We help directors and businesses in financial distress stabilise, restructure and rebuild — covering financial, legal, operational and reputational recovery under one team.",
      },
      {
        q: "What size of business do you work with?",
        a: "From owner-run SMEs to larger corporates — engagements scale to the business, not the other way round.",
      },
      {
        q: "Is Phoenix only for businesses about to fail?",
        a: "No — the earlier you call, the more we can typically do; many clients aren't near failure at all, just heading in the wrong direction.",
      },
      {
        q: "Do you work across all industries?",
        a: "We work across most sectors, with particular depth in Hospitality, Retail, Manufacturing, Construction, Professional Services, SMEs and Family Businesses.",
      },
      {
        q: "How do I know if I need Phoenix or just my accountant?",
        a: "If your accountant has told you the numbers, but not what to do about them, that's usually the signal to call us.",
      },
    ],
  },
  {
    category: "Confidentiality",
    items: [
      {
        q: "Is my first call really confidential?",
        a: "Yes — nothing discussed is shared with anyone, including creditors, staff, or other stakeholders, without your explicit agreement.",
      },
      {
        q: "Will you contact my creditors without asking me first?",
        a: "Never. Any outreach happens only once you've agreed the approach.",
      },
      {
        q: "Can I speak to Phoenix without my co-directors knowing yet?",
        a: "Yes — we can structure an initial conversation around exactly the confidentiality you need.",
      },
      {
        q: "Do you share information with credit agencies or public registers?",
        a: "No — we are not a reporting body and have no role in credit reporting.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    items: [
      {
        q: "How quickly can you help?",
        a: "Most initial calls happen within 24 hours of contact; urgent matters (e.g. an active legal notice) are handled the same day.",
      },
      {
        q: "What happens on the first call?",
        a: "We listen, ask focused questions about your financial and operational position, and outline realistic next steps — no pressure to commit to anything.",
      },
      {
        q: "How long does a typical engagement last?",
        a: "Stabilisation is often achieved within 1–2 weeks; full restructuring engagements typically run 4–8 weeks, with ongoing support afterward as needed.",
      },
      {
        q: "Do I need to prepare anything before the first call?",
        a: "No — recent management accounts or bank statements help if you have them, but they are not required to have a useful first conversation.",
      },
    ],
  },
  {
    category: "Costs & Fees",
    items: [
      {
        q: "Is the first consultation really free?",
        a: "Yes, with no obligation to proceed.",
      },
      {
        q: "How is Phoenix's work priced?",
        a: "Fee structures are agreed upfront per engagement — fixed fee, retainer, or a combination — and always confirmed in writing before work begins.",
      },
      {
        q: "What if I can't pay a large fee upfront?",
        a: "We structure fees around what a distressed business can realistically manage; tell us your constraint and we'll work with it.",
      },
      {
        q: "Are there hidden costs I should know about?",
        a: "No — any third-party costs (e.g. a licensed insolvency practitioner's statutory fees) are flagged clearly and separately, never bundled invisibly into ours.",
      },
    ],
  },
  {
    category: "Directors & Legal",
    items: [
      {
        q: "Am I personally liable if the business fails?",
        a: "It depends on your specific conduct and circumstances — this is exactly what Director Advisory exists to clarify, in confidence.",
      },
      {
        q: "Is Phoenix a law firm or insolvency practitioner?",
        a: "No — we coordinate closely with licensed insolvency practitioners and independently instructed solicitors, but we are a recovery and advisory firm, not a regulated legal or insolvency practice ourselves.",
      },
      {
        q: "Will talking to Phoenix be used against me later?",
        a: "No — our engagement is confidential and exists to help you make better-documented, better-informed decisions, which protects you rather than exposes you.",
      },
      {
        q: "What if the other directors and I disagree on what to do?",
        a: "We can work with the board collectively or advise individual directors separately — tell us the dynamic.",
      },
    ],
  },
  {
    category: "Industries",
    items: [
      {
        q: "Do you have specific experience in my industry?",
        a: "See our Industries pages for the seven sectors we work in most, or ask directly — most recovery patterns transfer across sectors more than people expect.",
      },
      {
        q: "Does industry experience actually change your advice?",
        a: "Yes — cash flow patterns, creditor behaviour and typical contract structures differ meaningfully by sector, and the plan should reflect that.",
      },
    ],
  },
];
