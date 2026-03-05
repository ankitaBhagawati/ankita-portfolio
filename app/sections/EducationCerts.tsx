"use client";

import { resume } from "@/lib/data";
import Reveal from "../components/Reveal";

export default function EducationCerts() {
  return (
    <>
      {/* CERTIFICATIONS */}
      <section id="certifications" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Reveal><p className="text-[0.68rem] tracking-[0.22em] text-[#5b8fff] uppercase font-bold mb-2">Credentials</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[1.1] mb-10"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
              <span className="gradient-text-blue">Certifications</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resume.certifications.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.07}>
                <div className="flex gap-3 items-start p-5 rounded-xl
                  border border-white/[0.08] bg-white/[0.04]
                  hover:border-[rgba(91,143,255,0.28)] transition-colors duration-300">
                  <span className="text-xl flex-shrink-0">{c.icon}</span>
                  <span className="text-[0.83rem] font-medium text-white/80 leading-snug">{c.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Reveal><p className="text-[0.68rem] tracking-[0.22em] text-[#5b8fff] uppercase font-bold mb-2">Academic Background</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[1.1] mb-10"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
              <span className="gradient-text-blue">Education</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.04]
                  hover:border-[rgba(91,143,255,0.25)] transition-colors duration-300">
                  <div className="font-bold text-[0.94rem] text-white mb-1.5">{e.degree}</div>
                  <div className="text-sm text-[#5b8fff] font-medium mb-1.5">{e.school}</div>
                  <div className="text-xs text-white/40">{e.period}</div>
                  <div className="text-xs text-white/40 mt-0.5">{e.field}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
