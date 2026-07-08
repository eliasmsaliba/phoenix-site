import { ShieldCheck, Clock, Lock } from "lucide-react";
import Container from "./Container";

const stats = [
  { value: "24 hrs", label: "Typical time to first call" },
  { value: "100%", label: "Confidential, no obligation" },
  { value: "7", label: "Sectors of deep specialism" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-teal-100 bg-teal-50/60">
      <Container className="grid gap-10 py-12 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-semibold text-teal-700">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-ink-700">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function TrustBadges() {
  const badges = [
    { icon: Lock, label: "Confidential by default" },
    { icon: Clock, label: "Response within 24 hours" },
    { icon: ShieldCheck, label: "No obligation, ever" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {badges.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="flex items-center gap-2 text-sm font-medium text-ink-700"
        >
          <Icon size={16} className="text-teal-600" />
          {label}
        </span>
      ))}
    </div>
  );
}

export function Testimonial({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <figure className="rounded-2xl border border-teal-100 bg-white p-8">
      <blockquote className="font-display text-xl italic text-ink-950">
        “{quote}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-medium text-muted-500">
        {attribution}
      </figcaption>
    </figure>
  );
}
