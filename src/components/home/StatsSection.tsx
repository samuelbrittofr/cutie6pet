import { Heart, Award, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Happy Pets Groomed", value: "1000+", icon: Heart },
  { label: "JustDial Rating", value: "4.9/5", icon: Star },
  { label: "Pet-Safe Products", value: "100%", icon: Shield },
  { label: "Expert Groomers", value: "Certified", icon: Award },
];

const StatsSection = () => (
  <section className="py-16 bg-muted">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
