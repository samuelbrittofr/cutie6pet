import { MapPin, Heart, Star, Scissors } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: MapPin, number: "2", label: "Branches in Bangalore" },
  { icon: Heart, number: "1000+", label: "Happy Pets Groomed" },
  { icon: Scissors, number: "6+", label: "Grooming Packages" },
  { icon: Star, number: "4.9/5", label: "Rating on JustDial" },
];

const TrustBadges = () => (
  <section className="relative -mt-16 z-20">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow duration-300"
          >
            <badge.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
              {badge.number}
            </div>
            <p className="text-sm text-muted-foreground">{badge.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
