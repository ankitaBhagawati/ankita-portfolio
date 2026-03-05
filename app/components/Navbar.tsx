"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const ids = links.map((l) => l.href.replace("#", ""));
      let cur = "hero";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setDark((d) => {
      document.body.classList.toggle("light", d);
      return !d;
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-x-0 top-0 z-50 h-16 flex items-center justify-between px-4 md:px-12
          backdrop-blur-xl bg-[rgba(6,11,24,0.65)] border-b border-white/[0.08]
          dark:bg-[rgba(6,11,24,0.65)]"
      >
        {/* Logo: avatar + name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group bg-transparent border-none p-0 cursor-pointer"
        >
          {/* Glowing avatar ring */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5b8fff] to-[#a78bfa]
              blur-[7px] opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative w-9 h-9 rounded-full p-[2px]
              bg-gradient-to-br from-[#5b8fff] to-[#a78bfa]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0b1120] flex items-center justify-center">
                <img
                  src="/bagwitty.jpeg"
                  alt="Ankita Bhagawati"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                {/* Always-visible initials fallback layer */}
                <span className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#5b8fff] to-[#a78bfa]
                  flex items-center justify-center text-[0.62rem] font-extrabold text-white -z-10">
                  AB
                </span>
              </div>
            </div>
          </div>

          {/* Name + subtitle */}
          <div className="flex flex-col leading-none text-left">
            <span className="gradient-text-blue font-display font-extrabold text-[0.98rem] tracking-tight leading-none">
              Ankita Bhagawati
            </span>
            <span className="text-[0.62rem] text-white/40 font-medium tracking-[0.04em] mt-[3px]">
              Full Stack Developer
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200",
                active === l.href.replace("#", "")
                  ? "text-white bg-white/10"
                  : "text-white/50 hover:text-white hover:bg-white/10"
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/50
              hover:text-white hover:bg-white/10 transition-all"
          >
            {dark ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            className="md:hidden p-1.5 text-white/70 hover:text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#060b18] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-5 right-6 text-white/60 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-bold text-white hover:gradient-text transition-all"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}