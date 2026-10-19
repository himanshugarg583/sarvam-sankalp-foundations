type LogoMarkProps = { className?: string };

/** SSF emblem: a sun of resolve (sankalp) rising over joined hands / lotus petals. */
export function LogoMark({ className = "h-10 w-10" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ssf-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E2A132" />
          <stop offset="1" stopColor="#CE2028" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#fff" stroke="#CE2028" strokeWidth="3" />
      <g stroke="#E2A132" strokeWidth="2.4" strokeLinecap="round">
        {[-60, -30, 0, 30, 60].map((a) => (
          <line key={a} x1="32" y1="13" x2="32" y2="8" transform={`rotate(${a} 32 30)`} />
        ))}
      </g>
      <circle cx="32" cy="30" r="10" fill="url(#ssf-sun)" />
      <path d="M12 44c6-8 13-9 20-3 7-6 14-5 20 3-7 4-13 5-20 1-7 4-13 3-20-1z" fill="#CE2028" />
      <path d="M18 47c5-3 9-3 14 0 5-3 9-3 14 0-5 4-9 5-14 2-5 3-9 2-14-2z" fill="#4A0414" />
    </svg>
  );
}

type LogoProps = { variant?: "header" | "footer"; className?: string };

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const footer = variant === "footer";
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-xl bg-white px-2.5 py-1.5 border ${
        footer ? "border-white/10 shadow-soft" : "border-slate-200/70 shadow-xs"
      } ${className}`}
    >
      <LogoMark className={footer ? "h-10 w-10 sm:h-11 sm:w-11" : "h-9 w-9 sm:h-10 sm:w-10 xl:h-11 xl:w-11"} />
      <span className="flex flex-col leading-none text-left">
        <span className="font-heading font-black tracking-tight text-[#4A0414] text-[15px] sm:text-[17px] xl:text-[19px]">
          Sarvam <span className="text-brand-red">Sankalp</span>
        </span>
        <span className="mt-1 text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.28em] text-brand-amber">
          Foundation
        </span>
      </span>
    </span>
  );
}
