import { Link } from "react-router-dom";
import { Check, X, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const allFeatures = [
  "Bathing",
  "Blow-Drying",
  "Ear Cleaning",
  "Eye Cleaning",
  "Sanitizing",
  "Nail Clipping",
  "Paw Cleaning",
  "Paw Massaging",
  "Light Haircut",
  "Combing / Brushing",
  "Teeth Cleaning",
  "Hair Styling / Cut",
  "Hygienic Grooming (might charge extra)",
  "Tick Bathing (might charge extra)",
];

type Package = {
  name: string;
  pet: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  popular?: boolean;
  features: string[];
};

const dogPackages: Package[] = [
  {
    name: "Small Breed",
    pet: "Dog",
    price: 1200,
    originalPrice: 1500,
    discountBadge: "20% OFF",
    features: [
      "Bathing",
      "Blow-Drying",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Clipping",
      "Paw Cleaning",
    ],
  },
  {
    name: "Lottery Small Dog Package",
    pet: "Dog",
    price: 1450,
    originalPrice: 1750,
    features: [
      "Light Haircut",
      "Bathing",
      "Blow-Drying",
      "Nail Clipping",
      "Sanitizing",
      "Eye Cleaning",
      "Teeth Cleaning",
      "Paw Massaging",
      "Hygienic Grooming (might charge extra)",
      "Tick Bathing (might charge extra)",
    ],
  },
  {
    name: "Large Breed",
    pet: "Dog",
    price: 1950,
    originalPrice: 2500,
    discountBadge: "22% OFF",
    features: [
      "Bathing",
      "Blow-Drying",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Clipping",
      "Paw Cleaning",
      "Combing / Brushing",
      "Teeth Cleaning",
    ],
  },
  {
    name: "Hair Cut Package",
    pet: "Dog",
    price: 1799,
    originalPrice: 2200,
    popular: true,
    features: [
      "Bathing",
      "Blow-Drying",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Clipping",
      "Paw Cleaning",
      "Combing / Brushing",
      "Teeth Cleaning",
      "Hair Styling / Cut",
      "Hygienic Grooming (might charge extra)",
      "Tick Bathing (might charge extra)",
    ],
  },
];

const catPackages: Package[] = [
  {
    name: "Basic Grooming",
    pet: "Cat",
    price: 1000,
    features: [
      "Bathing",
      "Blow-Drying",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Clipping",
      "Paw Cleaning",
    ],
  },
  {
    name: "Hair Cut Package",
    pet: "Cat",
    price: 1500,
    originalPrice: 1800,
    popular: true,
    features: [
      "Bathing",
      "Blow-Drying",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Clipping",
      "Paw Cleaning",
      "Hair Styling / Cut",
    ],
  },
  {
    name: "Zero Cut Package",
    pet: "Cat",
    price: 1800,
    originalPrice: 2100,
    features: [
      "Bathing",
      "Blow-Drying",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Clipping",
      "Paw Cleaning",
      "Combing / Brushing",
      "Teeth Cleaning",
      "Hair Styling / Cut",
    ],
  },
];

const PricingCard = ({ pkg, index }: { pkg: Package; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`relative flex h-full flex-col rounded-2xl border p-6 md:p-8 transition-shadow ${
      pkg.popular ? "border-primary bg-primary/[0.02] shadow-md" : "border-border bg-card shadow-sm"
    }`}
  >
    {pkg.discountBadge && (
      <span className="absolute -top-3 right-4 rounded-full bg-amber px-3 py-1 text-xs font-bold text-amber-foreground shadow-sm">
        {pkg.discountBadge}
      </span>
    )}

    {pkg.popular && (
      <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
        <Star className="h-3 w-3 fill-current" /> Most Popular
      </span>
    )}

    <div className="mb-4 min-h-[4.75rem]">
      <h3 className="mb-1 text-lg font-semibold leading-snug text-foreground">{pkg.name}</h3>
      <p className="text-xs text-muted-foreground">{pkg.pet}</p>
    </div>

    <div className="mb-5 min-h-[5rem]">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">
          {"\u20B9"}
          {pkg.price.toLocaleString("en-IN")}
        </span>
        {pkg.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">
            {"\u20B9"}
            {pkg.originalPrice.toLocaleString("en-IN")}
          </span>
        )}
      </div>
      {pkg.originalPrice ? (
        <span className="mt-2 inline-flex rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
          Save {"\u20B9"}
          {(pkg.originalPrice - pkg.price).toLocaleString("en-IN")}
        </span>
      ) : (
        <span className="mt-2 inline-flex select-none px-2 py-0.5 text-xs opacity-0">
          Save
        </span>
      )}
    </div>

    <ul className="mb-8 space-y-2.5">
      {allFeatures.map((feature) => {
        const included = pkg.features.includes(feature);
        return (
          <li
            key={feature}
            className={`flex items-center gap-2.5 text-sm ${
              included ? "text-foreground" : "text-muted-foreground/50"
            }`}
          >
            {included ? (
              <Check className="h-4 w-4 shrink-0 text-success" />
            ) : (
              <X className="h-4 w-4 shrink-0" />
            )}
            {feature}
          </li>
        );
      })}
    </ul>

    <Button
      className={`mt-auto w-full rounded-lg ${
        pkg.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
      }`}
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
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Transparent Pricing
          </span>
          <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Grooming Packages & Prices
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Simple, honest pricing. Every package includes love, patience, and a gentle touch. No hidden charges.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="pb-16">
      <div className="container">
        <h2 className="mb-8 text-xl font-semibold text-foreground">Dog Grooming</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dogPackages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="container">
        <h2 className="mb-8 text-xl font-semibold text-foreground">Cat Grooming</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {catPackages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-16">
      <div className="container max-w-lg text-center">
        <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
        <h2 className="mb-3 text-2xl font-bold text-foreground">Not sure which package?</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Chat with us on WhatsApp and we'll recommend the perfect grooming plan for your pet.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/book">Book Appointment</Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://wa.me/919901887525?text=Hey%20Cutie%206%20Pet!%20I%20need%20help%20choosing%20a%20grooming%20package.%20Could%20you%20guide%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;
