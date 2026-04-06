import { MapPin, Heart, Star, Scissors } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: MapPin, number: "2", label: "Branches in Bangalore" },
  { icon: Heart, number: "1000+", label: "Happy Pets Groomed" },
  { icon: Scissors, number: "6+", label: "Grooming Packages" },
  { icon: Star, number: "4.9/5", label: "Rating on JustDial" },
];

const TrustBadges = () => (
  <section className="py-12 border-b border-border">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="text-center"
          >
            <badge.icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-0.5">{badge.number}</div>
            <p className="text-xs text-muted-foreground">{badge.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
