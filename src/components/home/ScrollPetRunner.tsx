import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const ScrollPetRunner = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const next = total > 0 ? scrollTop / total : 0;
      setProgress(clamp(next, 0, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const travelPx = progress * 206;

  return (
    <div className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-40 pointer-events-none">
      <div className="relative h-64 w-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm">
        <div className="absolute left-1/2 top-3 h-[230px] w-1 -translate-x-1/2 rounded-full bg-white/45" />
        <motion.div
          className="absolute left-1/2 top-3 flex -translate-x-1/2 flex-col items-center gap-2"
          animate={{ y: travelPx }}
          transition={{ type: "spring", stiffness: 150, damping: 22, mass: 0.5 }}
        >
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff7e6] shadow-md"
            animate={{ x: [0, 3, -3, 0] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            aria-label="Running dog"
          >
            <span className="text-lg leading-none">🐶</span>
          </motion.div>
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6ff] shadow-md"
            animate={{ x: [0, -3, 3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            aria-label="Running cat"
          >
            <span className="text-lg leading-none">🐱</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollPetRunner;
