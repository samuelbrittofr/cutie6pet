import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import happyDog from "@/assets/happy-dog.jpg";

const testimonials = [
  {
    quote: "My golden retriever looks absolutely stunning after every visit! The team is so gentle and caring. Highly recommend Cutie 6 Pet!",
    name: "Priya S.",
    location: "Kacharakanahalli",
    rating: 5,
  },
  {
    quote: "Best grooming service in Bangalore! My cat is usually anxious but the groomers here handle her with so much patience and love.",
    name: "Rahul M.",
    location: "Kammanahalli",
    rating: 5,
  },
  {
    quote: "Excellent service and very professional. My Shih Tzu comes back looking like a little prince every time. Worth every rupee!",
    name: "Anita K.",
    location: "Bangalore",
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <img src={happyDog} alt="Happy pet at Cutie 6 Pet" className="rounded-2xl object-cover w-full h-[500px] shadow-hero" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs">Rating</div>
              </div>
            </div>
          </motion.div>

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
