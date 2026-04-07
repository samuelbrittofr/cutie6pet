import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "1000+", label: "Happy Pets" },
  { value: "4.9/5", label: "JustDial Rating" },
  { value: "37+", label: "5-Star Reviews" },
  { value: "6+", label: "Expert Groomers" },
];

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [displayValue, setDisplayValue] = useState(() => {
    if (value.includes("/")) return "0.0/5";
    if (value.includes("+")) return "0+";
    return "0";
  });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const rawProgress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeOutCubic(rawProgress);

      if (value.includes("/")) {
        const finalValue = Number.parseFloat(value);
        const currentValue = finalValue * easedProgress;
        setDisplayValue(`${currentValue.toFixed(1)}/5`);
      } else {
        const finalValue = Number.parseInt(value.replace(/\D/g, ""), 10);
        const currentValue = Math.round(finalValue * easedProgress);
        setDisplayValue(value.includes("+") ? `${currentValue}+` : `${currentValue}`);
      }

      if (rawProgress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    const frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <p ref={ref} className="text-3xl md:text-4xl font-bold text-primary-foreground">
      {displayValue}
    </p>
  );
};

const StatsSection = () => (
  <section className="py-12 bg-primary">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <AnimatedNumber value={stat.value} />
            <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
