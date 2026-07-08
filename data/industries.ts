import {
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  HardHat,
  Briefcase,
  Store,
  Home,
} from "lucide-react";
import type { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: UtensilsCrossed,
    seoTitle: "Business Recovery for Hospitality Businesses | Phoenix",
    metaDescription:
      "Thin margins, seasonal cash flow, rising costs — Phoenix helps hospitality operators recover and rebuild.",
    h1: "Recovery for Hospitality Businesses",
    challenges: [
      "Thin margins that leave little room for a bad quarter",
      "Seasonal and footfall-driven cash flow swings",
      "Rising food, energy and staffing costs outpacing menu or room pricing",
      "Lease and landlord pressure on fixed-cost premises",
    ],
    howWeHelp:
      "Cash flow modelling built around seasonality rather than flat averages, landlord and supplier negotiation specific to hospitality lease structures, and cost restructuring that protects guest experience rather than gutting it.",
    relatedServices: ["financial-recovery", "creditor-negotiation", "business-restructuring", "marketing-recovery"],
    faq: {
      q: "Can you help mid-season, or only over the winter close period?",
      a: "Mid-season — in fact, that's often when intervention matters most, since trading cash is still coming in and can be redirected fast.",
    },
    ctaLabel: "Talk to a Hospitality Recovery Specialist",
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    seoTitle: "Business Recovery for Retail Businesses | Phoenix",
    metaDescription:
      "Falling footfall, online disruption, lease pressure — Phoenix helps retailers stabilise and rebuild.",
    h1: "Recovery for Retail Businesses",
    challenges: [
      "Declining footfall and shifting demand to online channels",
      "Stock tied up as cash the business can't access quickly",
      "Long lease commitments outlasting the trading model that justified them",
      "Margin compression from discounting to move ageing stock",
    ],
    howWeHelp:
      "Stock-to-cash conversion planning, lease renegotiation, and a marketing recovery plan that rebuilds footfall and online demand together rather than treating them as separate problems.",
    relatedServices: ["financial-recovery", "creditor-negotiation", "marketing-recovery", "branding"],
    faq: {
      q: "Do you work with single-site independents as well as multi-site retailers?",
      a: "Yes — the diagnostic scales down as cleanly as it scales up.",
    },
    ctaLabel: "Talk to a Retail Recovery Specialist",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    seoTitle: "Business Recovery for Manufacturers | Phoenix",
    metaDescription:
      "Supply chain costs, capital intensity, order volatility — Phoenix helps manufacturers stabilise and restructure.",
    h1: "Recovery for Manufacturing Businesses",
    challenges: [
      "Volatile input and energy costs squeezing fixed-price contracts",
      "Capital tied up in plant, equipment and inventory",
      "Order-book volatility making cash flow hard to plan",
      "Supplier and customer concentration risk",
    ],
    howWeHelp:
      "Working-capital and inventory restructuring, contract repricing negotiation support, and a realistic cash flow model that accounts for genuine order-book lumpiness rather than smoothing it away.",
    relatedServices: ["financial-recovery", "business-restructuring", "creditor-negotiation", "accounting-services"],
    faq: {
      q: "Can you help renegotiate supplier contracts directly?",
      a: "Yes, as part of Creditor Negotiation and Legal Support working together.",
    },
    ctaLabel: "Talk to a Manufacturing Recovery Specialist",
  },
  {
    slug: "construction",
    name: "Construction",
    icon: HardHat,
    seoTitle: "Business Recovery for Construction Firms | Phoenix",
    metaDescription:
      "Retentions, project cash flow, subcontractor chains — Phoenix helps construction businesses recover.",
    h1: "Recovery for Construction Businesses",
    challenges: [
      "Cash locked up in retentions and delayed payment certificates",
      "Project-by-project cash flow that hides a whole-business cash gap",
      "Contract disputes over variations, delays and defects",
      "Subcontractor and supply-chain exposure if a link in the chain fails",
    ],
    howWeHelp:
      "Whole-business cash consolidation across live projects, contract dispute support alongside legal counsel, and creditor negotiation specific to the retention and payment-certificate cycle.",
    relatedServices: ["financial-recovery", "legal-support", "creditor-negotiation", "business-restructuring"],
    faq: {
      q: "What if the pressure is coming from one bad contract, not the whole business?",
      a: "That's common — we isolate and manage single-contract exposure so it doesn't drag down otherwise healthy projects.",
    },
    ctaLabel: "Talk to a Construction Recovery Specialist",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    seoTitle: "Business Recovery for Professional Services Firms | Phoenix",
    metaDescription:
      "Partner disputes, client concentration, overhead pressure — Phoenix helps professional services firms recover.",
    h1: "Recovery for Professional Services Firms",
    challenges: [
      "Revenue concentrated in a small number of clients or partners",
      "Partner or ownership disputes complicating decision-making",
      "Overhead built for a headcount the current fee base can't support",
      "Reputational sensitivity — distress can't be handled as publicly as in other sectors",
    ],
    howWeHelp:
      "Discreet, partner-level advisory that respects firm governance structures, overhead restructuring matched to realistic fee income, and client-concentration risk planning.",
    relatedServices: ["director-advisory", "business-restructuring", "management-consulting", "accounting-services"],
    faq: {
      q: "How do you handle this when partners disagree on the path forward?",
      a: "We can advise individual partners confidentially alongside a shared partnership-level process — tell us the dynamic and we'll structure around it.",
    },
    ctaLabel: "Talk to Us, Partner to Partner",
  },
  {
    slug: "smes",
    name: "SMEs",
    icon: Store,
    seoTitle: "Business Recovery for SMEs | Phoenix",
    metaDescription:
      "Limited resources and an owner carrying it all — Phoenix builds recovery plans sized to real SME constraints.",
    h1: "Recovery for Small and Medium-Sized Businesses",
    challenges: [
      "Limited financial reserves to absorb a shock",
      "An owner-operator carrying every decision alone",
      "Restricted access to traditional finance",
      "No internal finance function to lean on for clarity",
    ],
    howWeHelp:
      "Right-sized engagements that don't over-scope a small business with enterprise-grade process, direct owner-to-specialist advisory, and practical funding-route guidance suited to SME lending realities.",
    relatedServices: ["director-advisory", "financial-recovery", "accounting-services", "creditor-negotiation"],
    faq: {
      q: "Is Phoenix affordable for a genuinely small business?",
      a: "Engagements are scoped to the business — the first assessment is free specifically so cost is never the barrier to that first conversation.",
    },
    ctaLabel: "Get Support Sized to Your Business",
  },
  {
    slug: "family-businesses",
    name: "Family Businesses",
    icon: Home,
    seoTitle: "Business Recovery for Family Businesses | Phoenix",
    metaDescription:
      "Recovery advice that respects family dynamics as much as the balance sheet. Phoenix works with family businesses in distress.",
    h1: "Recovery for Family Businesses",
    challenges: [
      "Business and family decisions that can't be cleanly separated",
      "Succession pressure colliding with a financial crisis",
      "Emotional weight of legacy influencing otherwise commercial decisions",
      "Difficult conversations across generations about what has to change",
    ],
    howWeHelp:
      "Advisory that treats the family dynamic as a real input, not a distraction — including facilitated conversations across generations, and recovery plans that protect the business without asking a family to abandon what it's built.",
    relatedServices: ["director-advisory", "business-restructuring", "management-consulting"],
    faq: {
      q: "Can you speak to some family members and not others, if needed?",
      a: "Yes — we structure confidentiality around what the situation actually requires.",
    },
    ctaLabel: "Start a Conversation, Confidentially",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
