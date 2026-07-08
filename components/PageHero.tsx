import CTAButton from "./CTAButton";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  h1,
  subhead,
  ctaLabel,
  ctaHref = "/confidential-consultation",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  h1: string;
  subhead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-b border-teal-100 bg-gradient-to-b from-teal-50 to-paper-50">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-semibold text-ink-950 sm:text-5xl">
            {h1}
          </h1>
          {subhead && (
            <p className="mt-5 max-w-2xl text-lg text-ink-700">{subhead}</p>
          )}
          {(ctaLabel || secondaryLabel) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {ctaLabel && (
                <CTAButton href={ctaHref} size="lg">
                  {ctaLabel}
                </CTAButton>
              )}
              {secondaryLabel && secondaryHref && (
                <CTAButton href={secondaryHref} size="lg" variant="ghost">
                  {secondaryLabel}
                </CTAButton>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
