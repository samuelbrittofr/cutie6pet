import { motion } from "framer-motion";

const stats = [
  { value: "1000+", label: "Happy Pets" },
  { value: "4.9/5", label: "JustDial Rating" },
  { value: "37+", label: "5-Star Reviews" },
  { value: "6+", label: "Expert Groomers" },
];

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
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
            <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
