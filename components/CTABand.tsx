import CTAButton from "./CTAButton";
import Container from "./Container";

export default function CTABand({
  eyebrow = "Talk to Phoenix",
  headline,
  body,
  ctaLabel = "Request a Confidential Consultation",
  ctaHref = "/confidential-consultation",
}: {
  eyebrow?: string;
  headline: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-ink-950">
      <Container className="flex flex-col items-start gap-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {headline}
          </h2>
          {body && <p className="mt-4 text-base text-paper-100/70">{body}</p>}
        </div>
        <CTAButton href={ctaHref} size="lg" className="shrink-0">
          {ctaLabel}
        </CTAButton>
      </Container>
    </section>
  );
}
