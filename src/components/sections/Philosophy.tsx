import { ArrowRight } from "lucide-react";
import { philosophy } from "@/data/content";
import { Reveal } from "../ui/Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-cream">
      <div className="container">
        <div className="space-y-2 mb-10">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-red">The SSF Way</p>
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-heading font-black italic text-brand-red">We Are:</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {philosophy.map((p, i) => (
            <Reveal
              key={p.num}
              delay={(i % 2) * 80}
              className="h-full last:lg:col-span-2 last:lg:w-1/2 last:lg:justify-self-center"
            >
              <article className="border border-[#1A18152E] hover:-translate-y-2.5 hover:shadow-lg shadow-[rgba(26,24,21,0.05)] transition-all duration-300 rounded-[10px] bg-white h-full flex flex-col p-7 sm:p-8">
                <div className="space-y-3">
                  <p className="text-3xl sm:text-4xl font-heading font-black text-brand-red">{p.num}</p>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#programs"
            className="inline-flex items-center gap-2 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold text-xs sm:text-sm px-6 sm:px-8 h-11 rounded-full shadow-xs transition-all bg-white"
          >
            <span>Explore Our Approach & Methodology</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
