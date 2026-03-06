"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Twitter, Phone } from "lucide-react";
import { resume } from "@/lib/data";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [prankIdx, setPrankIdx] = useState(0);
  const [prankText, setPrankText] = useState("📞 Click for number");
  const [pranking, setPranking] = useState(false);

  const triggerPrank = () => {
    if (pranking) return;
    setPranking(true);
    setPrankText(resume.phonePranks[prankIdx % resume.phonePranks.length]);
    setPrankIdx((p) => p + 1);
    setTimeout(() => { setPrankText("📞 Click for number"); setPranking(false); }, 2400);
  };

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <Reveal>
          <div className="contact-box max-w-2xl mx-auto text-center rounded-3xl p-10 md:p-16">
            <h2 className="section-title font-display font-extrabold tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
              Let&apos;s Build <span className="gradient-text-blue">Something</span> Great
            </h2>
            <p className="text-body text-[0.93rem] leading-relaxed mb-8">
              Open to full-time roles, collaborations &amp; exciting projects.<br />
              Based in Assam, India
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`mailto:${resume.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white
                  hover:-translate-y-0.5 transition-all hover:shadow-[0_8px_38px_rgba(91,143,255,0.35)]"
                style={{ background: "linear-gradient(135deg,#5b8fff,#a78bfa)", boxShadow: "0 4px 28px rgba(91,143,255,0.25)" }}>
                <Mail size={15} />{resume.email}
              </a>
              {[
                { href: resume.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: resume.github, icon: Github, label: "GitHub" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                    btn-outline hover:border-[#5b8fff] hover:text-[#5b8fff] hover:-translate-y-0.5 transition-all">
                  <Icon size={15} />{label}
                </a>
              ))}
              <a href={resume.instagram} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                  btn-outline hover:border-[#e1306c] hover:text-[#e1306c] hover:-translate-y-0.5 transition-all">
                <Instagram size={15} />@ankita_bagwitty
              </a>
              <a href={resume.twitter} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                  btn-outline hover:border-[#5b8fff] hover:text-[#5b8fff] hover:-translate-y-0.5 transition-all">
                <Twitter size={15} />@SheIsNotBoring
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}