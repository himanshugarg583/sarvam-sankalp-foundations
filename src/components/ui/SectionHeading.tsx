import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** "split": title left, description right (reference's programs/reach/partners layout). */
  layout?: "split" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, layout = "split", className = "" }: SectionHeadingProps) {
  if (layout === "center") {
    return (
      <div className={`text-center space-y-2 ${className}`}>
        <p className="text-xs font-extrabold uppercase tracking-widest text-brand-red">{eyebrow}</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink">{title}</h2>
        {description && <p className="text-sm text-ink-muted max-w-2xl mx-auto">{description}</p>}
      </div>
    );
  }
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ink/10 ${className}`}
    >
      <div className="space-y-2">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-red">{eyebrow}</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink">{title}</h2>
      </div>
      {description && <p className="text-xs sm:text-sm text-ink-muted max-w-lg leading-relaxed">{description}</p>}
    </div>
  );
}
