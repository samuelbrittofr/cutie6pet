import { Link } from "react-router-dom";
import { Check, X, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const allFeatures = [
  "Bathing",
  "Blow-Drying",
  "Ear Cleaning",
  "Eye Cleaning",
  "Nail Clipping",
  "Paw Cleaning",
  "Combing / Brushing",
  "Teeth Cleaning",
  "Hair Styling / Cut",
];

type Package = {
  name: string;
  pet: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  features: string[];
};

const dogPackages: Package[] = [
  {
    name: "Small Breed",
    pet: "Dog",
    price: 1000,
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    name: "Large Breed",
    pet: "Dog",
    price: 1250,
    originalPrice: 1500,
    popular: true,
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Combing / Brushing", "Teeth Cleaning"],
  },
  {
    name: "Hair Cut Package",
    pet: "Dog",
    price: 1800,
    originalPrice: 2200,
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Combing / Brushing", "Teeth Cleaning", "Hair Styling / Cut"],
  },
];

const catPackages: Package[] = [
  {
    name: "Basic Grooming",
    pet: "Cat",
    price: 1000,
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    name: "Hair Cut Package",
    pet: "Cat",
    price: 1500,
    originalPrice: 1800,
    popular: true,
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Hair Styling / Cut"],
  },
  {
    name: "Zero Cut Package",
    pet: "Cat",
    price: 1800,
    originalPrice: 2100,
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Combing / Brushing", "Teeth Cleaning", "Hair Styling / Cut"],
  },
];

const PricingCard = ({ pkg, index }: { pkg: Package; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`relative rounded-2xl border p-6 md:p-8 transition-shadow ${
      pkg.popular
        ? "border-primary bg-primary/[0.02] shadow-md"
        : "border-border bg-card shadow-sm"
    }`}
  >
    {pkg.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
        <Star className="w-3 h-3 fill-current" /> Most Popular
      </span>
    )}

    <h3 className="text-lg font-semibold text-foreground mb-1">{pkg.name}</h3>
    <p className="text-xs text-muted-foreground mb-4">{pkg.pet}</p>

    <div className="flex items-baseline gap-2 mb-6">
      <span className="text-3xl font-bold text-foreground">₹{pkg.price.toLocaleString("en-IN")}</span>
      {pkg.originalPrice && (
        <>
          <span className="text-sm text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString("en-IN")}</span>
          <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
            Save ₹{(pkg.originalPrice - pkg.price).toLocaleString("en-IN")}
          </span>
        </>
      )}
    </div>

    <ul className="space-y-2.5 mb-8">
      {allFeatures.map((feature) => {
        const included = pkg.features.includes(feature);
        return (
          <li key={feature} className={`flex items-center gap-2.5 text-sm ${included ? "text-foreground" : "text-muted-foreground/50"}`}>
            {included ? (
              <Check className="w-4 h-4 text-success shrink-0" />
            ) : (
              <X className="w-4 h-4 shrink-0" />
            )}
            {feature}
          </li>
        );
      })}
    </ul>

    <Button
      className={`w-full rounded-lg ${pkg.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""}`}
      variant={pkg.popular ? "default" : "outline"}
      asChild
    >
      <Link to="/book">Book Now</Link>
    </Button>
  </motion.div>
);

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <section className="py-16 md:py-20">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Transparent Pricing
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Grooming Packages & Prices
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simple, honest pricing. Every package includes love, patience, and a gentle touch. No hidden charges.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Dog Packages */}
    <section className="pb-16">
      <div className="container">
        <h2 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
          🐕 Dog Grooming
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {dogPackages.map((pkg, i) => (
            <PricingCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Cat Packages */}
    <section className="pb-16">
      <div className="container">
        <h2 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
          🐈 Cat Grooming
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {catPackages.map((pkg, i) => (
            <PricingCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-16 bg-muted">
      <div className="container text-center max-w-lg">
        <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-3">Not sure which package?</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Chat with us on WhatsApp and we'll recommend the perfect grooming plan for your pet.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link to="/book">Book Appointment</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://wa.me/917947419026?text=Hi!%20I%20need%20help%20choosing%20a%20grooming%20package." target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;
