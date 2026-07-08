import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "./Container";

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <Container className="pt-6">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-ink-500">
        <Link href="/" className="hover:text-teal-700">
          Home
        </Link>
        {items.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <ChevronRight size={12} />
            {item.href ? (
              <Link href={item.href} className="hover:text-teal-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-700">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </Container>
  );
}
