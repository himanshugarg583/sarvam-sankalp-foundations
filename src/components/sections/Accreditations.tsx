"use client";

import { useState } from "react";
import { ArrowRight, Award, Building2, Check, Clock, Copy, Eye, FileText, Landmark, Receipt, Scale, type LucideIcon } from "lucide-react";
import { accreditationBadges, certificates } from "@/data/content";
import { LogoMark } from "../Logo";
import { Reveal } from "../ui/Reveal";

const badgeIcons: Record<(typeof accreditationBadges)[number]["icon"], LucideIcon> = { Landmark, Receipt, Building2, Scale };

function CertificatePreview({ title, issuer }: { title: string; issuer: string }) {
  return (
    <div className="relative w-[78%] h-[88%] bg-[#fffdf8] rounded-md shadow-md border-[6px] border-double border-[#c9a45c]/60 flex flex-col items-center justify-center text-center px-4 gap-1.5">
      <LogoMark className="h-8 w-8 opacity-80" />
      <span className="text-[8px] uppercase tracking-[0.2em] text-ink-muted">{issuer}</span>
      <span className="font-heading font-black text-[11px] text-ink leading-tight">{title}</span>
      <span className="text-[9px] text-ink-muted">Issued to Sarvam Sankalp Foundation</span>
      <span className="mt-1 h-px w-2/3 bg-ink/15" />
      <span className="text-[8px] font-bold text-amber-700 uppercase tracking-wider">Document awaiting upload</span>
    </div>
  );
}

export function Accreditations() {
  const [copied, setCopied] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const copy = async (t: string) => {
    try {
      await navigator.clipboard.writeText(t);
      setCopied(t);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section
      id="accreditations"
      className="py-16 sm:py-24 bg-gradient-to-b from-cream via-[#F7F3EC] to-cream text-ink relative overflow-hidden border-t border-ink/10"
    >
      <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 border border-brand-red/20 px-3.5 py-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-red">
              <Award className="h-3.5 w-3.5" />
              Accreditations & Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-ink leading-[1.12]">
              Transparency First. Institutional Trust Built.
            </h2>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
              Sarvam Sankalp Foundation is committed to full statutory compliance. Our registrations, tax-exemption approvals and letters
              of appreciation will be published here for public inspection as they are issued.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-ink hover:bg-brand-red text-white font-bold text-xs sm:text-sm rounded-xl h-10 px-5 shadow-sm transition-colors shrink-0 self-start lg:self-auto"
          >
            Request Compliance Documents <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {accreditationBadges.map((b) => {
            const Icon = badgeIcons[b.icon];
            return (
              <div key={b.label} className="bg-white/90 border border-ink/10 rounded-2xl p-4 flex items-start gap-3.5 shadow-xs hover:shadow-md hover:border-brand-red/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted truncate">{b.label}</span>
                    <Clock className="h-3 w-3 text-amber-600 shrink-0" />
                  </div>
                  <div className="text-sm font-black font-heading text-ink truncate mt-0.5">{b.value}</div>
                  <div className="text-[11px] text-ink-muted truncate">{b.note}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c, idx) => (
            <Reveal key={c.title} delay={idx * 90}>
              <div className="group h-full bg-white rounded-3xl border border-ink/10 hover:border-brand-red/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
                <div className={`h-1.5 w-full bg-gradient-to-r ${c.accent}`} />
                <div className="relative h-56 bg-gradient-to-b from-[#F8F6F2] to-[#EFECE6] p-4 flex items-center justify-center overflow-hidden border-b border-ink/10">
                  {["top-3 left-3 border-t-2 border-l-2 rounded-tl", "top-3 right-3 border-t-2 border-r-2 rounded-tr", "bottom-3 left-3 border-b-2 border-l-2 rounded-bl", "bottom-3 right-3 border-b-2 border-r-2 rounded-br"].map((p) => (
                    <div key={p} className={`absolute w-4 h-4 border-ink/15 pointer-events-none ${p}`} />
                  ))}
                  <div className="relative w-full h-full bg-white rounded-xl shadow-sm border border-black/5 p-2.5 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <CertificatePreview title={c.title} issuer={c.issuer} />
                  </div>
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border bg-white/95 text-amber-800 border-amber-500/25">
                      <FileText className="h-3 w-3" /> Statutory
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white">
                      <Clock className="h-3 w-3" /> Pending
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-brand-red">
                      <Landmark className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{c.issuer}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-ink group-hover:text-brand-red transition-colors leading-snug line-clamp-2">
                      {c.title}
                    </h3>
                    <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-[#F7F3EC] border border-ink/10">
                      <div className="min-w-0 truncate">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted mr-1.5">Reg / Ref:</span>
                        <span className="font-mono text-xs font-bold text-ink">{c.ref}</span>
                      </div>
                      <button type="button" onClick={() => copy(c.ref)} className="text-ink-muted hover:text-brand-red p-1 rounded transition-colors shrink-0" title="Copy Reference Number" aria-label="Copy reference number">
                        {copied === c.ref ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                    <p className="text-xs text-ink-soft leading-relaxed line-clamp-3">{c.desc}</p>
                  </div>
                  <div className="pt-3.5 border-t border-ink/10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setNotice(c.title)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-xl text-xs font-bold border border-ink/15 text-ink hover:bg-[#F7F3EC]"
                    >
                      <Eye className="h-4 w-4" /> View Certificate
                    </button>
                    <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-xl text-xs font-bold bg-brand-red hover:bg-brand-red-dark text-white">
                      <FileText className="h-4 w-4" /> Request Copy
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {notice && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4" onClick={() => setNotice(null)} role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center space-y-3 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Clock className="h-8 w-8 text-amber-500 mx-auto" />
            <h4 className="font-heading font-bold text-ink">{notice}</h4>
            <p className="text-sm text-ink-soft">
              This certificate will be published here once it has been issued to and verified for Sarvam Sankalp Foundation.
            </p>
            <button onClick={() => setNotice(null)} className="h-9 px-5 rounded-full bg-brand-red text-white text-sm font-semibold">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
