"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { resume } from "@/lib/data";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <Reveal><p className="section-label text-[0.68rem] tracking-[0.22em] uppercase font-bold mb-2">What I&apos;ve Built</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title font-display font-extrabold tracking-[-0.03em] leading-[1.1] mb-12"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
            Featured <span className="gradient-text-blue">Projects</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resume.projects.map((proj, i) => (
            <Reveal key={proj.title} delay={(i % 3) * 0.08}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}
                className="card h-full rounded-2xl p-6 flex flex-col hover:shadow-[0_12px_55px_rgba(91,143,255,0.1)]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-primary font-bold text-[1rem] leading-snug flex-1">{proj.title}</h3>
                  <span className="text-muted text-[0.68rem] ml-3 flex-shrink-0 text-right">{proj.date}</span>
                </div>
                {proj.association && <p className="text-[0.72rem] text-[#a78bfa] mb-2">{proj.association}</p>}
                <p className="text-body text-[0.82rem] leading-relaxed mb-3 flex-1">{proj.description}</p>
                {proj.bullets.length > 0 && (
                  <ul className="flex flex-col gap-1.5 mb-3">
                    {proj.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-[0.78rem] text-body leading-relaxed">
                        <span className="bullet-arrow flex-shrink-0">▸</span>{b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.stack.map((s) => (
                    <span key={s} className="stack-tag px-2 py-0.5 rounded text-[0.68rem] font-medium">{s}</span>
                  ))}
                </div>
                {(proj.github || proj.demo) && (
                  <div className="flex gap-2 mt-auto">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.75rem] text-[#a78bfa]
                          border border-[rgba(167,139,250,0.25)] rounded px-2.5 py-1
                          hover:bg-[rgba(167,139,250,0.1)] hover:text-[#a78bfa] transition-all">
                        <Github size={12} />GitHub
                      </a>
                    )}
                    {proj.demo && proj.demo !== "#" && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.75rem] text-[#a78bfa]
                          border border-[rgba(167,139,250,0.25)] rounded px-2.5 py-1
                          hover:bg-[rgba(167,139,250,0.1)] hover:text-[#a78bfa] transition-all">
                        <ExternalLink size={12} />Live Demo
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}