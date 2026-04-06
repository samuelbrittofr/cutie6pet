import { Scissors, Bath, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bath,
    title: "Basic Grooming",
    description: "Bathing, blow-drying, ear cleaning, eye cleaning, nail clipping, and paw cleaning.",
    price: "From ₹1,000",
    path: "/pricing",
  },
  {
    icon: Scissors,
    title: "Hair Cut Package",
    description: "Full haircut with styling, bathing, blow-drying, ear & eye cleaning, nail clipping, and teeth cleaning.",
    price: "From ₹1,500",
    path: "/pricing",
  },
  {
    icon: Sparkles,
    title: "Cat Grooming",
    description: "Specialized grooming for cats — gentle handling, bathing, trimming, and paw care.",
    price: "From ₹1,000",
    path: "/pricing",
  },
  {
    icon: Heart,
    title: "Full Spa Treatment",
    description: "Premium pampering with de-shedding, teeth cleaning, and all grooming essentials.",
    price: "From ₹1,800",
    path: "/pricing",
  },
];

const ServicesSection = () => (
  <section className="py-16">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Services</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">Professional grooming for dogs & cats of all breeds</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Link
              to={service.path}
              className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold text-sm">{service.price}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
