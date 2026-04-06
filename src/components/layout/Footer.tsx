import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-brand-deep text-white">
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-xl font-display font-bold mb-6 block">
              Cutie <span className="text-accent">6 Pet</span>
            </Link>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              Bangalore&apos;s favourite pet grooming spot. Where every pet&apos;s personality shines!
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/popular/cutie-6-pet-grooming-bengaluru/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { label: "Our Services", path: "/services" },
                { label: "Pricing", path: "/pricing" },
                { label: "Book Appointment", path: "/book" },
                { label: "Our Location", path: "/locations" },
                { label: "About Us", path: "/about" },
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

          <div>
            <h4 className="font-semibold mb-4">Our Location</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Flat No. 1B-1, Iriss North, No.14, 2nd Cross, Kacharakanahalli, Bengaluru 560084
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 99018 87525
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> cutie6pet@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
        <p>© {new Date().getFullYear()} Cutie 6 Pet. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
