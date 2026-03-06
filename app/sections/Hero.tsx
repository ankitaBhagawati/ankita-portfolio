"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { resume } from "@/lib/data";
import ResumeModal from "../components/ResumeModal";
import { useState } from "react";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-12 w-full">
        <div className="py-20 max-w-3xl">

          {/* Badge */}

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="section-title font-display font-extrabold tracking-[-0.04em] leading-[1.02] mb-3"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)" }}
          >
            Ankita<br />
            <span className="gradient-text">Bhagawati</span>
          </motion.h1>

          {/* Nickname */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="text-sm text-[#a78bfa] italic mb-3 -mt-1"
          >
            ✨ {resume.nicknameLine}
          </motion.p>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.15, duration: 0.6 }}
            className="text-secondary mb-5 font-medium"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
          >
            Full Stack Developer &nbsp;·&nbsp; .NET &nbsp;·&nbsp; Angular &nbsp;·&nbsp; React &nbsp;·&nbsp; SQL
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.65 }}
            className="text-body text-[0.93rem] leading-[1.78] mb-10 max-w-xl"
          >
            {resume.summary}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            {/* Primary — always readable */}
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(91,143,255,0.38)]"
              style={{
                background: "linear-gradient(135deg,#5b8fff,#a78bfa)",
                boxShadow: "0 4px 28px rgba(91,143,255,0.25)",
              }}
            >
              <ArrowDown size={16} />
              View Experience
            </a>

            {/* Outline — uses CSS variables so it works in both themes */}
            <button
              onClick={() => setModalOpen(true)}
              className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#5b8fff";
                (e.currentTarget as HTMLButtonElement).style.color = "#5b8fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              }}
            >
              <FileText size={16} />
              View Resume
            </button>
          </motion.div>
        </div>
      </div>

      <ResumeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}