import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const posts: Record<string, any> = {
  "summer-safety-tips": {
    title: "10 Summer Safety Tips for Your Dog",
    author: "Dr. Sarah Chen",
    date: "Jun 15, 2025",
    readTime: "5 min",
    category: "Health",
    content: `Summer is a wonderful time to enjoy the outdoors with your dog, but the heat can pose serious risks. Here are our top 10 tips for keeping your pup safe:\n\n**1. Never leave your dog in a parked car.** Even with windows cracked, temperatures can rise to dangerous levels within minutes.\n\n**2. Provide plenty of fresh water.** Carry a portable bowl on walks and ensure water is always available at home.\n\n**3. Walk during cooler hours.** Early morning and evening walks are safest. Hot pavement can burn paw pads.\n\n**4. Watch for signs of heatstroke.** Excessive panting, drooling, lethargy, and vomiting are warning signs. Seek veterinary care immediately.\n\n**5. Use pet-safe sunscreen.** Dogs with light-colored fur or thin coats can get sunburned, especially on their nose and ears.\n\n**6. Keep your dog groomed.** Regular brushing removes excess undercoat but don't shave double-coated breeds.\n\n**7. Provide shade and cool spots.** A kiddie pool, cooling mat, or shaded area gives your dog relief from the heat.\n\n**8. Be cautious around water.** Not all dogs are strong swimmers. Use a life vest at lakes and pools.\n\n**9. Watch out for toxic plants and algae.** Blue-green algae in ponds can be fatal. Keep dogs away from stagnant water.\n\n**10. Adjust exercise intensity.** Shorter, less intense play sessions prevent overheating.`,
  },
};

const fallbackPost = {
  title: "Blog Post",
  author: "TailWaggers Team",
  date: "2025",
  readTime: "5 min",
  category: "General",
  content: "This is a sample blog post. Full content coming soon! Check back later for the complete article with expert tips and advice for pet parents.",
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug || ""] || { ...fallbackPost, title: (slug || "post").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-12">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="text-primary-foreground/70 hover:text-primary-foreground text-sm flex items-center gap-1 mb-4"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
            <Badge className="mb-3">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((p: string, i: number) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
