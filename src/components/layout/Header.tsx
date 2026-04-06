import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Services", path: "/services" },
  { label: "Our Branches", path: "/locations" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const showTransparent = isHome && !scrolled;

  return (
    <>
      {/* Top bar */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] bg-brand-deep text-primary-foreground text-sm transition-all duration-300 hidden md:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto py-2 opacity-100"
        )}
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> 079 4741 9026
            </span>
            <span className="text-primary-foreground/60">|</span>
            <span>cutie6pet@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/70">Kacharakanahalli & Kammanahalli, Bangalore</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "fixed z-50 w-full transition-all duration-300",
          scrolled ? "top-0" : "top-0 md:top-[36px]",
          showTransparent
            ? "bg-transparent"
            : "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
        )}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className={cn(
              "text-xl md:text-2xl font-display font-bold transition-colors duration-300",
              showTransparent ? "text-white" : "text-foreground"
            )}>
              Cutie <span className="text-accent">6 Pet</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === link.path
                    ? "text-accent"
                    : showTransparent ? "text-white/80" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" className="bg-accent hover:bg-coral-hover text-accent-foreground" asChild>
              <Link to="/book">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              showTransparent ? "text-white hover:bg-white/10" : "hover:bg-muted"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border shadow-lg overflow-hidden"
            >
              <nav className="container py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                  <Button className="bg-accent hover:bg-coral-hover text-accent-foreground" asChild>
                    <Link to="/book" onClick={() => setMobileOpen(false)}>Book Appointment</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
