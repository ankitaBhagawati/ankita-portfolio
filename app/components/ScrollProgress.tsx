"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const onScroll = () => {
      const st = document.documentElement.scrollTop;
      const sh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(st / sh);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    spring.set(progress);
  }, [progress, spring]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[300] h-[2px] origin-left"
      style={{
        scaleX: spring,
        background: "linear-gradient(90deg, #5b8fff, #a78bfa, #34d399)",
      }}
    />
  );
}
