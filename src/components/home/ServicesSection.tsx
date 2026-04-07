import { Scissors, Bath, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import flatDogSmall from "@/assets/flat-dog-small.png";
import flatDogHaircut from "@/assets/flat-dog-haircut.png";
import flatDogLarge from "@/assets/flat-dog-large.png";
import flatCatBasic from "@/assets/flat-cat-basic.png";

type Service = {
  icon: typeof Bath;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  path: string;
  image: string;
};

const services: Service[] = [
  {
    icon: Bath,
    title: "Basic Grooming",
    description: "Bathing, blow-drying, ear cleaning, eye cleaning, nail clipping, and paw cleaning.",
    price: 1200,
    originalPrice: 1500,
    discountBadge: "20% OFF",
    path: "/pricing",
    image: flatDogSmall,
  },
  {
    icon: Scissors,
    title: "Hair Cut Package",
    description: "Full haircut with styling, bathing, blow-drying, ear and eye cleaning, nail clipping, and teeth cleaning.",
    price: 1800,
    originalPrice: 2200,
    path: "/pricing",
    image: flatDogHaircut,
  },
  {
    icon: Sparkles,
    title: "Cat Grooming",
    description: "Specialized grooming for cats - gentle handling, bathing, trimming, and paw care.",
    price: 1000,
    path: "/pricing",
    image: flatCatBasic,
  },
  {
    icon: Heart,
    title: "Large Breed Grooming",
    description: "Complete care for large dogs with bathing, blow-drying, brushing, and full hygiene essentials.",
    price: 1950,
    originalPrice: 2500,
    discountBadge: "22% OFF",
    path: "/pricing",
    image: flatDogLarge,
  },
];

const ServicesSection = () => (
  <section className="py-16">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Offer</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2">Our Services</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Professional grooming for dogs and cats of all breeds
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Link
              to={service.path}
              className="group flex h-full flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 relative"
            >
              {service.discountBadge && (
                <span className="absolute top-3 left-3 z-10 bg-amber text-amber-foreground text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                  {service.discountBadge}
                </span>
              )}
              <div className="h-40 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-32 h-32 object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <service.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-primary font-semibold text-sm">
                      From {"\u20B9"}
                      {service.price.toLocaleString("en-IN")}
                    </span>
                    {service.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {"\u20B9"}
                        {service.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
