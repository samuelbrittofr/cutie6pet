import { Sun, Moon, Scissors, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sun,
    title: "Daycare",
    description: "Open-play socialization with trained staff supervision in climate-controlled playrooms.",
    price: "From $38/day",
    path: "/services/daycare",
    iconBg: "bg-amber-light text-amber",
  },
  {
    icon: Moon,
    title: "Boarding",
    description: "Overnight stays in private suites with included playtime and daily photo updates.",
    price: "From $65/night",
    path: "/services/boarding",
    iconBg: "bg-brand-light text-brand-deep",
  },
  {
    icon: Scissors,
    title: "Spa & Grooming",
    description: "Full-service grooming from certified groomers — baths, haircuts, and specialty treatments.",
    price: "From $45",
    path: "/services/grooming",
    iconBg: "bg-success-light text-success",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Professional obedience and behavior programs with certified trainers.",
    price: "From $100/hr",
    path: "/services/training",
    iconBg: "bg-secondary text-coral",
  },
];

const ServicesSection = () => (
  <section className="relative z-20 -mt-20 pb-20">
    <div className="container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              to={service.path}
              className="group block bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/20"
            >
              <div className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-accent font-semibold">{service.price}</span>
                <ArrowRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
