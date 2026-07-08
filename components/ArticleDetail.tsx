import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "@/lib/types";
import { articles } from "@/data/resources";
import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import CTAButton from "./CTAButton";
import CTABand from "./CTABand";

export default function ArticleDetail({ article }: { article: Article }) {
  const related = articles.filter((a) => article.related.includes(a.slug));

  return (
    <>
      <Breadcrumb items={[{ label: "Resources", href: "/resources" }, { label: article.title }]} />

      <article>
        <section className="border-b border-teal-100 bg-gradient-to-b from-teal-50 to-paper-50">
          <Container className="py-14 sm:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                <span>{article.topic}</span>
                <span className="flex items-center gap-1 text-ink-500">
                  <Clock size={12} />
                  {article.readMinutes} min read
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-semibold text-ink-950 sm:text-5xl">
                {article.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-ink-700">{article.hook}</p>
            </div>
          </Container>
        </section>

        <Container className="py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="max-w-2xl lg:col-span-2">
              {article.sections.map((section) => (
                <div key={section.heading} className="mb-10">
                  <h2 className="text-2xl font-semibold text-ink-950">
                    {section.heading}
                  </h2>
                  <div className="mt-4 flex flex-col gap-3">
                    {section.body.map((para) => (
                      <p key={para} className="text-base leading-relaxed text-ink-700">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border-l-4 border-red-500 bg-teal-50/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-500">
                  Key takeaway
                </p>
                <p className="mt-2 font-display text-lg text-ink-950">
                  {article.takeaway}
                </p>
              </div>

              <div className="mt-10">
                <CTAButton href="/confidential-consultation" size="lg">
                  {article.ctaLabel}
                </CTAButton>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-teal-100 bg-white p-7">
                <h3 className="font-display text-base font-semibold text-ink-950">
                  Related reading
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/resources/${r.slug}`}
                        className="flex items-center justify-between gap-2 text-sm font-medium text-teal-700 hover:underline"
                      >
                        {r.title}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/resources"
                  className="mt-6 block text-sm font-medium text-ink-700 hover:text-teal-700"
                >
                  Browse all resources →
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      <CTABand
        headline="Read something that sounds like your situation?"
        body="Let's talk — in confidence, with no obligation."
        ctaLabel="Book a Consultation"
      />
    </>
  );
}
