import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-dark";
  size?: "md" | "lg";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    ghost:
      "border-2 border-teal-600 text-teal-700 hover:bg-teal-50",
    "ghost-dark":
      "border-2 border-white/70 text-white hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
