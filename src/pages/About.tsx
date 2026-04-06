import { Heart, Shield, Users, Award, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const values = [
  { icon: Heart, title: "Love First", desc: "Every pet is treated like our own. We genuinely love what we do." },
  { icon: Shield, title: "Safety Always", desc: "Rigorous safety protocols and trained staff ensure your pet's wellbeing." },
  { icon: Users, title: "Community", desc: "We build lasting relationships with pet families in every neighborhood." },
  { icon: Award, title: "Excellence", desc: "Certified staff, premium facilities, and continuously improving standards." },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly products and practices at every location." },
];

const leaders = [
  { name: "Dr. Sarah Chen", role: "Founder & CEO", bio: "Veterinarian turned entrepreneur with 20+ years in pet care." },
  { name: "Marcus Williams", role: "COO", bio: "Former Petco VP with deep operational expertise in franchise scaling." },
  { name: "Emily Rodriguez", role: "VP of Training", bio: "Certified animal behaviorist and author of 'The Happy Pup Method'." },
  { name: "David Kim", role: "CTO", bio: "Led digital transformation at three pet-tech startups." },
];

const stats = [
  { value: "285+", label: "Locations" },
  { value: "1M+", label: "Happy Pet Parents" },
  { value: "5,000+", label: "Team Members" },
  { value: "2015", label: "Founded" },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Story</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">From a single location in Austin to 285+ nationwide — we're on a mission to make premium pet care accessible to every family.</p>
        </motion.div>
      </div>
    </section>

    {/* Founder Story */}
    <section className="py-16">
      <div className="container max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How It All Started</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">In 2015, veterinarian Dr. Sarah Chen noticed a gap in the market: pet parents wanted premium, transparent care but couldn't find it at scale. She opened the first TailWaggers in Austin, TX, combining veterinary-grade safety standards with a warm, playful environment. Within two years, the waitlist was months long.</p>
          <blockquote className="border-l-4 border-primary pl-6 text-left italic text-muted-foreground">
            "I wanted to create a place where I'd feel comfortable leaving my own pets. That simple standard has guided every decision we've made."
            <footer className="mt-2 text-sm font-medium text-foreground not-italic">— Dr. Sarah Chen, Founder</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h2>
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

    {/* Leadership */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Leadership Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((l, i) => (
            <motion.div key={l.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary">{l.name.split(" ").map(n => n[0]).join("")}</div>
                  <h3 className="font-semibold">{l.name}</h3>
                  <p className="text-sm text-primary mb-2">{l.role}</p>
                  <p className="text-xs text-muted-foreground">{l.bio}</p>
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
