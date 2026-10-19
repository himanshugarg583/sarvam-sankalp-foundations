"use client";

import { useState, type FormEvent } from "react";
import { Heart, Mail, MapPin, Phone, Send } from "lucide-react";
import { footerColumns, policyLinks } from "@/data/content";
import imageCredits from "@/data/imageCredits.json";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./ui/SocialIcon";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder: wire to a newsletter provider/API route when available.
    setStatus(/^\S+@\S+\.\S+$/.test(email) ? "ok" : "err");
    if (/^\S+@\S+\.\S+$/.test(email)) setEmail("");
  };

  return (
    <footer id="contact" className="mt-auto bg-slate-950 text-slate-300">
      <div id="newsletter" className="border-b border-white/10">
        <div className="container py-6 md:py-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-1">Join the Sankalp for change</h3>
              <p className="text-xs md:text-sm text-slate-400">Get impact stories, volunteer opportunities and updates straight to your inbox.</p>
            </div>
            <form onSubmit={subscribe} className="max-w-md md:ml-auto w-full" noValidate>
              <div className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("idle");
                  }}
                  placeholder="your@email.com"
                  className="flex w-full min-w-0 rounded-md border px-3 bg-white/5 border-white/10 text-white placeholder:text-slate-500 text-xs h-9 outline-none focus-visible:ring-2 focus-visible:ring-brand-amber/60"
                />
                <button type="submit" className="inline-flex items-center gap-1.5 rounded-md bg-brand-amber hover:bg-brand-amber/90 text-white shrink-0 text-xs font-semibold h-9 px-3.5">
                  Subscribe <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className={`text-[11px] mt-1.5 h-4 ${status === "ok" ? "text-emerald-400" : "text-red-400"}`} aria-live="polite">
                {status === "ok" ? "Thank you! You're on the list." : status === "err" ? "Please enter a valid email address." : ""}
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="container py-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-2.5">
            <div className="flex items-center mb-3">
              <Logo variant="footer" />
            </div>
            <p className="text-xs text-slate-400 mb-3 max-w-sm leading-relaxed">{siteConfig.tagline}. {siteConfig.description}</p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-slate-400 min-w-0">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-amber" />
                <span className="truncate">{siteConfig.address}</span>
              </div>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-slate-400 hover:text-brand-amber">
                <Phone className="h-3.5 w-3.5 text-brand-amber" /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-slate-400 hover:text-brand-amber">
                <Mail className="h-3.5 w-3.5 text-brand-amber" /> {siteConfig.email}
              </a>
            </div>
            <div className="flex gap-1.5 mt-3">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-brand-amber hover:text-white flex items-center justify-center transition-colors"
                >
                  <SocialIcon name={s.label} />
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-white mb-2 text-xs uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-1.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href === "#donate" ? siteConfig.donationUrl : l.href}
                      className="text-xs text-slate-400 hover:text-brand-amber transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-900/60 py-2.5 text-[10px] text-slate-400">
        <div className="container flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {siteConfig.legal.map((l, i) => (
              <span key={l.label} className="flex items-center gap-3">
                <span>
                  <strong>{l.label}:</strong> {l.value}
                </span>
                {i < siteConfig.legal.length - 1 && <span className="text-slate-700 hidden sm:inline">|</span>}
              </span>
            ))}
          </div>
          <div className="text-amber-400 font-medium">Statutory details are placeholders pending verification</div>
        </div>
        <div className="container mt-1.5 text-[10px] text-slate-500">
          Photos: Unsplash and Wikimedia Commons contributors (
          {imageCredits.map((c, i) => (
            <span key={c.file}>
              <a href={c.source} target="_blank" rel="noreferrer" className="hover:text-brand-amber underline-offset-2 hover:underline">
                {c.author || "Wikimedia Commons"}
              </a>
              , {c.license}
              {i < imageCredits.length - 1 ? "; " : ""}
            </span>
          ))}
          ). Images are representative and do not depict SSF beneficiaries.
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-3.5 flex flex-col md:flex-row items-center justify-between gap-2.5 text-[11px] text-slate-500">
          <div>© {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {policyLinks.map((p, i) => (
              <span key={p} className="flex items-center gap-2.5">
                <a href="#contact" className="hover:text-brand-amber transition-colors">{p}</a>
                {i < policyLinks.length - 1 && <span className="text-slate-700">·</span>}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
}
