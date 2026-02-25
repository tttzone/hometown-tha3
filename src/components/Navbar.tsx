import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Linkedin, Menu, X } from "lucide-react";

const WA_LINK = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20tertarik%20diskusi%20project.%20Boleh%20share%20kebutuhan%20%26%20timeline%3F";
const LINKEDIN_LINK = "https://www.linkedin.com/in/totok-suryanto";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Profil", href: "#profil" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
  { label: "Notes", href: "#notes" },
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
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-heading text-lg font-bold text-gradient-primary">
          Hometown Tha-Tha-Tha
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2 !px-4 !text-sm">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-4 !text-sm">
            <MessageCircle size={16} />
            Chat WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-border">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center !text-sm">
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
