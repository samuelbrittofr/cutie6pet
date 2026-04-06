import { Link } from "react-router-dom";
import { Scissors, Bath, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const packages = [
  {
    icon: Bath, title: "Small Breed Package", slug: "small-breed", price: "₹1,000",
    color: "bg-amber-light text-amber",
    desc: "Complete grooming for small breed dogs — bathing, blow-drying, ear & eye cleaning, nail clipping, and paw cleaning.",
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Bath, title: "Large Breed Package", slug: "large-breed", price: "₹1,250",
    color: "bg-brand-light text-brand-deep",
    desc: "Full grooming for large breed dogs including teeth cleaning, combing/brushing, and all basic grooming essentials.",
    features: ["Bathing", "Blow-Drying", "Combing/Brushing", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Teeth Cleaning"],
  },
  {
    icon: Scissors, title: "Hair Cut Package", slug: "haircut", price: "₹1,800",
    color: "bg-success-light text-success",
    desc: "Premium package with full hair styling, haircut, bathing, and complete grooming for a show-ready look.",
    features: ["Hair Styling", "Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning", "Teeth Cleaning"],
  },
  {
    icon: Sparkles, title: "Cat Basic Grooming", slug: "cat-basic", price: "₹1,000",
    color: "bg-amber-light text-amber",
    desc: "Gentle grooming for cats — bathing, blow-drying, ear & eye cleaning, nail clipping, and paw cleaning.",
    features: ["Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Scissors, title: "Cat Zero Cut Package", slug: "cat-zero-cut", price: "₹1,800",
    color: "bg-brand-light text-brand-deep",
    desc: "Full cat grooming with trimming, bathing, and all grooming essentials for a neat, clean look.",
    features: ["Haircut/Trimming", "Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
  {
    icon: Scissors, title: "Cat Hair Cut Package", slug: "cat-haircut", price: "₹1,500",
    color: "bg-success-light text-success",
    desc: "Premium cat grooming with hair styling, bathing, and complete care for your feline friend.",
    features: ["Hair Styling", "Bathing", "Blow-Drying", "Ear Cleaning", "Eye Cleaning", "Nail Clipping", "Paw Cleaning"],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Grooming Packages</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Professional grooming for dogs & cats. Every package includes love, patience, and a gentle touch.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container space-y-12">
        {packages.map((s, i) => (
          <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <div className={`bg-card rounded-xl shadow-card p-8 md:p-10 flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mb-4`}><s.icon className="w-7 h-7" /></div>
                <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
                <p className="text-primary font-semibold mb-4">{s.price}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                <Button className="rounded-full" asChild><Link to="/book">Book This Package</Link></Button>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-success shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
