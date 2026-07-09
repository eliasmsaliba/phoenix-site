type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  tagline?: boolean;
  className?: string;
  dark?: boolean;
};

/**
 * Pinwheel mark matching the approved brand design: five gradient blades
 * (gold, pink, coral, teal) around an off-centre red core.
 */
export function LogoMark({ size = 36 }: { size?: number }) {
  const blade = (rotate: number, fill: string) => (
    <path
      d="M50,50 C47,30 58,14 80,11 C85,32 76,48 50,50 Z"
      fill={fill}
      transform={`rotate(${rotate} 50 50)`}
    />
  );

  const gid = "phx-logo-grad";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${gid}-gold`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BD7328" />
          <stop offset="100%" stopColor="#E6A94F" />
        </linearGradient>
        <linearGradient id={`${gid}-pink`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6CDD0" />
          <stop offset="100%" stopColor="#EFA0A5" />
        </linearGradient>
        <linearGradient id={`${gid}-coral`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2967A" />
          <stop offset="100%" stopColor="#D9532F" />
        </linearGradient>
        <linearGradient id={`${gid}-teal`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0D201F" />
          <stop offset="100%" stopColor="#20A29F" />
        </linearGradient>
      </defs>
      {blade(0, `url(#${gid}-gold)`)}
      {blade(72, `url(#${gid}-pink)`)}
      {blade(144, `url(#${gid}-coral)`)}
      {blade(216, `url(#${gid}-teal)`)}
      {blade(288, "#358C88")}
      <circle cx="45" cy="53" r="9" fill="#ED2024" />
    </svg>
  );
}

export default function Logo({
  size = 36,
  withWordmark = true,
  tagline = false,
  className = "",
  dark = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.35rem] font-bold uppercase tracking-wide ${
              dark ? "text-paper-50" : "text-ink-950"
            }`}
          >
            Phoenix
          </span>
          {tagline && (
            <span className="mt-0.5 text-[0.68rem] font-medium text-gold-600">
              Turning Setbacks into Comebacks
            </span>
          )}
        </span>
      )}
    </span>
  );
}
