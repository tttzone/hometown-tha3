import { motion } from "framer-motion";
import { MessageCircle, Linkedin, ArrowDown } from "lucide-react";
import portraitImg from "@/assets/totok.jpeg";
import bgImg from "@/assets/background_ciremai.jpg";

const WA_LINK = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20tertarik%20diskusi%20project.%20Boleh%20share%20kebutuhan%20%26%20timeline%3F";
const LINKEDIN_LINK = "https://www.linkedin.com/in/totok-suryanto";

const chips = [
  "Agile Coach & Product Manager",
  "Scrum Master (PSM I & II)",
  "PMP Certified",
  "AI Product & Analytics",
  "End-to-End Delivery",
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Gunung Ciremai"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 mx-auto py-32 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient-primary">
              Hometown Tha-Tha-Tha
            </h1>
            <p className="text-base md:text-lg text-secondary-foreground mb-6 max-w-xl leading-relaxed">
              Saya <span className="text-foreground font-semibold">Totok Suryanto</span> (Surya Ban-jang) — technologist & product leader yang nggabungin engineering, agile delivery, dan UI/UX mindset biar produk terasa enak dipakai dan gampang diskalakan.
            </p>

            {/* Quote */}
            <div className="glass rounded-xl p-5 mb-6 border-l-4 border-primary max-w-xl">
              <p className="font-heading text-xl md:text-2xl font-bold text-foreground italic">
                "Tidak Ada Hal Baru di Bawah Matahari."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Yang bikin beda itu cara kita merapikan, mempercepat, dan memanusiakan pengalaman pengguna.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all text-sm"
              >
                <MessageCircle size={18} />
                Chat WhatsApp
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-all text-sm"
              >
                <ArrowDown size={18} />
                Lihat Portfolio
              </a>
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-all text-sm"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl animate-pulse-glow" />
              <img
                src={portraitImg}
                alt="Totok Suryanto - Surya Ban-jang"
                className="relative w-80 h-80 object-cover rounded-2xl glass border-2 border-primary/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
