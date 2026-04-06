import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote: "My golden retriever looks absolutely stunning after every visit! The team is so gentle and caring. Highly recommend!",
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
    <section className="py-16 overflow-hidden">
      <div className="container max-w-2xl text-center">
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-10">What Pet Parents Say</h2>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[activeIndex].location}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 justify-center mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-primary w-6" : "bg-foreground/20 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
