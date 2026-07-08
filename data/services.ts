import {
  FlameKindling,
  ShieldCheck,
  HandCoins,
  LifeBuoy,
  UserCog,
  Building2,
  LineChart,
  Scale,
  Megaphone,
  PenTool,
  Users,
  Calculator,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "corporate-recovery",
    name: "Corporate Recovery",
    tier: "Stabilise",
    icon: FlameKindling,
    tagline: "One coordinated plan when distress touches the whole business.",
    seoTitle: "Corporate Recovery Services | Phoenix",
    metaDescription:
      "Full-scale recovery planning for businesses in financial distress — stabilise cash, protect value, and rebuild with confidence.",
    h1: "Corporate Recovery",
    heroSubhead:
      "When distress touches every part of the business at once, you need one recovery plan — not five uncoordinated ones.",
    overview:
      "Corporate recovery is Phoenix's broadest service: a full diagnostic and stabilisation programme for businesses where financial distress has started to affect operations, supplier relationships, staff confidence, or all three. Rather than treating the balance sheet in isolation, we build one coordinated plan across cash, creditors, contracts and leadership.",
    problems: [
      "Persistent losses with no clear turning point",
      "Cash reserves falling faster than management can explain",
      "Suppliers tightening terms or demanding upfront payment",
      "Board and shareholders losing confidence in the current plan",
    ],
    howWeHelp: [
      "Rapid financial and operational diagnostic within days",
      "A single recovery plan owned by one engagement lead",
      "Direct, senior-level support for the board through implementation",
    ],
    benefits: [
      "Preserved enterprise value and jobs",
      "Restored confidence among staff, lenders and suppliers",
      "A plan you helped shape, not one handed down",
    ],
    faqs: [
      {
        q: "Is corporate recovery only for large companies?",
        a: "No — the same discipline applies from small owner-run firms upward; we scale the team, not the rigour.",
      },
      {
        q: "How is this different from Business Restructuring?",
        a: "Corporate Recovery is the whole-business diagnostic and stabilisation umbrella; Business Restructuring is the detailed execution of the operational and financial changes it identifies.",
      },
    ],
    ctaLabel: "Book a Free Recovery Assessment",
    related: ["business-restructuring", "financial-recovery", "director-advisory"],
  },
  {
    slug: "business-rescue",
    name: "Business Rescue",
    tier: "Stabilise",
    icon: ShieldCheck,
    tagline: "Formal protection while a real recovery plan takes hold.",
    seoTitle: "Business Rescue Services | Formal Recovery Options | Phoenix",
    metaDescription:
      "Facing serious insolvency risk? Phoenix guides directors through formal business rescue options that protect the business and its people.",
    h1: "Business Rescue",
    heroSubhead:
      "When informal fixes aren't enough, formal rescue mechanisms can buy the time and protection a real recovery needs.",
    overview:
      "Business rescue covers the formal routes available once informal negotiation alone won't resolve the position — arrangements that create legal breathing space from creditor action while a recovery plan is put into effect. Phoenix coordinates directly with licensed insolvency practitioners and legal counsel so the right mechanism is chosen for your specific structure, not a default one.",
    problems: [
      "Imminent creditor legal action (statutory demands, winding-up threats)",
      "A viable business trapped under unsustainable historic debt",
      "Uncertainty over which formal process actually fits the situation",
    ],
    howWeHelp: [
      "Clear, plain-English explanation of every formal option available",
      "Direct coordination with licensed insolvency practitioners",
      "Managing communication with creditors and the court process, where applicable, on your behalf",
    ],
    benefits: [
      "Legal protection from creditor action while you stabilise",
      "A path that keeps the operating business intact wherever possible",
      "Directors informed of personal exposure at every step",
    ],
    faqs: [
      {
        q: "Does business rescue mean the company is closing?",
        a: "No — most rescue mechanisms exist specifically to keep a viable business trading.",
      },
      {
        q: "Who actually makes the formal decisions?",
        a: "Licensed insolvency practitioners hold statutory responsibility for formal processes; Phoenix coordinates the wider recovery around that process.",
      },
    ],
    ctaLabel: "Discuss Your Options Confidentially",
    related: ["insolvency-support", "director-advisory", "creditor-negotiation"],
  },
  {
    slug: "creditor-negotiation",
    name: "Creditor Negotiation",
    tier: "Stabilise",
    icon: HandCoins,
    tagline: "Let a specialist speak to your creditors.",
    seoTitle: "Creditor Negotiation Services | Phoenix",
    metaDescription:
      "Stop reactive creditor pressure. Phoenix negotiates payment terms, standstills and settlements on your behalf.",
    h1: "Creditor Negotiation",
    heroSubhead:
      "Let a specialist speak to your creditors, so you can focus on running the business.",
    overview:
      "Unmanaged creditor pressure escalates fast — calls turn into demands, demands turn into legal threats. Phoenix steps in as your negotiating voice, opening structured conversations with creditors that buy time, reduce pressure, and often produce better terms than a director negotiating alone under stress.",
    problems: [
      "Escalating demands from suppliers, landlords or lenders",
      "Risk of a winding-up petition or forced legal action",
      "Director burnout from fielding hostile calls directly",
    ],
    howWeHelp: [
      "Full creditor mapping and prioritisation by risk",
      "Structured standstill and repayment proposals",
      "Direct negotiation, keeping you informed but out of the firing line",
    ],
    benefits: [
      "Reduced day-to-day pressure within the first week",
      "Preserved supplier relationships wherever possible",
      "A repayment position the business can actually sustain",
    ],
    faqs: [
      {
        q: "Will creditors know Phoenix is involved?",
        a: "Only if you choose — many engagements begin with Phoenix working behind the scenes on strategy before any direct contact.",
      },
      {
        q: "Can this stop legal action already underway?",
        a: "Sometimes — speed matters here more than almost anywhere else in recovery; call as soon as a legal notice arrives.",
      },
    ],
    ctaLabel: "Get Creditor Pressure Off Your Desk",
    related: ["insolvency-support", "financial-recovery", "legal-support"],
  },
  {
    slug: "insolvency-support",
    name: "Insolvency Support",
    tier: "Stabilise",
    icon: LifeBuoy,
    tagline: "Confidential, judgment-free guidance through every option.",
    seoTitle: "Insolvency Support & Guidance | Phoenix",
    metaDescription:
      "Confidential, judgment-free guidance through every insolvency option available — before you're forced into the one that costs you most.",
    h1: "Insolvency Support",
    heroSubhead:
      "Insolvency is a set of options, not a single outcome. We help you understand — and choose — the right one.",
    overview:
      "The word “insolvency” carries more fear than most directors' actual situation warrants. Phoenix provides calm, confidential guidance through what insolvency does and doesn't mean for your specific business, liaising with licensed insolvency practitioners and helping you understand every route before committing to one.",
    problems: [
      "Uncertainty over whether the business is technically insolvent",
      "Fear of personal liability clouding clear decision-making",
      "Not knowing which insolvency route actually fits the business",
    ],
    howWeHelp: [
      "Clear solvency assessment in plain English",
      "Explanation of every relevant route, and who it protects",
      "Warm introduction and coordination with licensed insolvency practitioners",
    ],
    benefits: [
      "Decisions made from clarity, not panic",
      "Reduced personal risk for directors",
      "A managed, dignified process for staff and stakeholders",
    ],
    faqs: [
      {
        q: "Does calling Phoenix mean my company is going into insolvency?",
        a: "No — most initial conversations are exploratory, and many businesses we speak to never enter a formal insolvency process at all.",
      },
      {
        q: "Are you insolvency practitioners?",
        a: "Phoenix coordinates closely with licensed insolvency practitioners for any formal statutory process — we are a recovery and advisory firm, not a regulated insolvency practice ourselves.",
      },
    ],
    ctaLabel: "Understand Your Position, Confidentially",
    related: ["business-rescue", "director-advisory", "creditor-negotiation"],
  },
  {
    slug: "director-advisory",
    name: "Director Advisory",
    tier: "Rebuild",
    icon: UserCog,
    tagline: "One-to-one confidential advisory, built around you.",
    seoTitle: "Director Advisory Services | Phoenix",
    metaDescription:
      "One-to-one confidential advisory for directors navigating financial distress — your duties, your risk, your next decision.",
    h1: "Director Advisory",
    heroSubhead:
      "The business isn't the only thing under pressure. You are too — and you have duties and protections most directors never get told about.",
    overview:
      "Director Advisory is built around one person, not the wider company: a confidential space to understand your legal duties, your personal exposure, and the decisions in front of you, with a specialist who has sat in that seat before.",
    problems: [
      "Uncertainty about personal liability if the business fails",
      "Isolation — no one else in the business can be told everything yet",
      "Not knowing which duties apply once distress begins",
    ],
    howWeHelp: [
      "A confidential one-to-one advisory relationship, not a group process",
      "Plain-English breakdown of director duties in distress",
      "Practical guidance on documenting decisions to protect yourself",
    ],
    benefits: [
      "Reduced personal legal and financial risk",
      "Confidence in decisions made under pressure",
      "A single trusted point of contact throughout",
    ],
    faqs: [
      {
        q: "Is this covered by confidentiality?",
        a: "Advisory conversations are confidential under our engagement terms; where formal legal privilege matters, we coordinate directly with your instructed lawyer.",
      },
      {
        q: "What if other directors disagree with me?",
        a: "We can advise you individually or the board collectively — tell us the dynamic and we'll structure the engagement around it.",
      },
    ],
    ctaLabel: "Speak to Someone Who's Been There",
    related: ["legal-support", "insolvency-support", "business-restructuring"],
  },
  {
    slug: "business-restructuring",
    name: "Business Restructuring",
    tier: "Rebuild",
    icon: Building2,
    tagline: "What makes the recovery permanent.",
    seoTitle: "Business Restructuring Services | Phoenix",
    metaDescription:
      "Restructure operations, leadership and finances into a business built to last — not just survive the next quarter.",
    h1: "Business Restructuring",
    heroSubhead:
      "Stabilising the business buys time. Restructuring is what makes the recovery permanent.",
    overview:
      "Once the immediate pressure is off, the underlying reasons the business became distressed still need addressing — cost structures that don't match revenue, leadership gaps, or an operating model built for a market that's moved on. Phoenix designs and implements the structural changes that make recovery durable.",
    problems: [
      "Cost base no longer matched to realistic revenue",
      "Organisational structure slowing decisions down",
      "Entity or ownership structure creating unnecessary risk",
    ],
    howWeHelp: [
      "Full operating-model review against current market reality",
      "Practical cost and headcount restructuring plans",
      "Hands-on implementation support, not just a slide deck",
    ],
    benefits: [
      "A cost base the business can sustain long-term",
      "Faster decision-making with a clearer structure",
      "Reduced risk of repeat distress",
    ],
    faqs: [
      {
        q: "Does restructuring always mean redundancies?",
        a: "No — it often does involve difficult staffing decisions, but the plan is built around what the business needs to survive, not a default headcount cut.",
      },
      {
        q: "How long does restructuring take?",
        a: "Typically 4–8 weeks to design and begin implementing, scaled to business size.",
      },
    ],
    ctaLabel: "Build a Restructuring Plan",
    related: ["corporate-recovery", "management-consulting", "accounting-services"],
  },
  {
    slug: "financial-recovery",
    name: "Financial Recovery",
    tier: "Rebuild",
    icon: LineChart,
    tagline: "Cash is the first thing distress attacks.",
    seoTitle: "Financial Recovery & Cash Flow Support | Phoenix",
    metaDescription:
      "Rebuild cash flow, secure working capital, and regain financial control with Phoenix's financial recovery specialists.",
    h1: "Financial Recovery",
    heroSubhead:
      "Cash is the first thing distress attacks, and the first thing recovery has to fix.",
    overview:
      "Financial recovery focuses squarely on liquidity: rebuilding a realistic cash flow forecast, identifying short-term funding or refinancing options, and putting working-capital discipline in place so the business stops living week to week.",
    problems: [
      "No reliable visibility of cash position beyond a few weeks",
      "Existing finance facilities under threat of withdrawal",
      "Working capital tied up in stock, debtors or slow-paying contracts",
    ],
    howWeHelp: [
      "13-week (or business-appropriate) rolling cash flow model",
      "Refinancing and alternative funding options assessment",
      "Working capital and debtor-collection improvement plan",
    ],
    benefits: [
      "Clear, forward visibility of cash for the first time in months",
      "Stronger position when talking to lenders",
      "Reduced reliance on emergency, high-cost funding",
    ],
    faqs: [
      {
        q: "Can you help us find emergency funding?",
        a: "We assess and introduce appropriate funding routes as part of a wider plan — we are not a lender ourselves.",
      },
      {
        q: "Do we need new accounting systems for this?",
        a: "Often not — see Accounting Services if reporting infrastructure itself is the gap.",
      },
    ],
    ctaLabel: "Get Control of Your Cash Flow",
    related: ["accounting-services", "creditor-negotiation", "corporate-recovery"],
  },
  {
    slug: "legal-support",
    name: "Legal Support",
    tier: "Rebuild",
    icon: Scale,
    tagline: "The right legal expertise, at the right time.",
    seoTitle: "Legal Support for Business Recovery | Phoenix",
    metaDescription:
      "Coordinated legal support through contract disputes, compliance and creditor matters that surface during financial distress.",
    h1: "Legal Support",
    heroSubhead:
      "Distress creates legal exposure fast. We make sure the right legal expertise is in the room at the right time.",
    overview:
      "Financial distress rarely stays financial for long — contract breaches, employment obligations, lease disputes and compliance questions surface quickly. Phoenix coordinates the legal side of recovery, working alongside instructed solicitors to keep legal risk aligned with the wider recovery plan.",
    problems: [
      "Contract and lease disputes arising from missed payments",
      "Employment-law exposure from restructuring decisions",
      "Uncertainty over compliance obligations during distress",
    ],
    howWeHelp: [
      "Coordination with instructed solicitors so legal advice fits the commercial plan",
      "Early flagging of legal risk before it becomes a dispute",
      "Support through employment and contractual negotiations",
    ],
    benefits: [
      "Legal risk managed proactively, not reactively",
      "One coordinated plan instead of legal advice working against the commercial plan",
      "Faster resolution of disputes that would otherwise stall recovery",
    ],
    faqs: [
      {
        q: "Is Phoenix a law firm?",
        a: "No — Phoenix coordinates and works alongside independently instructed, qualified solicitors; we do not provide regulated legal advice ourselves.",
      },
      {
        q: "Can you recommend a solicitor?",
        a: "Yes, from our specialist network, matched to your specific issue.",
      },
    ],
    ctaLabel: "Get Legal Risk Under Control",
    related: ["director-advisory", "creditor-negotiation", "business-rescue"],
  },
  {
    slug: "marketing-recovery",
    name: "Marketing Recovery",
    tier: "Grow Again",
    icon: Megaphone,
    tagline: "Win back customers and revenue.",
    seoTitle: "Marketing Recovery Services | Rebuild Revenue & Trust | Phoenix",
    metaDescription:
      "Win back customers and revenue after financial distress with a marketing recovery plan built for trust, not just traffic.",
    h1: "Marketing Recovery",
    heroSubhead:
      "A stabilised business still needs customers to believe in it again. That's a marketing problem, and it's one we solve too.",
    overview:
      "Financial distress often leaves a mark on reputation — hesitant customers, paused campaigns, a sales pipeline that quietly dried up. Marketing Recovery rebuilds demand deliberately: rebuilding the message, re-engaging lapsed customers, and getting the sales pipeline moving again once the business is stable.",
    problems: [
      "Customer hesitation after visible business difficulty",
      "Paused or inconsistent marketing during the distress period",
      "Sales pipeline that's gone quiet",
    ],
    howWeHelp: [
      "Reputation and messaging audit post-distress",
      "A phased re-engagement plan for existing and lapsed customers",
      "Practical, budget-appropriate campaign rebuild",
    ],
    benefits: [
      "Faster revenue recovery once operations are stable",
      "Customer trust rebuilt with an honest, consistent message",
      "A pipeline that supports the new, leaner cost base",
    ],
    faqs: [
      {
        q: "Should we address the distress publicly or move on quietly?",
        a: "It depends on how visible the difficulty was — we help you decide and script it either way.",
      },
      {
        q: "How soon after stabilising should marketing restart?",
        a: "Usually as soon as the cash position is secure — momentum lost here is expensive to rebuild later.",
      },
    ],
    ctaLabel: "Rebuild Demand for Your Business",
    related: ["branding", "management-consulting", "accounting-services"],
  },
  {
    slug: "branding",
    name: "Branding",
    tier: "Grow Again",
    icon: PenTool,
    tagline: "Look like the business you've become.",
    seoTitle: "Brand Repositioning After Business Recovery | Phoenix",
    metaDescription:
      "A recovered business deserves a brand that reflects it. Phoenix helps reposition and relaunch with confidence.",
    h1: "Branding",
    heroSubhead:
      "Sometimes the clearest signal that a business has changed is that it looks like it has.",
    overview:
      "For businesses emerging from a visible downturn, a brand refresh can be the clearest public signal of change — to customers, staff and lenders alike. Phoenix's branding work is grounded in the operational reality of the recovered business, not a cosmetic exercise layered on top of it.",
    problems: [
      "A brand that no longer reflects the business's direction",
      "Lingering association with the difficulty that's now resolved",
      "Low internal morale around the current brand identity",
    ],
    howWeHelp: [
      "Brand positioning grounded in the actual post-recovery business",
      "Visual identity refresh where warranted (logo, tone, guidelines)",
      "Internal rollout support so staff feel part of the relaunch",
    ],
    benefits: [
      "A brand that matches the business's new reality",
      "Renewed internal and external confidence",
      "Clean separation from the distress period in the market's memory",
    ],
    faqs: [
      {
        q: "Do we need a full rebrand, or just a refresh?",
        a: "Often just a refresh — we assess this honestly before recommending a full rebrand.",
      },
      {
        q: "Does this replace our existing marketing agency?",
        a: "No — Phoenix can hand off a completed brand platform to your existing agency, or manage relaunch directly.",
      },
    ],
    ctaLabel: "Talk Through a Brand Refresh",
    related: ["marketing-recovery", "management-consulting"],
  },
  {
    slug: "management-consulting",
    name: "Management Consulting",
    tier: "Grow Again",
    icon: Users,
    tagline: "Sometimes a plan needs a pair of hands.",
    seoTitle: "Management Consulting & Interim Leadership | Phoenix",
    metaDescription:
      "Interim leadership, governance support and hands-on management consulting for businesses navigating recovery.",
    h1: "Management Consulting",
    heroSubhead:
      "Sometimes a recovery plan needs a pair of hands, not just a piece of advice.",
    overview:
      "Where a leadership gap or governance weakness is part of what caused the distress, Phoenix provides hands-on management consulting — including interim leadership placements — to keep the business running while permanent decisions are made.",
    problems: [
      "Leadership gap following a departure or removal",
      "Governance weak enough to have contributed to the distress",
      "A board needing independent operational expertise during recovery",
    ],
    howWeHelp: [
      "Interim management placement where needed",
      "Governance review and practical improvement plan",
      "Hands-on operational support alongside existing leadership",
    ],
    benefits: [
      "Business continuity during a leadership transition",
      "Stronger governance reducing risk of repeat distress",
      "Experienced operators embedded where it matters most",
    ],
    faqs: [
      {
        q: "How long do interim placements typically last?",
        a: "Usually 3–12 months, scoped to the specific gap being filled.",
      },
      {
        q: "Does this replace our existing management team?",
        a: "No — interim support works alongside existing leadership, filling a specific gap rather than displacing the team.",
      },
    ],
    ctaLabel: "Discuss Interim & Governance Support",
    related: ["business-restructuring", "director-advisory"],
  },
  {
    slug: "accounting-services",
    name: "Accounting Services",
    tier: "Grow Again",
    icon: Calculator,
    tagline: "Good decisions need good numbers.",
    seoTitle: "Accounting & Financial Reporting Support | Phoenix",
    metaDescription:
      "Reliable management accounts and forecasting that keep stakeholders confident and decisions grounded in real numbers.",
    h1: "Accounting Services",
    heroSubhead:
      "Good decisions need good numbers. We make sure you have them, on time, every time.",
    overview:
      "Recovery decisions are only as good as the numbers behind them. Phoenix provides management accounting, forecasting and reporting support — either rebuilding a finance function that's fallen behind, or supplementing an existing one during the recovery period.",
    problems: [
      "Management accounts that are late, unreliable, or missing entirely",
      "Lenders or investors demanding reporting the business can't yet produce",
      "Forecasting that hasn't kept pace with the business's real trading",
    ],
    howWeHelp: [
      "Rebuilding timely, accurate management accounts",
      "Rolling forecasts built for lender and board confidence",
      "Practical finance-function support, in-house or outsourced",
    ],
    benefits: [
      "Stakeholder confidence rebuilt through reliable reporting",
      "Faster, better-informed decision-making",
      "A finance function sized to the business's actual needs",
    ],
    faqs: [
      {
        q: "Do you replace our accountant?",
        a: "Only if you want us to — we're equally comfortable supplementing an existing accountant or finance team during recovery.",
      },
      {
        q: "Can you help with statutory filings too?",
        a: "Yes, coordinated with your accountant or auditor of record.",
      },
    ],
    ctaLabel: "Get Reporting You Can Rely On",
    related: ["financial-recovery", "business-restructuring"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
