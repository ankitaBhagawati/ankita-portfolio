"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const [visible, setVisible] = useState(true);
  const [barFull, setBarFull] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBarFull(true), 80);
    const t2 = setTimeout(() => setVisible(false), 1750);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="fixed inset-0 z-[9000] flex flex-col items-center justify-center gap-8"
          style={{ background: "#060b18" }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="w-[88px] h-[88px] rounded-full flex items-center justify-center
              font-display text-[2rem] font-extrabold text-white animate-pulse-glow"
            style={{ background: "linear-gradient(135deg, #5b8fff, #a78bfa)" }}
          >
            AB
          </motion.div>

          {/* Bar */}
          <div className="w-[180px] h-[2px] rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: barFull ? "100%" : "0%",
                transition: "width 1.3s cubic-bezier(0.4,0,0.2,1)",
                background: "linear-gradient(90deg, #5b8fff, #a78bfa)",
              }}
            />
          </div>

          <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-medium">
            Loading Portfolio
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
