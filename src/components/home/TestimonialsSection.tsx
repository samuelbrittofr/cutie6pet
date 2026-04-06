import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import happyDog from "@/assets/happy-dog.jpg";

const testimonials = [
  {
    quote: "Our golden retriever Luna absolutely loves her days at TailWaggers! The staff sends photo updates and she comes home exhausted and happy.",
    name: "Jennifer M.",
    location: "Seattle",
    rating: 5,
  },
  {
    quote: "Best decision we made for our rescue pup. The socialization has transformed his confidence. The trainers are incredible.",
    name: "Marcus R.",
    location: "Austin",
    rating: 5,
  },
  {
    quote: "I travel frequently for work and never worry about Buddy. The boarding includes daycare and he's always thrilled to go!",
    name: "Sarah K.",
    location: "Miami",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 bg-muted overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Featured dog image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <img
              src={happyDog}
              alt="Happy dog at TailWaggers"
              className="rounded-2xl object-cover w-full h-[500px] shadow-hero"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold">5.0</div>
                <div className="text-xs">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial slider */}
          <div>
            <div className="mb-8">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display mt-2">What Pet Parents Say</h2>
            </div>

            <div className="relative min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent font-display font-bold text-xl">
                      {testimonials[activeIndex].name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonials[activeIndex].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[activeIndex].location}</div>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot navigation */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-accent w-6" : "bg-foreground/20 w-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
