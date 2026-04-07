import { useEffect, useRef, useState } from "react";
import { MapPin, Heart, Star, Scissors } from "lucide-react";
import { motion, useInView } from "framer-motion";

const badges = [
  { icon: MapPin, number: "1", label: "Branch in Bangalore" },
  { icon: Heart, number: "1000+", label: "Happy Pets Groomed" },
  { icon: Scissors, number: "6+", label: "Grooming Packages" },
  { icon: Star, number: "4.9/5", label: "Rating on JustDial" },
];

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
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
    <div ref={ref} className="text-2xl font-bold text-foreground mb-0.5">
      {displayValue}
    </div>
  );
};

const TrustBadges = () => (
  <section className="py-12 border-b border-border">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="text-center"
          >
            <badge.icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <AnimatedNumber value={badge.number} />
            <p className="text-xs text-muted-foreground">{badge.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
