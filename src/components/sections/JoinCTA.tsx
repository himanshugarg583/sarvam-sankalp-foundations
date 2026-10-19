import { Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { DonateLink } from "../ui/DonateLink";

export function JoinCTA() {
  return (
    <section id="join" className="py-16 sm:py-20 bg-cream">
      <div className="container">
        <div
          id="donate"
          className="p-8 sm:p-14 rounded-3xl bg-white border-2 border-brand-red/25 text-ink shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 scroll-mt-28"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-amber/10 blur-2xl" />
          <div className="space-y-3 max-w-xl relative">
            <span className="inline-flex rounded-md px-2 py-0.5 bg-brand-red/10 text-brand-red text-xs font-bold">BE A CHANGEMAKER</span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-ink leading-tight">Together, We Can Transform Millions of Lives.</h2>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              Whether through CSR funding, institutional partnership, volunteering or individual contributions, your support directly
              empowers learners, women&apos;s collectives and community healthcare with {siteConfig.name}.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto relative">
            <DonateLink className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm sm:text-base px-8 h-12 rounded-full shadow-lg w-full sm:w-auto transition-colors">
              <span>Donate Now</span>
              <Heart className="h-4 w-4 fill-current" />
            </DonateLink>
            <a
              href={siteConfig.partnerUrl === "#join" ? "#contact" : siteConfig.partnerUrl}
              className="inline-flex items-center justify-center border-2 border-ink/20 hover:bg-ink/5 text-ink font-bold text-sm sm:text-base px-7 h-12 rounded-full w-full sm:w-auto bg-white"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
