"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { resume } from "@/lib/data";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">

        <Reveal><p className="text-[0.68rem] tracking-[0.22em] text-[#5b8fff] uppercase font-bold mb-2">What I've Built</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[1.1] mb-12"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
            Featured <span className="gradient-text-blue">Projects</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resume.projects.map((proj, i) => (
            <Reveal key={proj.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 12px 55px rgba(91,143,255,0.1)" }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.04]
                  p-6 flex flex-col hover:border-[rgba(91,143,255,0.32)] transition-colors duration-300 relative overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(91,143,255,0.03)] to-[rgba(167,139,250,0.03)] opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-[1rem] text-white leading-snug flex-1">{proj.title}</h3>
                    <span className="text-[0.68rem] text-white/35 ml-3 flex-shrink-0 text-right">{proj.date}</span>
                  </div>

                  {proj.association && (
                    <p className="text-[0.72rem] text-[#a78bfa] mb-2">{proj.association}</p>
                  )}

                  <p className="text-[0.82rem] text-white/55 leading-relaxed mb-3 flex-1">{proj.description}</p>

                  {proj.bullets.length > 0 && (
                    <ul className="flex flex-col gap-1.5 mb-3">
                      {proj.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2 text-[0.78rem] text-white/50 leading-relaxed">
                          <span className="text-[#5b8fff] flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.stack.map((s) => (
                      <span key={s}
                        className="px-2 py-0.5 rounded text-[0.68rem] font-medium
                          bg-[rgba(91,143,255,0.1)] border border-[rgba(91,143,255,0.2)] text-[#5b8fff]">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(proj.github || proj.demo) && (
                    <div className="flex gap-2 mt-auto">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.75rem] text-[#a78bfa]
                            border border-[rgba(167,139,250,0.25)] rounded px-2.5 py-1
                            hover:bg-[rgba(167,139,250,0.1)] hover:text-white transition-all">
                          <Github size={12} /> GitHub
                        </a>
                      )}
                      {proj.demo && proj.demo !== "#" && (
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.75rem] text-[#a78bfa]
                            border border-[rgba(167,139,250,0.25)] rounded px-2.5 py-1
                            hover:bg-[rgba(167,139,250,0.1)] hover:text-white transition-all">
                          <ExternalLink size={12} /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
