import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";

const WA_LINK = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20tertarik%20diskusi%20project.";

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Impact", href: "#achievements" },
  { label: "Projects", href: "#portfolio" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-heading text-lg font-semibold text-foreground">
          Hometown <span className="text-gradient-primary">Tha-Tha-Tha</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-sm">
          <MessageCircle size={15} />
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass-strong border-t border-border"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-center !text-sm mt-2">
              <MessageCircle size={15} />
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
