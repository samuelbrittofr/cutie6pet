import { Search, CalendarCheck, Scissors, Heart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Search, title: "Browse Services", description: "Check out our grooming packages and prices." },
  { icon: CalendarCheck, title: "Book Online", description: "Pick your date, time, and package in a few clicks." },
  { icon: Scissors, title: "Visit Us", description: "Bring your pet to either of our Bangalore branches." },
  { icon: Heart, title: "Happy Pet!", description: "Take home a freshly groomed, happy fur baby." },
];

const HowItWorks = () => (
  <section className="py-16">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">How It Works</h2>
        <p className="text-muted-foreground text-sm">Four simple steps to a happy, groomed pet</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
              <step.icon className="w-6 h-6 text-primary" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[10px] font-bold">
                {i + 1}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
