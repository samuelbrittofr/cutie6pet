import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-brand-deep text-white">
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🐾</span>
                <span className="text-xl font-display font-bold">
                  Tail<span className="text-accent">Waggers</span>
                </span>
              </Link>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                Premium pet care at 285+ locations nationwide. Where every tail wags happy.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={Icon.displayName}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {[
                  { label: "Daycare", path: "/services/daycare" },
                  { label: "Boarding", path: "/services/boarding" },
                  { label: "Spa & Grooming", path: "/services/grooming" },
                  { label: "Training", path: "/services/training" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {[
                  { label: "About Us", path: "/about" },
                  { label: "Franchise", path: "/franchise" },
                  { label: "Blog", path: "/blog" },
                  { label: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-white/70 mb-4">Get pet care tips and special offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-l-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:border-accent"
                />
                <Button className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-l-none">
                  Subscribe
                </Button>
              </div>
              <div className="mt-6 space-y-2 text-sm text-white/60">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 1-800-555-PETS</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@tailwaggers.com</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Austin, TX 78701</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2025 TailWaggers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
