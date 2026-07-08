import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/resources";
import ArticleDetail from "@/components/ArticleDetail";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle.replace(" | Phoenix", ""),
    description: article.metaDescription,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return <ArticleDetail article={article} />;
}
