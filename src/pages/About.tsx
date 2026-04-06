import { Heart, Shield, Sparkles, Award, PawPrint, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import shopExterior from "@/assets/shop-exterior.jpg";
import grooming1 from "@/assets/grooming-1.jpg";

const values = [
  { icon: Heart, title: "Love & Patience", desc: "Every pet is treated like our own - with patience, love, and a gentle touch." },
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
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Born in Bangalore out of pure love for furry companions.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
              Where Every Pet&apos;s <span className="text-primary">Personality Shines</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Cutie 6 Pet, we believe every pet has a personality and we&apos;re here to help it shine. We&apos;re more than just a grooming centre - we&apos;re a{" "}
              <strong className="text-foreground">cosy, happy place</strong> where pets are pampered, personalities are polished, and tails leave wagging with joy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From soothing spa baths and stylish trims to paw care and fluff-friendly products, everything we do is designed with your pet&apos;s happiness in mind. Our expert groomers treat every visitor like one of our original six - with patience, love, and a gentle touch.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
              <p className="italic text-foreground font-medium">
                &quot;We started Cutie 6 Pet because we wanted a place where our own pets would feel safe, loved, and pampered. That&apos;s the standard we hold ourselves to every single day.&quot;
              </p>
              <p className="text-sm text-primary mt-2 font-semibold">- The Cutie 6 Pet Team</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <img src={shopExterior} alt="Cutie 6 Pet shop" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
            <img src={grooming1} alt="Pet grooming in action" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { value: "1000+", label: "Happy Pets Groomed", icon: PawPrint },
            { value: "4.9", label: "JustDial Rating", icon: Star },
            { value: "37+", label: "5-Star Reviews", icon: Heart },
          ].map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">What We Stand For</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
              <Card className="text-center h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
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
