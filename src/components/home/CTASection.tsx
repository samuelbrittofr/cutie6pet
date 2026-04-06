import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-20 bg-primary">
    <div className="container text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          Ready to Pamper Your Fur Baby?
        </h2>
        <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
          Book a grooming appointment today. We're just a click or call away.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link to="/book">
              Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button size="lg" className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
            <a href="tel:07947419026">
              <Phone className="w-4 h-4 mr-2" /> Call Us
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
