import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/data/industries";
import IndustryDetail from "@/components/IndustryDetail";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.seoTitle.replace(" | Phoenix", ""),
    description: industry.metaDescription,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return <IndustryDetail industry={industry} />;
}
