"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/data";
import Reveal from "../components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">

        <Reveal><p className="text-[0.68rem] tracking-[0.22em] text-[#5b8fff] uppercase font-bold mb-2">Technical Arsenal</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[1.1] mb-12"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
            Skills &amp; <span className="gradient-text-blue">Technologies</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resume.skills.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 0.08}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6
                hover:border-[rgba(91,143,255,0.25)] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase text-[#5b8fff]">
                  <span>{group.icon}</span>
                  {group.group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.06, backgroundColor: "rgba(91,143,255,0.15)" }}
                      transition={{ duration: 0.18 }}
                      className="px-3 py-1.5 rounded-md text-[0.78rem] text-white/60
                        bg-white/[0.06] border border-white/[0.1] cursor-default
                        hover:border-[rgba(91,143,255,0.35)] hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
