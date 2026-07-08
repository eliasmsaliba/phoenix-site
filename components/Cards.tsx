import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function IconCard({
  href,
  icon: Icon,
  title,
  description,
  meta,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-teal-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-teal-900/5"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      {meta && (
        <span className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-muted-500">
          {meta}
        </span>
      )}
      <h3 className="mt-2 font-display text-lg font-semibold text-ink-950">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-ink-700">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
        Learn more
        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}

export function ArticleCard({
  href,
  title,
  topic,
  readMinutes,
  excerpt,
}: {
  href: string;
  title: string;
  topic: string;
  readMinutes: number;
  excerpt: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-teal-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-teal-900/5"
    >
      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-muted-500">
        <span>{topic}</span>
        <span className="h-1 w-1 rounded-full bg-ink-300" />
        <span>{readMinutes} min read</span>
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-ink-700">{excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
        Read the guide
        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
