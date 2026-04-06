import { Star, Quote, Heart } from "lucide-react";
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
  {
    quote: "Very hygienic place and they use premium products. My Labrador loves going there. The staff is extremely friendly!",
    name: "Deepak R.",
    location: "Kacharakanahalli",
    rating: 5,
  },
  {
    quote: "We've been taking our Persian cat here for months. They're the only ones who handle her without any fuss. Amazing team!",
    name: "Sneha V.",
    location: "Kammanahalli",
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
    <section className="relative py-16 bg-muted/50 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute left-10 top-1/2 hidden -translate-y-1/2 lg:block text-primary/35"
        animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={28} fill="currentColor" />
        <Heart size={20} fill="currentColor" className="ml-8 mt-3" />
        <Heart size={14} fill="currentColor" className="ml-2 mt-2" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-14 top-[28%] hidden -translate-y-1/2 lg:block text-primary/30"
        animate={{ y: [0, 9, 0], x: [0, 4, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={22} fill="currentColor" />
        <Heart size={16} fill="currentColor" className="ml-6 mt-2" />
        <Heart size={12} fill="currentColor" className="ml-1 mt-1" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-12 top-[72%] hidden -translate-y-1/2 lg:block text-primary/30"
        animate={{ y: [0, -9, 0], x: [0, 4, 0] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={24} fill="currentColor" />
        <Heart size={16} fill="currentColor" className="ml-6 mt-2" />
        <Heart size={12} fill="currentColor" className="ml-1 mt-1" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block text-primary/35"
        animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
        transition={{ duration: 5.9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={28} fill="currentColor" />
        <Heart size={20} fill="currentColor" className="ml-8 mt-3" />
        <Heart size={14} fill="currentColor" className="ml-2 mt-2" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-14 top-[28%] hidden -translate-y-1/2 lg:block text-primary/30"
        animate={{ y: [0, -9, 0], x: [0, -4, 0] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={22} fill="currentColor" />
        <Heart size={16} fill="currentColor" className="ml-6 mt-2" />
        <Heart size={12} fill="currentColor" className="ml-1 mt-1" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-12 top-[72%] hidden -translate-y-1/2 lg:block text-primary/30"
        animate={{ y: [0, 9, 0], x: [0, -4, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={24} fill="currentColor" />
        <Heart size={16} fill="currentColor" className="ml-6 mt-2" />
        <Heart size={12} fill="currentColor" className="ml-1 mt-1" />
      </motion.div>

      <div className="container max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-10">What Pet Parents Say</h2>
        </motion.div>

        <div className="relative min-h-[220px]">
          <Quote className="w-10 h-10 text-primary/10 mx-auto mb-4" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
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
