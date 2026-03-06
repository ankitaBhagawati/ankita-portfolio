"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { resume } from "@/lib/data";

interface Props { open: boolean; onClose: () => void; }

export default function ResumeModal({ open, onClose }: Props) {
  const [prankIdx, setPrankIdx] = useState(0);
  const [prankText, setPrankText] = useState("click to reveal");
  const [pranking, setPranking] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const doPrank = () => {
    if (pranking) return;
    setPranking(true);
    setPrankText(resume.phonePranks[prankIdx % resume.phonePranks.length]);
    setPrankIdx((p) => p + 1);
    setTimeout(() => { setPrankText("click to reveal"); setPranking(false); }, 2400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(14px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-3xl max-h-[93vh] overflow-y-auto rounded-2xl
              border border-white/15 p-7"
            style={{ background: "#0b1120" }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
              <div>
                <h2 className="font-display font-extrabold text-3xl tracking-tight text-white mb-1">
                  {resume.name}
                </h2>
                <p className="text-sm text-[#5b8fff] font-medium mb-3">
                  Full Stack Developer | .NET · Angular · React · SQL
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-white/50">
                  <span>📍 {resume.location}</span>
                  <a href={`mailto:${resume.email}`} className="hover:text-[#5b8fff] transition-colors">✉ {resume.email}</a>
                  <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#5b8fff] transition-colors">🔗 LinkedIn</a>
                  <a href={resume.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#5b8fff] transition-colors">⬡ GitHub</a>
                  <a href={resume.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">📸 @ankita_bagwitty</a>
                  <a href={resume.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#5b8fff] transition-colors">𝕏 @SheIsNotBoring</a>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0 items-start">
                <a href="/Ankita_Bhagawati_Resume.pdf" download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold
                    text-white hover:-translate-y-0.5 transition-all"
                  style={{ background: "linear-gradient(135deg,#5b8fff,#a78bfa)" }}>
                  <Download size={13} /> Download
                </a>
                <button onClick={onClose}
                  className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF embed */}
            <div className="w-full h-[520px] rounded-xl overflow-hidden border border-white/10 mb-2">
              <iframe
                src="/Ankita_Bhagawati_Resume.pdf"
                className="w-full h-full border-0"
                title="Ankita Bhagawati Resume"
              />
            </div>
            <p className="text-center text-xs text-white/35">
              Can&apos;t see the PDF?{" "}
              <a href="/Ankita_Bhagawati_Resume.pdf" download className="text-[#5b8fff] hover:underline">
                Download it directly ↓
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}