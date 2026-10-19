import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/content";
import { Reveal } from "../ui/Reveal";

type Program = (typeof programs)[number];

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16 border-b border-ink/10 pb-16 last:border-b-0 last:pb-0`}
    >
      <Reveal className="w-full lg:w-1/2 space-y-5">
        <span className="text-5xl sm:text-7xl font-heading font-black text-brand-red/20 block">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-red">{program.tag}</div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-ink">{program.title}</h3>
        </div>
        <p className="text-sm sm:text-base text-ink-soft leading-relaxed">{program.desc}</p>
        <div className="pt-3">
          <a
            href="#join"
            className="inline-flex items-center gap-1.5 h-9 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs sm:text-sm rounded-full px-6 shadow-xs transition-colors"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
      <Reveal className="w-full lg:w-1/2" delay={120}>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </Reveal>
    </div>
  );
}

export function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-cream">
      <div className="container space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/10 pb-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-red mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink">Core Pillars of Grassroots Action</h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md">
            Working across interconnected areas — from early learning and digital skills to women&apos;s livelihoods,
            community health and the environment.
          </p>
        </div>
        <div className="space-y-16">
          {programs.map((p, i) => (
            <ProgramCard key={p.tag} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
