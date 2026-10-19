"use client";

import { useMemo, useState } from "react";
import { Building, Layers, Map as MapIcon, MapPin, Target, UserCheck, Users } from "lucide-react";
import { INDIA_OUTLINE, INDIA_STATES, INDIA_VIEWBOX } from "@/data/indiaMap";
import { reachStates, reachSummary, type ReachStatus } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";

const statusStyle: Record<ReachStatus, { fill: string; label: string; badge: string }> = {
  hq: { fill: "#b91c1c", label: "Head Office", badge: "bg-red-700" },
  pilot: { fill: "#d97706", label: "Pilot Region", badge: "bg-amber-600" },
  planned: { fill: "#fcd9a8", label: "Planned Expansion", badge: "bg-emerald-600" },
};

type Tab = "map" | "regions";

export function Reach() {
  const [selected, setSelected] = useState("Uttar Pradesh");
  const [hovered, setHovered] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("map");

  const info = reachStates[selected];
  const entries = useMemo(() => Object.entries(reachStates), []);

  return (
    <section id="reach" className="py-16 sm:py-24 bg-sand border-t border-ink/10">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Our Reach & Pan-India Footprint"
          title="Building Communities Across India"
          description="Explore where Sarvam Sankalp Foundation is starting its work and the states we aim to reach next. Click any highlighted state to see its focus areas."
        />

        <div className="rounded-3xl border border-slate-200/80 bg-white shadow-card overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-200/60 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-700 text-white shadow-soft">
                <MapIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-heading font-extrabold text-base sm:text-lg text-slate-900 flex flex-wrap items-center gap-2">
                  SSF India Footprint Map
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> Placeholder Data
                  </span>
                </div>
                <div className="text-xs text-slate-500">Interactive state map — update locations in <code>src/data/content.ts</code></div>
              </div>
            </div>
            <div className="flex p-1 bg-slate-100 rounded-xl text-xs font-semibold">
              {(["map", "regions"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${tab === t ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
                >
                  {t === "map" ? "Interactive Map" : `Regions (${entries.length})`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-200/60 border-b border-slate-200/60 bg-slate-50/60 text-center py-3">
            {reachSummary.map((s) => (
              <div key={s.label} className="p-2">
                <div className={`text-xl sm:text-2xl font-heading font-extrabold ${s.color}`}>{s.value}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-6 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative flex flex-col justify-between rounded-3xl bg-slate-50/80 border border-slate-200/80 p-4 shadow-inner overflow-hidden">
              {tab === "map" ? (
                <div className="relative w-full max-w-[520px] mx-auto">
                  <svg viewBox={INDIA_VIEWBOX} className="w-full h-auto" role="img" aria-label="Map of India showing SSF regions">
                    <path d={INDIA_OUTLINE} fill="#f1ece6" stroke="#9a8f86" strokeWidth={1.2} />
                    {INDIA_STATES.map((s) => {
                      const st = reachStates[s.name]?.status;
                      const active = s.name === selected;
                      const fill = st ? statusStyle[st].fill : "#f8f5f1";
                      return (
                        <path
                          key={s.name}
                          d={s.d}
                          fill={active ? "#7f1d1d" : hovered === s.name && st ? "#ea580c" : fill}
                          stroke="#fff"
                          strokeWidth={active ? 1.6 : 0.8}
                          className={st ? "cursor-pointer transition-colors duration-200" : ""}
                          onMouseEnter={() => setHovered(s.name)}
                          onMouseLeave={() => setHovered(null)}
                          onClick={() => st && setSelected(s.name)}
                        >
                          <title>{`${s.name}${st ? ` — ${statusStyle[st].label}` : ""}`}</title>
                        </path>
                      );
                    })}
                    {INDIA_STATES.filter((s) => reachStates[s.name]?.status === "hq").map((s) => (
                      <g key={`pin-${s.name}`} pointerEvents="none">
                        <circle cx={s.cx} cy={s.cy} r={12} fill="#b91c1c" opacity={0.25}>
                          <animate attributeName="r" values="8;18;8" dur="2.4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx={s.cx} cy={s.cy} r={5} fill="#fff" stroke="#b91c1c" strokeWidth={3} />
                      </g>
                    ))}
                  </svg>
                  {hovered && (
                    <div className="absolute top-2 left-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-lg pointer-events-none">
                      {hovered}
                      {reachStates[hovered] ? ` · ${statusStyle[reachStates[hovered].status].label}` : ""}
                    </div>
                  )}
                </div>
              ) : (
                <ul className="grid sm:grid-cols-2 gap-2 max-h-[520px] overflow-y-auto">
                  {entries.map(([name, r]) => (
                    <li key={name}>
                      <button
                        onClick={() => {
                          setSelected(name);
                          setTab("map");
                        }}
                        className={`w-full text-left p-3 rounded-xl border bg-white hover:border-red-300 transition-colors ${
                          selected === name ? "border-red-500" : "border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-sm text-slate-900">{name}</span>
                          <span className={`text-[10px] text-white px-2 py-0.5 rounded ${statusStyle[r.status].badge}`}>
                            {statusStyle[r.status].label}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1">{r.focus.join(" · ")}</div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-semibold text-slate-500 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/60 shadow-xs mt-3">
                {(Object.keys(statusStyle) as ReachStatus[]).map((k) => (
                  <div key={k} className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full inline-block shadow-xs" style={{ background: statusStyle[k].fill }} />
                    {statusStyle[k].label}
                  </div>
                ))}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full inline-block bg-[#f8f5f1] border border-slate-300" /> Future
                </div>
              </div>
            </div>

            {info && (
              <div key={selected} className="lg:col-span-5 space-y-4 animate-fade-up">
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-red-50/80 to-slate-50/50 border border-red-500/20 shadow-xs space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-red-700">
                        {statusStyle[info.status].label}
                      </span>
                      <h3 className="text-2xl font-heading font-extrabold text-slate-900 mt-0.5">{selected}</h3>
                      <div className="text-xs text-slate-500">{info.hindi}</div>
                    </div>
                    <span className={`rounded-md px-2 py-0.5 text-white text-[10px] font-medium ${statusStyle[info.status].badge}`}>
                      {info.status === "hq" ? "Head Office" : info.status === "pilot" ? "Pilot" : "Planned"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Layers, label: "Focus Areas", value: String(info.focus.length), note: "Program streams" },
                      { icon: Target, label: "Stage", value: statusStyle[info.status].label, note: "Current status", small: true },
                      { icon: Users, label: "Volunteers", value: "TBU", note: "To be updated" },
                      { icon: Building, label: "Centres", value: "TBU", note: "To be updated" },
                    ].map((c) => (
                      <div key={c.label} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-0.5">
                        <div className="text-xs text-slate-500 flex items-center gap-1">
                          <c.icon className="h-3.5 w-3.5" /> {c.label}
                        </div>
                        <div className={`font-heading font-extrabold text-slate-900 ${c.small ? "text-sm pt-1 text-emerald-600" : "text-2xl"}`}>
                          {c.value}
                        </div>
                        <div className="text-[10px] text-slate-500">{c.note}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 text-xs">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-red-700" /> Focus Programs:
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {info.focus.map((f) => (
                        <span key={f} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px] font-medium border border-slate-200/60">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 space-y-1 text-xs">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <UserCheck className="h-3.5 w-3.5 text-red-700" /> Regional Coordinator
                    </div>
                    <div className="text-slate-500 pl-5 font-medium">To be appointed (placeholder)</div>
                  </div>
                  <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href="#join"
                      className="sm:flex-1 inline-flex items-center justify-center px-4 bg-red-700 hover:bg-red-800 text-white font-heading font-semibold rounded-2xl text-xs h-10 shadow-xs"
                    >
                      Volunteer in {selected} →
                    </a>
                    <a
                      href="#partners"
                      className="inline-flex items-center justify-center px-4 border border-slate-200 bg-white hover:bg-slate-50 font-heading font-semibold rounded-2xl text-xs h-10"
                    >
                      Partner Here
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
