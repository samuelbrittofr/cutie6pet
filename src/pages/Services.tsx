import { Link } from "react-router-dom";
import { Scissors, Bath, Sparkles, Check, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import grooming4 from "@/assets/grooming-4.jpg";
import grooming5 from "@/assets/grooming-5.jpg";
import grooming6 from "@/assets/grooming-6.jpg";
import smallDogShihTzu from "@/assets/small-dog-shih-tzu.jpg";
import largeDogGolden from "@/assets/large-dog-golden.jpg";

type ServicePackage = {
  icon: typeof Bath;
  title: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  image: string;
  desc: string;
  features: string[];
};

const packages: ServicePackage[] = [
  {
    icon: Bath,
    title: "Small Breed Package",
    price: 1200,
    originalPrice: 1500,
    discountBadge: "20% OFF",
    image: smallDogShihTzu,
    desc: "Complete grooming for small breed dogs - bathing, blow-drying, ear and eye cleaning, nail clipping, and paw cleaning.",
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Sparkles,
    title: "Lottery Small Dog Package",
    price: 1450,
    image: smallDogShihTzu,
    desc: "Light haircut package with shower, blow-dry, nail clipping, sanitizing, eye cleaning, and teeth brushing.",
    features: [
      "Light Haircut",
      "Bathing",
      "Blow-Drying",
      "Nail Clipping",
      "Sanitizing",
      "Eye Cleaning",
      "Teeth Cleaning",
      "Hygienic Grooming (might charge extra)",
      "Tick Bathing (might charge extra)",
    ],
  },
  {
    icon: Bath,
    title: "Large Breed Package",
    price: 1950,
    originalPrice: 2500,
    discountBadge: "22% OFF",
    image: largeDogGolden,
    desc: "Full grooming for large breed dogs including teeth cleaning, combing/brushing, and all basic grooming essentials.",
    features: ["Bathing", "Blow-Drying", "Combing/Brushing", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Teeth Cleaning"],
  },
  {
    icon: Scissors,
    title: "Hair Cut Package",
    price: 1800,
    originalPrice: 2200,
    image: grooming6,
    desc: "Premium package with full hair styling, haircut, bathing, and complete grooming for a show-ready look.",
    features: [
      "Hair Styling",
      "Bathing",
      "Blow-Drying",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Clipping",
      "Paw Cleaning",
      "Teeth Cleaning",
      "Hygienic Grooming (might charge extra)",
      "Tick Bathing (might charge extra)",
    ],
  },
  {
    icon: Sparkles,
    title: "Cat Basic Grooming",
    price: 1000,
    image: grooming4,
    desc: "Gentle grooming for cats - bathing, blow-drying, ear and eye cleaning, nail clipping, and paw cleaning.",
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Scissors,
    title: "Cat Hair Cut Package",
    price: 1500,
    originalPrice: 1800,
    image: grooming6,
    desc: "Premium cat grooming with hair styling, bathing, and complete care for your feline friend.",
    features: ["Hair Styling", "Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Scissors,
    title: "Cat Zero Cut Package",
    price: 1800,
    originalPrice: 2100,
    image: grooming5,
    desc: "Full cat grooming with trimming, bathing, and all grooming essentials for a neat, clean look.",
    features: ["Haircut/Trimming", "Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <section className="py-12 border-b border-border">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Grooming Packages</h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Professional grooming for dogs and cats. Every package includes love, patience, and a gentle touch.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-12">
      <div className="container space-y-8">
        {packages.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="bg-card rounded-xl border border-border p-6 md:p-8 flex flex-col md:flex-row gap-6 relative">
              {service.discountBadge && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber px-3 py-1 text-xs font-bold text-amber-foreground shadow-sm">
                  <BadgePercent className="h-3 w-3" /> {service.discountBadge}
                </span>
              )}
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-48 h-40 md:h-auto object-cover rounded-lg shrink-0"
                loading="lazy"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-1">{service.title}</h2>
                <div className="mb-3 flex items-end gap-2">
                  <p className="text-primary font-semibold">
                    {"\u20B9"}
                    {service.price.toLocaleString("en-IN")}
                  </p>
                  {service.originalPrice && (
                    <p className="text-sm text-muted-foreground line-through">
                      {"\u20B9"}
                      {service.originalPrice.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full"
                    >
                      <Check className="w-3 h-3 text-success" />
                      {feature}
                    </span>
                  ))}
                </div>
                <Button size="sm" asChild>
                  <Link to="/book">Book This Package</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
