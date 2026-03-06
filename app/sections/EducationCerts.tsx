"use client";

import { resume } from "@/lib/data";
import Reveal from "../components/Reveal";

export default function EducationCerts() {
  return (
    <>
      <section id="certifications" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Reveal><p className="section-label text-[0.68rem] tracking-[0.22em] uppercase font-bold mb-2">Credentials</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title font-display font-extrabold tracking-[-0.03em] leading-[1.1] mb-10"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
              <span className="gradient-text-blue">Certifications</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resume.certifications.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.07}>
                <div className="card flex gap-3 items-start p-5 rounded-xl">
                  <span className="text-xl flex-shrink-0">{c.icon}</span>
                  <span className="text-primary text-[0.83rem] font-medium leading-snug">{c.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Reveal><p className="section-label text-[0.68rem] tracking-[0.22em] uppercase font-bold mb-2">Academic Background</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title font-display font-extrabold tracking-[-0.03em] leading-[1.1] mb-10"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
              <span className="gradient-text-blue">Education</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.1}>
                <div className="card p-6 rounded-2xl">
                  <div className="text-primary font-bold text-[0.94rem] mb-1.5">{e.degree}</div>
                  <div className="text-sm text-[#5b8fff] font-medium mb-1.5">{e.school}</div>
                  <div className="text-muted text-xs">{e.period}</div>
                  <div className="text-muted text-xs mt-0.5">{e.field}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}