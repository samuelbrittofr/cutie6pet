import { Heart, Shield, Sparkles, Award, PawPrint } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const values = [
  { icon: Heart, title: "Love & Patience", desc: "Every pet is treated like our own — with patience, love, and a gentle touch." },
  { icon: Shield, title: "Pet-Safe Products", desc: "We use only high-quality, pet-safe grooming products." },
  { icon: Sparkles, title: "Expert Groomers", desc: "Our groomers are trained professionals who understand every breed." },
  { icon: Award, title: "Top Rated", desc: "4.9/5 rating on JustDial with glowing reviews from happy pet parents." },
  { icon: PawPrint, title: "All Breeds Welcome", desc: "Dogs and cats of all breeds and sizes are welcome at Cutie 6 Pet." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">About Cutie 6 Pet</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Born in Bangalore out of pure love for furry companions.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Cutie 6 Pets, we believe every pet has a personality and we're here to help it shine. We're more than just a grooming centre — we're a cosy, happy place where pets are pampered, personalities are polished, and tails leave wagging with joy.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From soothing spa baths and stylish trims to paw care and fluff-friendly products, everything we do is designed with your pet's happiness in mind. Our expert groomers treat every visitor like one of our original six — with patience, love, and a gentle touch.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 text-left italic text-muted-foreground">
            "We started Cutie 6 Pet because we wanted a place where our own pets would feel safe, loved, and pampered. That's the standard we hold ourselves to every single day."
          </blockquote>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "2", label: "Branches in Bangalore" },
            { value: "1000+", label: "Happy Pets Groomed" },
            { value: "4.9/5", label: "JustDial Rating" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4"><v.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
