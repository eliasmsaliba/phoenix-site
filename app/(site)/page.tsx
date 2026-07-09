import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  Calculator,
  Tag,
  Megaphone,
  Users,
  Handshake,
  UsersRound,
  Scale,
  Search,
  ShieldCheck,
  Settings,
  TrendingUp,
  Rocket,
  Database,
  Users2,
  CalendarDays,
  HandCoins,
  Lock,
  Star,
} from "lucide-react";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { Testimonial } from "@/components/TrustBar";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Business Recovery & Turnaround Specialists",
  description:
    "Genuine turnaround solutions for businesses under pressure. When insolvency is avoidable, Phoenix helps directors stabilise, restructure and rebuild.",
};

const trustPoints = ["Recovery First", "Practical Solutions", "End to End Support", "Confidential"];

const solutions = [
  { icon: Calculator, name: "Accountancy", color: "text-teal-600", body: "Management accounts, cashflow modelling, forecasting and statutory compliance." },
  { icon: Tag, name: "Branding", color: "text-pink-500", body: "Reposition your brand, strengthen your identity and stand out in your marketplace." },
  { icon: Megaphone, name: "Marketing", color: "text-gold-500", body: "Targeted marketing strategies that build visibility, generate leads and drive growth." },
  { icon: Users, name: "Management Consulting", color: "text-teal-600", body: "Strategic advice and practical support to improve performance and profitability." },
  { icon: Handshake, name: "Hand Lead End to End", color: "text-red-500", body: "We take ownership and guide you through the entire recovery journey." },
  { icon: UsersRound, name: "Creditor Negotiations", color: "text-coral-500", body: "We negotiate with creditors, HMRC and suppliers to protect your business." },
  { icon: Scale, name: "Legal Assistance", color: "text-gold-500", body: "Commercial, insolvency and director support from experienced legal professionals." },
];

const turnaroundSteps = [
  { icon: Search, number: "1", name: "Assess", color: "bg-red-500", body: "We identify the root causes of financial and operational challenges." },
  { icon: ShieldCheck, number: "2", name: "Stabilise", color: "bg-teal-600", body: "We protect cashflow, engage with creditors and stop the pressure." },
  { icon: Settings, number: "3", name: "Restructure", color: "bg-coral-500", body: "We improve operations, reduce costs and build a sustainable structure." },
  { icon: TrendingUp, number: "4", name: "Rebuild", color: "bg-pink-500", body: "We strengthen your brand, marketing, systems and management." },
  { icon: Rocket, number: "5", name: "Grow", color: "bg-gold-500", body: "We create a clear plan for growth and long-term success." },
];

const stats = [
  { icon: Database, value: "£250m+", color: "text-red-500", label: "Liabilities Managed" },
  { icon: Users2, value: "1,000+", color: "text-teal-600", label: "Businesses Assisted" },
  { icon: CalendarDays, value: "25+", color: "text-coral-500", label: "Years Combined Experience" },
  { icon: HandCoins, value: "Fixed Fee", color: "text-pink-500", label: "Initial Consultation Available" },
  { icon: Lock, value: "100%", color: "text-teal-600", label: "Confidential" },
  { icon: Star, value: "5★", color: "text-gold-500", label: "Rated by Our Clients" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-teal-100 bg-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-24">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-red-500">
              Corporate Recovery &amp; Turnaround Specialists
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-ink-950 sm:text-5xl lg:text-[3.4rem]">
              Turning Setbacks into <span className="text-red-500">Comebacks.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-700">
              Genuine turnaround solutions for businesses under pressure. When
              insolvency is avoidable, we help directors stabilise, restructure
              and rebuild stronger, more profitable businesses.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {trustPoints.map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                  <CheckCircle2 size={16} className="text-red-500" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="/confidential-consultation" size="lg">
                Request a Confidential Consultation
              </CTAButton>
              <CTAButton href={CONTACT.phoneHref} size="lg" variant="ghost">
                <Phone size={16} /> {CONTACT.phoneDisplay}
              </CTAButton>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-gold-400/10 via-pink-400/10 to-teal-500/10 blur-3xl" />
            <div className="mx-auto w-full max-w-md">
              <Image
                src="/logo-mark.png"
                alt=""
                width={512}
                height={512}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* End to End Solutions */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-ink-950 sm:text-4xl">
              End to End Solutions. One Trusted Partner.
            </h2>
            <p className="mt-4 text-base text-ink-700">
              We combine financial expertise, strategic insight and hands-on
              support to deliver genuine turnaround solutions where insolvency
              is avoidable.
            </p>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center">
                    <Icon size={30} strokeWidth={1.5} className={s.color} />
                  </span>
                  <h3 className={`mt-3 text-xs font-bold uppercase tracking-wide ${s.color}`}>
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">{s.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Turnaround Model */}
      <section className="bg-teal-900 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl lg:text-left">
                The Phoenix Turnaround Model
              </h2>
              <p className="mt-3 text-center text-base text-teal-100/80 lg:text-left">
                A proven process designed to stabilise, restructure and rebuild.
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                {turnaroundSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.name} className="text-center">
                      <span
                        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${step.color} text-white`}
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
                        {step.name}
                      </h3>
                      <p className="mt-2 text-xs text-teal-100/70">{step.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="font-display text-2xl leading-snug text-white">
                  Recovery First.
                  <br />
                  Insolvency When Necessary.
                </p>
                <span className="mt-4 block h-1 w-16 bg-red-500" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Directors Choose Phoenix */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-semibold text-ink-950 sm:text-4xl">
                Why Directors Choose Phoenix
              </h2>
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label}>
                      <Icon size={22} className={s.color} strokeWidth={1.75} />
                      <p className={`mt-3 font-display text-2xl font-semibold ${s.color}`}>
                        {s.value}
                      </p>
                      <p className="mt-1 text-sm text-ink-700">{s.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-pink-300/40 p-8">
                <Testimonial
                  quote="Phoenix provided clear advice at a very difficult time. They explained all our options and helped us make the right decisions for our business and our future."
                  attribution="Managing Director — Manufacturing Company"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
