"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { heroSlides, heroTrustBadges, valuesTicker } from "@/data/content";
import { DonateLink } from "../ui/DonateLink";

const AUTOPLAY_MS = 6500;
const badgeIcons = [ShieldCheck, Sparkles, Users];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 w-full h-full transition-[opacity,transform] duration-[1400ms] ease-out ${
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-[1.08]"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </div>
        ))}
      </div>

      <div className="container relative z-10 py-20 sm:py-24 sm:!px-16 lg:!px-20">
        <div className="max-w-3xl">
          {heroSlides.map((s, i) =>
            i === index ? (
              <div key={s.id} className="space-y-6 animate-fade-up" aria-live="polite">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{s.category}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                    <HeartHandshake className="h-3.5 w-3.5" />
                    <span>{s.badge}</span>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-[1.12] drop-shadow-md">
                  {s.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl drop-shadow-sm">
                  {s.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <DonateLink className="group inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm sm:text-base px-8 h-12 rounded-full shadow-2xl hover:shadow-brand-red/50 transition-all border border-brand-red">
                    <span>{s.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </DonateLink>
                  <a
                    href="#programs"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm sm:text-base px-8 h-12 rounded-full transition-all"
                  >
                    Explore Programs
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-3 text-xs font-semibold text-slate-300">
                  {heroTrustBadges.map((b, bi) => {
                    const Icon = badgeIcons[bi % badgeIcons.length];
                    return (
                      <span key={b} className="flex items-center gap-1.5 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                        <Icon className="h-3.5 w-3.5 text-amber-300" /> {b}
                      </span>
                    );
                  })}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>

      <button
        aria-label="Previous Slide"
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 items-center justify-center transition-all shadow-lg hidden sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next Slide"
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 items-center justify-center transition-all shadow-lg hidden sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 md:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            title={`Go to slide ${i + 1}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-10 bg-brand-red shadow-md" : "w-2.5 bg-white/40 hover:bg-white/80"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 inset-x-0 py-3 border-t border-white/10 bg-slate-950/80 backdrop-blur-md z-10 hidden md:block">
        <div className="flex items-center justify-center gap-8 lg:gap-12 text-xs sm:text-sm font-bold text-slate-300 overflow-x-auto px-4 scrollbar-none">
          {valuesTicker.map((v, i) => (
            <span key={v.text} className="flex items-center gap-8 lg:gap-12 shrink-0">
              <span className={v.accent ? "text-brand-red font-black" : "font-semibold text-white"}>{v.text}</span>
              {i < valuesTicker.length - 1 && <span className="text-white/30">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
