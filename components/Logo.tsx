import Image from "next/image";

const MARK_SRC = "/logo-mark.png";
const MARK_NATIVE = 512;

const FULL_SRC = "/logo-full.png";
const FULL_NATIVE_W = 1079;
const FULL_NATIVE_H = 337;

type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

/** Icon-only mark — used for the hero graphic and on dark surfaces. */
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src={MARK_SRC}
      alt=""
      width={MARK_NATIVE}
      height={MARK_NATIVE}
      style={{ width: size, height: size }}
      className={className}
      priority={size >= 120}
    />
  );
}

/** Full lockup (mark + "Phoenix" wordmark + tagline) — used in the header. */
export default function Logo({ size = 40, withWordmark = true, className = "" }: LogoProps) {
  if (!withWordmark) {
    return <LogoMark size={size} className={className} />;
  }
  const width = Math.round((size * FULL_NATIVE_W) / FULL_NATIVE_H);
  return (
    <Image
      src={FULL_SRC}
      alt="Phoenix — Turning Setbacks into Comebacks"
      width={FULL_NATIVE_W}
      height={FULL_NATIVE_H}
      style={{ height: size, width }}
      className={className}
      priority
    />
  );
}
