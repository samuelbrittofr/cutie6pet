import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-brand-deep text-white">
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Link to="/" className="mb-6 block text-xl font-display font-bold">
              Cutie <span className="text-accent">6 Pet</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Bangalore&apos;s favourite pet grooming spot. Where every pet&apos;s personality shines!
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cutie6pet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { label: "Our Services", path: "/services" },
                { label: "Pricing", path: "/pricing" },
                { label: "Book Appointment", path: "/book" },
                { label: "Visit Us", path: "/about" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={`${item.path}-${item.label}`}>
                  <Link to={item.path} className="transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Our Location</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Flat No. 1B-1, Iriss North, No.14, 2nd Cross, Kacharakanahalli, Bengaluru 560084
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 81470 46518
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> cutie6pet@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Cutie 6 Pet. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-accent">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
