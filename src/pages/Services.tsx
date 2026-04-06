import { Link } from "react-router-dom";
import { Sun, Moon, Scissors, GraduationCap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sun, title: "Daycare", slug: "daycare", price: "From $38/day",
    color: "bg-amber-light text-amber",
    desc: "Open-play socialization with trained staff supervision in climate-controlled playrooms. Perfect for high-energy pups who love to play.",
    features: ["Supervised open play", "Indoor & outdoor areas", "Webcam access", "Flexible scheduling", "Report cards"],
  },
  {
    icon: Moon, title: "Boarding", slug: "boarding", price: "From $65/night",
    color: "bg-brand-light text-brand-deep",
    desc: "Overnight stays in private suites with included playtime and daily photo updates. Your pet will feel right at home.",
    features: ["Private suites", "Daily photo updates", "Included playtime", "Medication administration", "Late checkout available"],
  },
  {
    icon: Scissors, title: "Spa & Grooming", slug: "grooming", price: "From $45",
    color: "bg-success-light text-success",
    desc: "Full-service grooming from certified groomers — baths, haircuts, nail trims, and specialty spa treatments.",
    features: ["Certified groomers", "Breed-specific cuts", "De-shedding treatments", "Nail trim & filing", "Teeth brushing"],
  },
  {
    icon: GraduationCap, title: "Training", slug: "training", price: "From $100/hr",
    color: "bg-secondary text-coral",
    desc: "Professional obedience and behavior programs with certified trainers. From puppy basics to advanced skills.",
    features: ["1-on-1 sessions", "Group classes", "Puppy kindergarten", "Behavior modification", "CGC prep"],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Everything your furry friend needs under one roof — from daily play to overnight stays and full spa treatments.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container space-y-12">
        {services.map((s, i) => (
          <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <div className={`bg-card rounded-xl shadow-card p-8 md:p-10 flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mb-4`}><s.icon className="w-7 h-7" /></div>
                <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
                <p className="text-primary font-semibold mb-4">{s.price}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                <div className="flex gap-3">
                  <Button className="rounded-full" asChild><Link to={`/services/${s.slug}`}>Learn More</Link></Button>
                  <Button variant="outline" className="rounded-full" asChild><Link to="/locations">Find Location</Link></Button>
                </div>
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
