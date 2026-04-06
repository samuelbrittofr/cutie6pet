import { Search, CalendarCheck, Heart, PawPrint } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Search, title: "Find Your Location", description: "Enter your zip code to discover nearby TailWaggers centers." },
  { icon: CalendarCheck, title: "Schedule Meet & Greet", description: "Book a free facility tour and pet evaluation." },
  { icon: PawPrint, title: "Start Services", description: "Book daycare, boarding, grooming, or training." },
  { icon: Heart, title: "Happy Pets!", description: "Receive daily updates and watch your pet thrive." },
];

const HowItWorks = () => (
  <section className="py-24 bg-muted">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-display mt-2">Getting Started Is Easy</h2>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-accent/20" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center relative"
            >
              {/* Step circle */}
              <div className="relative mx-auto mb-6">
                <div className="w-32 h-32 rounded-full bg-card shadow-lg flex items-center justify-center mx-auto">
                  <step.icon className="w-12 h-12 text-accent" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
