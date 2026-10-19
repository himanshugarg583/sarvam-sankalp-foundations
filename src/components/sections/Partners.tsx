import {
  Building2,
  Cpu,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  House,
  Landmark,
  Megaphone,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import { partnerSlots } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<(typeof partnerSlots)[number]["icon"], LucideIcon> = {
  Landmark,
  Building2,
  GraduationCap,
  HandHeart,
  Stethoscope,
  Cpu,
  Users,
  HeartHandshake,
  Megaphone,
  House,
};

export function PartnerCard({ slot, alt }: { slot: (typeof partnerSlots)[number]; alt?: boolean }) {
  const Icon = icons[slot.icon];
  return (
    <a
      href="#join"
      className="bg-white border border-[#1A18151A] rounded-2xl px-4 py-3 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-brand-red/40 transition-all h-28 w-56 shrink-0 select-none group"
    >
      <div className="h-10 w-full flex items-center justify-center mb-1">
        <span className="h-9 w-9 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center group-hover:scale-105 transition-transform">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <span className="font-heading font-bold text-xs text-ink truncate w-full">{slot.name}</span>
      <div className="flex items-center gap-1.5 mt-1">
        <span
          className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
            alt ? "text-brand-amber bg-brand-amber/10" : "text-brand-red bg-brand-red/10"
          }`}
        >
          {slot.type}
        </span>
        <span className="text-[9px] text-ink-muted truncate max-w-[85px]">{slot.note}</span>
      </div>
    </a>
  );
}

export function Partners() {
  const row = [...partnerSlots, ...partnerSlots];
  return (
    <section id="partners" className="py-16 sm:py-24 bg-cream border-t border-ink/10 overflow-hidden">
      <div className="container mb-12">
        <SectionHeading
          eyebrow="Partners & Collaborators"
          title="Change Happens Together"
          description="Every school transformed, every woman skilled and every community empowered is possible only with partners. SSF is building alliances across government, CSR, academia and civil society — your organisation could be next."
        />
      </div>
      <div className="mb-4 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-cream to-transparent z-10" />
        <div className="flex w-max gap-4 py-2 animate-marquee marquee-track" style={{ ["--marquee-duration" as string]: "50s" }}>
          {row.map((p, i) => (
            <PartnerCard key={`${p.name}-${i}`} slot={p} alt={i % 3 === 2} />
          ))}
        </div>
      </div>
      <p className="container text-center text-[11px] text-ink-muted mt-6">
        Partner categories shown are collaboration areas SSF is inviting — not existing endorsements.{" "}
        <a href="#join" className="text-brand-red font-semibold hover:underline">
          Become a partner →
        </a>
      </p>
    </section>
  );
}
