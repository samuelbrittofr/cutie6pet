import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "Health", "Training", "Nutrition", "Lifestyle", "News"];

const articles = [
  {
    slug: "summer-safety-tips", title: "10 Summer Safety Tips for Your Dog", excerpt: "Keep your furry friend safe and cool during the hottest months with these essential tips from our veterinary experts.",
    author: "Dr. Sarah Chen", date: "Jun 15, 2025", readTime: "5 min", category: "Health", featured: true,
  },
  {
    slug: "puppy-socialization", title: "The Complete Guide to Puppy Socialization", excerpt: "Early socialization is critical for a well-adjusted adult dog. Learn the key windows and techniques.",
    author: "Jake Rodriguez", date: "Jun 10, 2025", readTime: "8 min", category: "Training",
  },
  {
    slug: "raw-food-diet", title: "Raw Food Diet: Pros, Cons, and What You Should Know", excerpt: "We break down the science behind raw diets and help you make an informed decision for your pet.",
    author: "Lisa Kim", date: "Jun 5, 2025", readTime: "6 min", category: "Nutrition",
  },
  {
    slug: "separation-anxiety", title: "Dealing with Separation Anxiety in Dogs", excerpt: "Practical strategies and training techniques to help your dog feel comfortable when you're away.",
    author: "Emily Rodriguez", date: "May 28, 2025", readTime: "7 min", category: "Training",
  },
  {
    slug: "new-bellevue-location", title: "New Location Opening: Bellevue, WA", excerpt: "We're thrilled to announce our newest location in Bellevue, featuring our largest outdoor play area yet.",
    author: "TailWaggers Team", date: "May 20, 2025", readTime: "3 min", category: "News",
  },
  {
    slug: "dog-friendly-travel", title: "Dog-Friendly Travel: A Complete Planning Guide", excerpt: "From road trips to flying, here's everything you need to know about traveling with your dog.",
    author: "Marcus Williams", date: "May 15, 2025", readTime: "10 min", category: "Lifestyle",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);
  const featured = articles.find((a) => a.featured);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">TailWaggers Blog</h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Expert tips, stories, and news from the world of pet care.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {/* Featured */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="block bg-card rounded-xl shadow-card p-8 mb-12 group hover:shadow-card-hover transition-all">
              <Badge className="mb-3">{featured.category}</Badge>
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors mb-3">{featured.title}</h2>
              <p className="text-muted-foreground mb-4 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{featured.author}</span>
                <span>{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
              </div>
            </Link>
          )}

          {/* Filters */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map((c) => (
              <button key={c} onClick={() => setActiveCategory(c)} className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>{c}</button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <motion.div key={a.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={`/blog/${a.slug}`} className="block bg-card rounded-xl shadow-card p-6 h-full group hover:shadow-card-hover transition-all">
                  <Badge variant="secondary" className="mb-3">{a.category}</Badge>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{a.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{a.author}</span>
                    <span>{a.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
