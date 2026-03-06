"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Zap } from "lucide-react";
import { resume } from "@/lib/data";
import { getLiveDuration } from "@/lib/utils";
import Reveal from "../components/Reveal";

export default function Experience() {
  const [open, setOpen] = useState<string>("doodleblue");

  return (
    <section id="experience" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">

        <Reveal>
          <p className="section-label text-[0.68rem] tracking-[0.22em] uppercase font-bold mb-2">Career Timeline</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title font-display font-extrabold tracking-[-0.03em] leading-[1.1] mb-12"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
            Work <span className="gradient-text-blue">Experience</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="impact-strip flex flex-wrap gap-2 items-center mb-14 p-4 rounded-xl">
            <span className="text-[0.65rem] tracking-[0.2em] text-[#5b8fff] uppercase font-bold mr-2 whitespace-nowrap">
              ⚡ Top Impact
            </span>
            {resume.topImpact.map((item) => (
              <span key={item} className="impact-tag inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs">
                <Zap size={10} className="text-[#5b8fff]" />{item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {resume.experience.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.08}>
              <div className="card rounded-2xl overflow-hidden hover:shadow-[0_6px_36px_rgba(91,143,255,0.08)]">
                <button className="w-full text-left p-6 flex items-center gap-4 bg-transparent"
                  onClick={() => setOpen(open === exp.id ? "" : exp.id)}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#5b8fff,#a78bfa)" }}>
                    {exp.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-primary font-bold text-[0.97rem] mb-0.5">{exp.role}</div>
                    <div className="text-sm text-[#5b8fff] font-medium mb-1.5">
                      {exp.company}
                      {exp.location && (
                        <span className="text-muted font-normal ml-2 inline-flex items-center gap-1 text-xs">
                          <MapPin size={11} />{exp.location}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded text-[0.68rem] font-medium bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.3)] text-[#34d399]">
                          ● Current
                        </span>
                      )}
                      <span className="badge px-2 py-0.5 rounded text-[0.68rem]">{exp.period}</span>
                      <span className="badge px-2 py-0.5 rounded text-[0.68rem]">
                        {exp.current && (exp as typeof exp & { startDate?: string }).startDate
                          ? getLiveDuration((exp as typeof exp & { startDate?: string }).startDate!)
                          : exp.duration}
                      </span>
                    </div>
                  </div>
                  <ChevronDown size={18}
                    className={`text-muted flex-shrink-0 transition-transform duration-300 ${open === exp.id ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {open === exp.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden">
                      <div className="px-6 pb-6" style={{ borderTop: "1px solid var(--border)" }}>
                        {exp.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-4 mb-4">
                            {exp.metrics.map((m) => (
                              <span key={m} className="metric-chip px-2.5 py-1 rounded-md text-xs font-bold">{m}</span>
                            ))}
                          </div>
                        )}
                        <ul className="flex flex-col gap-3 pt-3">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-3 text-[0.86rem] text-body leading-relaxed">
                              <span className="bullet-arrow flex-shrink-0 mt-0.5 text-xs">→</span>{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}