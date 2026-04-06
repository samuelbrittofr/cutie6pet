import { Link } from "react-router-dom";
import { Scissors, Bath, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import grooming4 from "@/assets/grooming-4.jpg";
import grooming5 from "@/assets/grooming-5.jpg";
import grooming6 from "@/assets/grooming-6.jpg";

const packages = [
  {
    icon: Bath,
    title: "Small Breed Package",
    price: "₹1,000",
    image: grooming4,
    desc: "Complete grooming for small breed dogs - bathing, blow-drying, ear and eye cleaning, nail clipping, and paw cleaning.",
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Bath,
    title: "Large Breed Package",
    price: "₹1,250",
    image: grooming5,
    desc: "Full grooming for large breed dogs including teeth cleaning, combing/brushing, and all basic grooming essentials.",
    features: ["Bathing", "Blow-Drying", "Combing/Brushing", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Teeth Cleaning"],
  },
  {
    icon: Scissors,
    title: "Hair Cut Package",
    price: "₹1,800",
    image: grooming6,
    desc: "Premium package with full hair styling, haircut, bathing, and complete grooming for a show-ready look.",
    features: ["Hair Styling", "Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Teeth Cleaning"],
  },
  {
    icon: Sparkles,
    title: "Cat Basic Grooming",
    price: "₹1,000",
    image: grooming4,
    desc: "Gentle grooming for cats - bathing, blow-drying, ear and eye cleaning, nail clipping, and paw cleaning.",
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Scissors,
    title: "Cat Zero Cut Package",
    price: "₹1,800",
    image: grooming5,
    desc: "Full cat grooming with trimming, bathing, and all grooming essentials for a neat, clean look.",
    features: ["Haircut/Trimming", "Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Scissors,
    title: "Cat Hair Cut Package",
    price: "₹1,500",
    image: grooming6,
    desc: "Premium cat grooming with hair styling, bathing, and complete care for your feline friend.",
    features: ["Hair Styling", "Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
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
            <div className="bg-card rounded-xl border border-border p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-48 h-40 md:h-auto object-cover rounded-lg shrink-0"
                loading="lazy"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-1">{service.title}</h2>
                <p className="text-primary font-semibold mb-3">{service.price}</p>
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
