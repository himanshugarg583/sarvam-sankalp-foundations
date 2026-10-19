"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, HeartHandshake, MapPin, Quote, Star } from "lucide-react";
import { beneficiaryStories } from "@/data/content";
import { Reveal } from "../ui/Reveal";

export function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
  );
}

type PickerProps = {
  items: { key: string; label: string; image: string }[];
  active: number;
  onSelect: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

export function CarouselPicker({ items, active, onSelect, onPrev, onNext }: PickerProps) {
  return (
    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none min-w-0">
        {items.map((it, i) => (
          <button
            key={it.key}
            onClick={() => onSelect(i)}
            aria-label={`Show ${it.label}`}
            aria-current={i === active}
            className={`flex items-center gap-2 px-2.5 py-1 rounded-lg border text-xs transition-all shrink-0 ${
              i === active ? "bg-slate-900 border-slate-900 text-white font-semibold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Image src={it.image} alt="" width={20} height={20} className="w-5 h-5 rounded-full object-cover shrink-0" />
            <span className="truncate max-w-[100px] hidden sm:inline">{it.label}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button onClick={onPrev} title="Previous" aria-label="Previous" className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={onNext} title="Next" aria-label="Next" className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function Stories() {
  const [i, setI] = useState(0);
  const n = beneficiaryStories.length;
  const s = beneficiaryStories[i];

  return (
    <section id="voices" className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="container max-w-5xl space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              <HeartHandshake className="h-3.5 w-3.5" />
              <span>Voice of Change</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">The Real Measure of Our Work</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Partnerships enable scale. But the true measure of our work is the dignity, livelihood and transformation
              experienced by the families we serve.
            </p>
          </div>
          <a
            href="#home-gallery"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-semibold h-9 px-4 transition-colors shrink-0 self-start md:self-auto"
          >
            <span>All Beneficiary Stories</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <Reveal className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.06)] overflow-hidden">
          <div key={s.name} className="grid grid-cols-1 md:grid-cols-12 animate-fade-up">
            <div className="md:col-span-5 bg-slate-50/60 border-b md:border-b-0 md:border-r border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image src={s.image} alt={s.name} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">{s.name}</h3>
                    <Stars />
                  </div>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{s.location}</span>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500 font-medium">{s.category}</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-[11px] font-semibold">{s.metric}</span>
              </div>
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                    <Quote className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {i + 1} / {n}
                  </span>
                </div>
                <div className="p-5 sm:p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-3">
                  <p className="text-sm sm:text-[15.5px] font-semibold text-slate-900 leading-[1.65]">“{s.quote}”</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-[1.7] pt-2.5 border-t border-slate-200/70">{s.story}</p>
                </div>
              </div>
              <CarouselPicker
                items={beneficiaryStories.map((b) => ({ key: b.name, label: b.name, image: b.image }))}
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
