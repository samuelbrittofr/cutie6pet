import { motion } from "framer-motion";

const BecomeGroomer = () => (
  <div className="min-h-screen bg-background">
    <section className="border-b border-border py-16 md:py-20">
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

    <section className="py-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10"
        >
          <h2 className="mb-3 text-2xl font-semibold text-foreground">
            Grooming training page coming next
          </h2>
          <p className="text-muted-foreground">
            This page is now live in the navigation and ready for the full coaching content. We can add the complete course information, who it is for, what students will learn, fees, duration, and enquiry CTA next.
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default BecomeGroomer;
