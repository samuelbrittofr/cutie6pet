import { Thermometer, Award, Camera, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroImage from "@/assets/hero-dogs.jpg";

const stats = [
  { label: "Climate Controlled", percentage: 100, icon: Thermometer },
  { label: "Certified Staff", percentage: 100, icon: Award },
  { label: "Daily Photo Updates", percentage: 95, icon: Camera },
  { label: "Repeat Customers", percentage: 92, icon: Heart },
];

const CircularProgress = ({ percentage, icon: Icon, label, delay }: {
  percentage: number;
  icon: React.ElementType;
  label: string;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [animatedValue, setAnimatedValue] = useState(0);
  const size = 140;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();
        const animate = (time: number) => {
          const elapsed = time - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          start = Math.round(eased * percentage);
          setAnimatedValue(start);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }, delay * 150);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  const offset = circumference - (animatedValue / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.15 }}
      className="flex flex-col items-center"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(16 84% 72%)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-100"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-1">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <span className="text-lg font-bold text-white">{animatedValue}%</span>
        </div>
      </div>
      <span className="mt-4 text-sm font-medium text-white/90 uppercase tracking-wider text-center">
        {label}
      </span>
    </motion.div>
  );
};

const StatsSection = () => (
  <section className="relative overflow-hidden py-24">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-brand-deep/85" />
    </div>

    <div className="container relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Happy to welcome you
            <br />
            <span className="font-bold italic">to our circle of friends</span>
          </h2>
          <p className="text-white/70 leading-relaxed">
            Our numbers speak for themselves. Every metric reflects our unwavering commitment to the highest standards of pet care.
          </p>
        </motion.div>
      </div>

      {/* Circular progress stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <CircularProgress
            key={stat.label}
            percentage={stat.percentage}
            icon={stat.icon}
            label={stat.label}
            delay={i}
          />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
