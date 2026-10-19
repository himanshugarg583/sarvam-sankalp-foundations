"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight, Camera, ChevronLeft, ChevronRight, Radio, X, ZoomIn } from "lucide-react";
import { galleryCategories, galleryItems, liveUpdates, type GalleryCategory } from "@/data/content";

function usePerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perView;
}

export function LiveTicker() {
  const text = liveUpdates.join("   •   ");
  return (
    <div className="bg-brand-red text-white py-2.5 px-4 mb-8 overflow-hidden shadow-xs border-y border-brand-red-dark">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1 rounded-md bg-white text-brand-red px-2 py-0.5 text-[10px] sm:text-xs font-extrabold shrink-0 z-10">
          <Radio className="h-3 w-3" /> LIVE UPDATES
        </span>
        <div className="relative overflow-hidden flex-1">
          <div className="flex w-max animate-marquee marquee-track" style={{ ["--marquee-duration" as string]: "45s" }}>
            {[0, 1].map((k) => (
              <span key={k} aria-hidden={k === 1} className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap pr-12">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [start, setStart] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const perView = usePerView();

  const items = useMemo(() => (filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter)), [filter]);
  const maxStart = Math.max(0, items.length - perView);
  const pos = Math.min(start, maxStart);
  const slides = maxStart + 1;

  const next = useCallback(() => setStart((s) => (Math.min(s, maxStart) >= maxStart ? 0 : s + 1)), [maxStart]);
  const prev = useCallback(() => setStart((s) => (Math.min(s, maxStart) <= 0 ? maxStart : Math.min(s, maxStart) - 1)), [maxStart]);

  useEffect(() => {
    if (lightbox !== null || showAll || slides <= 1) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, lightbox, showAll, slides]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((l) => (l === null ? l : (l + 1) % items.length));
      if (e.key === "ArrowLeft") setLightbox((l) => (l === null ? l : (l - 1 + items.length) % items.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  const choose = (c: GalleryCategory) => {
    setFilter(c);
    setStart(0);
  };

  return (
    <section id="home-gallery" className="py-16 bg-cream text-ink relative overflow-hidden border-y border-ink/10">
      <LiveTicker />
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 border border-brand-red/20 px-3.5 py-1 text-xs font-bold text-brand-red mb-3">
              <Camera className="h-3.5 w-3.5" /> MOMENTS OF CHANGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-ink">Visual Journey of Grassroots Transformation</h2>
            <p className="text-ink-soft text-sm sm:text-base max-w-2xl mt-2">
              Showing {items.length} {items.length === 1 ? "moment" : "moments"} across education, women empowerment, health and rural
              development. <span className="text-[11px] text-ink-muted">(Representative images)</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full lg:max-w-md scrollbar-none" role="tablist" aria-label="Gallery categories">
              {galleryCategories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => choose(c)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    filter === c ? "bg-brand-red text-white font-bold shadow-xs" : "bg-white text-ink hover:bg-slate-100 border border-[#1A18151A]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-xs rounded-xl h-9 px-4 shadow-sm"
            >
              {showAll ? "Carousel View" : `View All (${items.length})`} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {showAll ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((g, idx) => (
              <button
                key={g.title}
                onClick={() => setLightbox(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1A18151A] shadow-sm text-left"
              >
                <Image src={g.image} alt={g.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute top-2 right-2 rounded-md bg-black/60 text-amber-300 text-[10px] font-bold px-2 py-0.5 border border-white/20">{g.category}</span>
                <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-bold">{g.title}</span>
              </button>
            ))}
          </div>
        ) : (
          <>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#1A18151A] shadow-xl bg-white">
              <div className="absolute top-3 left-3 z-30 pointer-events-none">
                <span className="bg-ink text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow-md tracking-wider uppercase">Carousel</span>
              </div>
              {slides > 1 && (
                <>
                  <button onClick={prev} title="Previous Image" aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/50 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-xl">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button onClick={next} title="Next Image" aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/50 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-xl">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
              <div className="overflow-hidden w-full h-[450px] sm:h-[500px]">
                <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${(pos * 100) / perView}%)` }}>
                  {items.map((g, idx) => (
                    <div
                      key={g.title}
                      onClick={() => setLightbox(idx)}
                      className="w-full sm:w-1/2 lg:w-1/3 shrink-0 h-full relative cursor-pointer overflow-hidden border-r border-black/40 group select-none"
                    >
                      <Image src={g.image} alt={g.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3 z-20">
                        <span className="rounded-md px-2 py-0.5 bg-black/60 text-amber-300 text-[10px] font-bold border border-white/20 backdrop-blur-md">{g.category}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-between gap-3 shadow-lg">
                        <div className="space-y-1 flex-1 min-w-0">
                          <h4 className="font-heading font-bold text-sm sm:text-base text-white truncate group-hover:text-amber-300 transition-colors">{g.title}</h4>
                          <p className="text-xs text-slate-300 line-clamp-1">{g.desc}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightbox(idx);
                          }}
                          className="shrink-0 inline-flex items-center gap-1 h-8 px-3 rounded-lg bg-white/20 hover:bg-white text-white hover:text-black font-semibold text-xs backdrop-blur-md border border-white/30"
                        >
                          <ZoomIn className="h-4 w-4" /> Zoom
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {slides > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                {Array.from({ length: slides }).map((_, d) => (
                  <button
                    key={d}
                    onClick={() => setStart(d)}
                    title={`Go to slide ${d + 1}`}
                    aria-label={`Go to slide ${d + 1}`}
                    className={`h-2 rounded-full transition-all ${d === pos ? "w-8 bg-red-600" : "w-2 bg-ink/20 hover:bg-ink/50"}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {lightbox !== null && items[lightbox] && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={items[lightbox].title}>
          <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center" aria-label="Close" onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + items.length) % items.length);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % items.length);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
              <Image src={items[lightbox].image.replace("w=1000", "w=1800")} alt={items[lightbox].title} fill sizes="90vw" className="object-contain" />
            </div>
            <figcaption className="text-center text-white mt-4">
              <span className="text-amber-300 text-xs font-bold">{items[lightbox].category}</span>
              <h4 className="font-heading font-bold text-lg">{items[lightbox].title}</h4>
              <p className="text-sm text-slate-300">{items[lightbox].desc}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
