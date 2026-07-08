import type { LucideIcon } from "lucide-react";

export type FAQ = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  name: string;
  tier: "Stabilise" | "Rebuild" | "Grow Again";
  icon: LucideIcon;
  tagline: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  overview: string;
  problems: string[];
  howWeHelp: string[];
  benefits: string[];
  faqs: FAQ[];
  ctaLabel: string;
  related: string[];
};

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  challenges: string[];
  howWeHelp: string;
  relatedServices: string[];
  faq: FAQ;
  ctaLabel: string;
};

export type Article = {
  slug: string;
  title: string;
  topic: "Warning Signs" | "Directors & Legal" | "Recovery";
  readMinutes: number;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  hook: string;
  sections: { heading: string; body: string[] }[];
  takeaway: string;
  ctaLabel: string;
  related: string[];
};
