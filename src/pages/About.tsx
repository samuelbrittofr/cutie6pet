import { useEffect, useRef, useState } from "react";
import { Heart, Shield, Sparkles, Award, PawPrint, Star, MapPin, Phone, Clock, Mail, Bone, Cat, Dog, Scissors, Instagram, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import grooming1 from "@/assets/grooming-1.jpg";
import grooming2 from "@/assets/grooming-2.jpg";
import grooming3 from "@/assets/grooming-3.jpg";
import grooming4 from "@/assets/grooming-4.jpg";

const values = [
  { icon: Heart, title: "Love & Patience", desc: "Every pet is treated like our own - with patience, love, and a gentle touch." },
  { icon: Shield, title: "Pet-Safe Products", desc: "We use only high-quality, pet-safe grooming products." },
  { icon: Sparkles, title: "Expert Groomers", desc: "Our groomers are trained professionals who understand every breed." },
  { icon: Award, title: "Top Rated", desc: "4.9/5 rating on JustDial with glowing reviews from happy pet parents." },
  { icon: PawPrint, title: "All Breeds Welcome", desc: "Dogs and cats of all breeds and sizes are welcome at Cutie 6 Pet." },
];

const location = {
  name: "Cutie 6 Pet Hair Grooming Spot",
  address:
    "Flat No. 1B-1, Iriss North, No.14, 2nd Cross, Kacharakanahalli, Bengaluru 560084",
  phone: "+91 99018 87525",
  email: "cutie6pet@gmail.com",
  hours: "10:00 AM - 8:00 PM (All days)",
  rating: 4.9,
  reviews: 37,
  mapUrl: "https://maps.google.com/?q=Cutie+6+Pet+Hair+Grooming+Spot+Bangalore",
  embedUrl:
    "https://maps.google.com/maps?q=Cutie%206%20Pet%20Hair%20Grooming%20Spot%2C%20Bangalore&z=17&output=embed",
};

const instagramUrl = "https://www.instagram.com/cutie6pet/";

const instagramPosts = [
  { image: grooming1, caption: "Fresh trims and happy tails from the studio." },
  { image: grooming2, caption: "Pampered pets enjoying a gentle grooming session." },
  { image: grooming3, caption: "Clean coats, tidy paws, and lots of care." },
  { image: grooming4, caption: "A peek into everyday Cutie 6 Pet moments." },
];

const stats = [
  { value: 1000, label: "Happy Pets Groomed", icon: PawPrint, suffix: "+" },
  { value: 4.9, label: "JustDial Rating", icon: Star, decimals: 1 },
  { value: 37, label: "5-Star Reviews", icon: Heart, suffix: "+" },
];

type FloatingIcon = {
  Icon?: typeof Bone;
  emoji?: string;
  top: string;
  left?: string;
  right?: string;
  size: number;
  delay: number;
};

const floatingIcons: FloatingIcon[] = [
  { Icon: Bone, top: "6%", left: "4%", size: 32, delay: 0 },
  { Icon: Dog, top: "12%", left: "18%", size: 30, delay: 0.2 },
  { Icon: Cat, top: "9%", right: "8%", size: 30, delay: 0.4 },
  { Icon: PawPrint, top: "20%", right: "20%", size: 28, delay: 0.6 },
  { Icon: Bone, top: "30%", left: "10%", size: 34, delay: 0.8 },
  { Icon: Dog, top: "37%", right: "7%", size: 30, delay: 1.0 },
  { Icon: Cat, top: "46%", left: "5%", size: 28, delay: 1.2 },
  { Icon: PawPrint, top: "55%", right: "14%", size: 30, delay: 1.4 },
  { Icon: Bone, top: "63%", left: "17%", size: 32, delay: 1.6 },
  { Icon: Dog, top: "70%", right: "5%", size: 32, delay: 1.8 },
  { Icon: Cat, top: "78%", left: "9%", size: 29, delay: 2.0 },
  { Icon: PawPrint, top: "85%", right: "21%", size: 28, delay: 2.2 },
  { Icon: Scissors, top: "24%", left: "30%", size: 29, delay: 2.4 },
  { Icon: Scissors, top: "66%", right: "31%", size: 28, delay: 2.6 },
  { emoji: "🪮", top: "42%", left: "28%", size: 25, delay: 2.8 },
  { emoji: "🪮", top: "81%", right: "12%", size: 24, delay: 3.0 },
];

const useInView = (threshold = 0.35) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
};

