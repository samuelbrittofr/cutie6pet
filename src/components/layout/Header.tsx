import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import brandLogo from "@/assets/logocutiepet.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Our Branches", path: "/locations" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[hsl(340,100%,96%)]/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-[hsl(340,100%,96%)]/85 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-20 items-center gap-4 xl:gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-card">
            <img
              src={brandLogo}
              alt="Cutie 6 Pet logo"
              className="h-full w-full object-contain object-center scale-[1.08]"
            />
          </div>
          <span className="whitespace-nowrap text-2xl font-bold leading-none tracking-tight text-foreground xl:text-[2rem]">
            Cutie <span className="text-primary">6</span> Pet
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary xl:text-base",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <a
            href="tel:+919901887525"
            className="flex items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground xl:text-base"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">+91 99018 87525</span>
            <span className="xl:hidden">Call</span>
          </a>
          <div className="h-7 w-px bg-border/80" />
          <Button
            variant="outline"
            className="h-11 whitespace-nowrap border-[hsl(342,25%,58%)] px-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary xl:px-4 xl:text-base"
            asChild
          >
            <Link to="/become-a-groomer">Become a Groomer</Link>
          </Button>
          <Button
            className="h-11 whitespace-nowrap bg-primary px-4 text-sm text-primary-foreground hover:bg-primary/90 xl:px-5 xl:text-base"
            asChild
          >
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        <div className="ml-auto lg:hidden" />

        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[hsl(340,100%,96%)] border-t border-border overflow-hidden"
          >
            <nav className="container py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-primary/5 text-primary"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/become-a-groomer"
                className={cn(
                  "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === "/become-a-groomer"
                    ? "bg-primary/5 text-primary"
                    : "hover:bg-muted text-muted-foreground"
                )}
              >
                Become a Groomer
              </Link>
              <div className="pt-3 border-t border-border mt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/book">Book Now</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
