"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Heart, LogIn, Menu, Search, ShieldCheck, X, BadgeCheck } from "lucide-react";
import { navItems } from "@/data/content";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { DonateLink } from "./ui/DonateLink";

function TopBar() {
  return (
    <div className="hidden lg:block relative z-[60] bg-brand-maroon text-white text-xs border-b border-black/20 w-full">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4 px-4 lg:px-6 py-1.5">
        <div className="flex items-center gap-4 xl:gap-5 min-w-0">
          <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
            📞 <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:underline">{siteConfig.phone}</a>
          </span>
          <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
            ✉️ <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
          </span>
          <span className="hidden xl:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 font-semibold whitespace-nowrap">
            <ShieldCheck className="h-3 w-3" /> {siteConfig.motto}
          </span>
        </div>
        <div className="flex items-center gap-3 xl:gap-4 shrink-0">
          <a href="#accreditations" className="hover:underline flex items-center gap-1.5 font-semibold whitespace-nowrap">
            <BadgeCheck className="h-3.5 w-3.5" /> Transparency & Compliance
          </a>
          <span className="text-white/40">|</span>
          <a href="#join" className="hover:underline font-semibold whitespace-nowrap">Volunteer</a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
  };

  return (
    <>
      <TopBar />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/60 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between gap-2 xl:gap-3 h-[72px] lg:h-20">
            <a href="#hero" onClick={closeAll} className="flex items-center shrink-0 group" aria-label={`${siteConfig.name} — Home`}>
              <Logo className="transition-all duration-200 group-hover:scale-[1.01] group-hover:shadow-md" />
            </a>

            <nav ref={navRef} className="hidden lg:flex items-center justify-center gap-0.5 2xl:gap-1 min-w-0" aria-label="Primary">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpen(item.label)}
                    onMouseLeave={() => setOpen(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={open === item.label}
                      aria-haspopup="true"
                      onClick={() => setOpen(open === item.label ? null : item.label)}
                      className="px-2 xl:px-2.5 2xl:px-3.5 py-2 rounded-lg text-xs xl:text-[13px] 2xl:text-sm font-medium text-slate-800 flex items-center gap-1 transition-colors hover:bg-red-50 hover:text-red-700 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:outline-none"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                        open === item.label ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-1 invisible"
                      }`}
                    >
                      <ul className="min-w-[240px] rounded-2xl border border-slate-200 bg-white p-2 shadow-card">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <a
                              href={c.href === "#donate" ? siteConfig.donationUrl : c.href}
                              onClick={closeAll}
                              className="block rounded-lg px-3 py-2 text-[13px] font-medium text-slate-700 hover:bg-red-50 hover:text-red-700"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-2 xl:px-2.5 2xl:px-3.5 py-2 rounded-lg text-xs xl:text-[13px] 2xl:text-sm transition-colors hover:bg-red-50 whitespace-nowrap shrink-0 text-red-700 font-semibold"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>

            <div className="flex items-center gap-1.5 xl:gap-2 shrink-0">
              <a
                href="#programs"
                className="hidden md:flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-900 h-8 w-8 xl:h-9 xl:w-9"
                title="Explore programs"
                aria-label="Explore programs"
              >
                <Search className="h-4 w-4" />
              </a>
              <DonateLink className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-xs px-2.5 xl:px-3.5 h-8 rounded-full text-xs xl:text-[13px] transition-transform active:scale-95 whitespace-nowrap">
                <Heart className="h-3.5 w-3.5 fill-current" />
                <span>Donate</span>
              </DonateLink>
              <div className="hidden md:flex items-center gap-1.5 xl:gap-2">
                <a
                  href="#join"
                  className="inline-flex items-center gap-1.5 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 font-medium text-xs xl:text-[13px] px-2.5 xl:px-3.5 whitespace-nowrap"
                >
                  <LogIn className="h-3.5 w-3.5" /> Volunteer
                </a>
                <a
                  href="#join"
                  className="inline-flex items-center h-8 rounded-full bg-red-700 hover:bg-red-800 text-white font-semibold shadow-xs text-xs xl:text-[13px] px-3 xl:px-4 whitespace-nowrap"
                >
                  Membership
                </a>
              </div>
              <button
                type="button"
                className="lg:hidden flex items-center justify-center rounded-xl h-9 w-9 hover:bg-slate-100"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer (outside header: backdrop-filter would otherwise trap `fixed`) */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-white transition-all duration-300 overflow-y-auto ${
            mobileOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-slate-100">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold text-slate-800"
                    aria-expanded={mobileSection === item.label}
                    onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${mobileSection === item.label ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"}`}>
                    <ul className="overflow-hidden space-y-0.5 pl-2">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a
                            href={c.href === "#donate" ? siteConfig.donationUrl : c.href}
                            onClick={closeAll}
                            className="block rounded-lg px-3 py-2 text-[13px] text-slate-600 hover:bg-red-50 hover:text-red-700"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a key={item.label} href={item.href} onClick={closeAll} className="block py-3 text-sm font-semibold text-red-700 border-b border-slate-100">
                  {item.label}
                </a>
              ),
            )}
            <div className="grid grid-cols-2 gap-2 pt-4">
              <a href="#join" onClick={closeAll} className="h-10 inline-flex items-center justify-center rounded-full border border-slate-200 text-sm font-medium">
                Volunteer
              </a>
              <a href="#join" onClick={closeAll} className="h-10 inline-flex items-center justify-center rounded-full bg-red-700 text-white text-sm font-semibold">
                Membership
              </a>
              <DonateLink onClick={closeAll} className="col-span-2 h-11 inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 text-white text-sm font-semibold">
                <Heart className="h-4 w-4 fill-current" /> Donate Now
              </DonateLink>
            </div>
            <div className="pt-4 text-xs text-slate-500 space-y-1">
              <p>📞 {siteConfig.phone}</p>
              <p>✉️ {siteConfig.email}</p>
            </div>
          </nav>
        </div>
    </>
  );
}
