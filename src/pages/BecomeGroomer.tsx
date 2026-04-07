import { motion } from "framer-motion";
import { Bone, Cat, Dog, PawPrint, Scissors } from "lucide-react";
import groomingCoachSuresh from "@/assets/grooming-coach-suresh.png";

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
  { Icon: Bone, top: "7%", left: "4%", size: 32, delay: 0 },
  { Icon: Dog, top: "13%", left: "16%", size: 30, delay: 0.2 },
  { Icon: Cat, top: "10%", right: "8%", size: 30, delay: 0.4 },
  { Icon: PawPrint, top: "20%", right: "18%", size: 28, delay: 0.6 },
  { Icon: Bone, top: "29%", left: "9%", size: 34, delay: 0.8 },
  { Icon: Dog, top: "36%", right: "6%", size: 30, delay: 1.0 },
  { Icon: Cat, top: "46%", left: "3%", size: 28, delay: 1.2 },
  { Icon: PawPrint, top: "54%", right: "13%", size: 30, delay: 1.4 },
  { Icon: Bone, top: "62%", left: "18%", size: 32, delay: 1.6 },
  { Icon: Dog, top: "69%", right: "4%", size: 32, delay: 1.8 },
  { Icon: Cat, top: "77%", left: "9%", size: 29, delay: 2.0 },
  { Icon: PawPrint, top: "84%", right: "20%", size: 28, delay: 2.2 },
  { Icon: Bone, top: "17%", left: "40%", size: 30, delay: 2.4 },
  { Icon: Dog, top: "50%", left: "35%", size: 28, delay: 2.6 },
  { Icon: Cat, top: "74%", right: "35%", size: 29, delay: 2.8 },
  { Icon: Scissors, top: "24%", left: "28%", size: 30, delay: 3.0 },
  { Icon: Scissors, top: "66%", right: "30%", size: 28, delay: 3.2 },
  { emoji: "🪮", top: "41%", left: "26%", size: 26, delay: 3.4 },
  { emoji: "🪮", top: "81%", right: "12%", size: 24, delay: 3.6 },
];

const BecomeGroomer = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <div className="pointer-events-none absolute inset-0 z-0">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={`${item.Icon?.displayName ?? item.emoji ?? "icon"}-${index}`}
          className="absolute text-primary/40 drop-shadow-[0_0_10px_hsl(342_42%_56%/0.35)]"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          initial={{ y: 0, rotate: -4, opacity: 0.15 }}
          animate={{ y: [-10, 12, -10], x: [-4, 6, -4], rotate: [-8, 8, -8], opacity: [0.24, 0.5, 0.24] }}
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
    <section className="relative z-10 border-b border-border py-16 md:py-20">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Grooming Coaching
          </span>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Become a Groomer
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Learn pet grooming from professionals and start building the hands-on skills needed to work confidently with dogs and cats.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="relative z-10 py-16 md:py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm md:p-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.4 }}
            className="mb-4 text-center text-xl font-semibold tracking-tight text-foreground md:text-2xl"
          >
            Meet your Grooming Coach
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-[hsl(342,35%,70%)]/70 bg-gradient-to-br from-[hsl(342,85%,95%)] via-[hsl(28,100%,93%)] to-[hsl(338,60%,90%)] p-3"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[hsl(24,96%,66%)]/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-[hsl(338,70%,62%)]/20 blur-2xl" />
            <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.4),transparent_35%)]" />
            <motion.img
              src={groomingCoachSuresh}
              alt="Grooming Coach Mr Suresh S"
              className="relative z-10 w-full rounded-xl border border-white/60 object-cover shadow-[0_10px_24px_hsl(336_35%_30%/0.18)]"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-5 text-center text-xl font-semibold tracking-tight text-foreground md:text-2xl"
          >
            Mr Suresh S
          </motion.p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default BecomeGroomer;