const AnimatedStat = ({
  value,
  label,
  icon: Icon,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  label: string;
  icon: typeof PawPrint;
  suffix?: string;
  decimals?: number;
}) => {
  const { ref, visible } = useInView();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const duration = 1800;
    let startTime: number | null = null;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [value, visible]);

  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />
      <p className="text-3xl font-bold text-primary md:text-4xl">
        {formatted}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const About = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <div className="pointer-events-none absolute inset-0 z-0">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={`${item.Icon?.displayName ?? item.emoji ?? "icon"}-${index}`}
          className="absolute text-primary/35 drop-shadow-[0_0_10px_hsl(342_42%_56%/0.28)]"
          style={{ top: item.top, left: item.left, right: item.right }}
          initial={{ y: 0, rotate: -4, opacity: 0.14 }}
          animate={{ y: [-10, 12, -10], x: [-4, 6, -4], rotate: [-8, 8, -8], opacity: [0.2, 0.42, 0.2] }}
          transition={{ duration: 7 + (index % 4), repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          {item.Icon ? (
            <item.Icon size={item.size} />
          ) : (
            <span style={{ fontSize: `${item.size}px`, lineHeight: 1 }}>{item.emoji}</span>
          )}
        </motion.div>
      ))}
    </div>
    <section className="relative z-10 bg-gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About Cutie 6 Pet</h1>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Born in Bangalore out of pure love for furry companions.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="relative z-10 py-20">
      <div className="container max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
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
              From soothing spa baths and stylish trims to paw care and fluff-friendly products, everything we do is designed with your pet&apos;s happiness in mind. Our expert groomers treat every visitor like one of our original two - with patience, love, and a gentle touch.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
              <p className="italic text-foreground font-medium">
                &quot;We started Cutie 6 Pet because we wanted a place where our own pets would feel safe, loved, and pampered. That&apos;s the standard we hold ourselves to every single day.&quot;
              </p>
              <p className="text-sm text-primary mt-2 font-semibold">- The Cutie 6 Pet Team</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">Our Bangalore Grooming Studio</h2>
            <p className="mt-3 text-muted-foreground">
              We currently welcome pets at one cosy branch in Kacharakanahalli, with easy directions,
              all-day service hours, and a warm space made for dogs and cats.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <div>
                <h3 className="text-xl font-bold text-foreground">{location.name}</h3>
                <span className="mt-1 flex items-center gap-1 text-base font-medium text-amber">
                  <Star className="h-4 w-4 fill-current" />
                  {location.rating} ({location.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-base text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {location.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                {location.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                {location.email}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                {location.hours}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/book">Book Appointment</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="relative z-10 pb-8">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="border-b border-border px-6 py-4">
            <h3 className="text-lg font-semibold text-foreground">Find Us on the Map</h3>
            <p className="text-sm text-muted-foreground">
              View our exact branch location before you visit.
            </p>
          </div>
          <iframe
            title="Cutie 6 Pet location map"
            src={location.embedUrl}
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>

    <section className="relative z-10 py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>

    <section className="relative z-10 py-16">
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

    <section className="border-t border-border bg-secondary/50 py-16">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Instagram</span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">See More from Cutie 6 Pet</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Follow our grooming transformations, happy client moments, and fresh updates on Instagram.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Instagram className="h-7 w-7" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">@cutie6pet</p>
                <p className="text-sm text-muted-foreground">
                  Real grooming moments, pet makeovers, and daily studio updates.
                </p>
              </div>
            </div>

            <Button asChild className="w-full md:w-auto">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                Follow on Instagram
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.caption}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start gap-3 p-4">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{post.caption}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
