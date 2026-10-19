"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Briefcase, Quote, ShieldCheck, Users } from "lucide-react";
import { leaders } from "@/data/content";
import { Reveal } from "../ui/Reveal";
import { CarouselPicker } from "./Stories";

export function Leadership() {
  const [i, setI] = useState(0);
  const n = leaders.length;
  const l = leaders[i];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="container max-w-5xl space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              <Users className="h-3.5 w-3.5" />
              <span>Voices of Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">Leadership & Guiding Voices of SSF</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Meet the people steering Sarvam Sankalp Foundation&apos;s mission with transparent governance and a commitment to measurable
              grassroots impact. <span className="text-[11px]">(Profiles are placeholders until confirmed.)</span>
            </p>
          </div>
          <a
            href="#partners"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-semibold h-9 px-4 transition-colors shrink-0 self-start md:self-auto"
          >
            <span>CSR Partnerships</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <Reveal className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.06)] overflow-hidden">
          <div key={l.name} className="grid grid-cols-1 md:grid-cols-12 animate-fade-up">
            <div className="md:col-span-4 p-6 sm:p-8 bg-slate-50/60 border-b md:border-b-0 md:border-r border-slate-200/80 flex flex-col justify-between gap-6">
              <div className="flex flex-col sm:flex-row md:flex-col items-center sm:items-start text-center sm:text-left gap-4">
                <div className="relative shrink-0">
                  <Image src={l.image} alt={l.name} width={96} height={96} className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-slate-200 shadow-xs bg-white" />
                  <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border border-slate-200 text-emerald-600 flex items-center justify-center" title="SSF Leadership">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 leading-snug">{l.name}</h3>
                  <p className="text-xs font-medium text-slate-700 leading-snug">{l.role}</p>
                  <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1.5 pt-0.5">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>{l.org}</span>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Placeholder profile — photo is representative</span>
              </div>
            </div>
            <div className="md:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                    <Quote className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {i + 1} / {n}
                  </span>
                </div>
                <div className="p-5 sm:p-6 rounded-xl bg-slate-50/70 border border-slate-200/80">
                  <p className="text-sm sm:text-[15.5px] text-slate-700 leading-[1.75]">“{l.quote}”</p>
                </div>
              </div>
              <CarouselPicker
                items={leaders.map((x) => ({ key: x.name, label: x.short, image: x.image }))}
                active={i}
                onSelect={setI}
                onPrev={() => setI((i - 1 + n) % n)}
                onNext={() => setI((i + 1) % n)}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
