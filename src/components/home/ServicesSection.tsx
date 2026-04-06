import { Scissors, Bath, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bath,
    title: "Basic Grooming",
    description: "Bathing, blow-drying, ear cleaning, eye cleaning, nail clipping, and paw cleaning.",
    price: "From ₹1,000",
    path: "/services",
    iconBg: "bg-amber-light text-amber",
  },
  {
    icon: Scissors,
    title: "Hair Cut Package",
    description: "Full haircut with styling, bathing, blow-drying, ear & eye cleaning, nail clipping, and teeth cleaning.",
    price: "From ₹1,800",
    path: "/services",
    iconBg: "bg-brand-light text-brand-deep",
  },
  {
    icon: Sparkles,
    title: "Cat Grooming",
    description: "Specialized grooming for cats — gentle handling, bathing, trimming, and paw care by experienced groomers.",
    price: "From ₹1,000",
    path: "/services",
    iconBg: "bg-success-light text-success",
  },
  {
    icon: Heart,
    title: "Spa Treatments",
    description: "Pampering spa experiences including de-shedding, teeth cleaning, and specialty treatments.",
    price: "Custom pricing",
    path: "/services",
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
