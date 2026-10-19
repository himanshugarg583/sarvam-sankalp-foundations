import { impactGroups } from "@/data/content";
import { CountUp } from "../ui/CountUp";
import { SectionHeading } from "../ui/SectionHeading";

export function StatCard({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="bg-white/80 p-5 sm:p-6 rounded-2xl border border-brand-red/20 text-center space-y-2 shadow-xs">
      <span className="text-3xl sm:text-5xl font-black text-brand-red font-heading block tabular-nums">
        <CountUp value={value} suffix={suffix} />
      </span>
      <span className="text-[11px] sm:text-xs font-bold text-ink uppercase tracking-wider block">{label}</span>
    </div>
  );
}

export function Impact() {
  return (
    <section id="impact" className="py-16 sm:py-20 bg-gradient-to-b from-sand to-sand-dark border-y border-ink/10">
      <div className="container space-y-12">
        <SectionHeading layout="center" eyebrow="Turning Belief Into Impact" title="Our Sankalp: Goals for Grassroots Transformation" />
        {impactGroups.map((g, gi) => (
          <div key={g.title} className={`space-y-4 ${gi > 0 ? "pt-4" : ""}`}>
            <h3 className="text-center text-xl font-heading font-bold text-brand-red italic">{g.title}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {g.stats.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </div>
        ))}
        <p className="text-center text-[11px] text-ink-muted">
          * Figures are SSF&apos;s target milestones (placeholder) and will be replaced with audited achievements.
        </p>
      </div>
    </section>
  );
}
