type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  tagline?: boolean;
  className?: string;
  dark?: boolean;
};

/**
 * Abstract pinwheel mark echoing the supplied Phoenix brand asset:
 * five overlapping blades in the brand teal family around a red core.
 */
export function LogoMark({ size = 36 }: { size?: number }) {
  const blade = (rotate: number, color: string, scale = 1) => (
    <path
      d="M50,50 C48,32 58,18 78,16 C82,34 74,48 50,50 Z"
      fill={color}
      transform={`rotate(${rotate} 50 50) scale(${scale})`}
    />
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {blade(0, "#09BAB5")}
      {blade(72, "#5C5C5C")}
      {blade(144, "#20A29F")}
      {blade(216, "#358C88")}
      {blade(288, "#487373")}
      <circle cx="46" cy="52" r="9" fill="#ED2024" />
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
            className={`font-display text-[1.35rem] font-semibold tracking-tight ${
              dark ? "text-paper-50" : "text-ink-950"
            }`}
          >
            Phoenix
          </span>
          {tagline && (
            <span className="mt-0.5 font-display text-[0.7rem] italic text-red-500">
              Turning Setbacks into Comebacks
            </span>
          )}
        </span>
      )}
    </span>
  );
}
