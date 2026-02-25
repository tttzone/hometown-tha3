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
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 mx-auto py-36 md:py-44 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: "hsl(174 72% 50%)" }}
            >
              Technologist & Product Leader
            </motion.p>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-primary leading-[1.1]">
              Hometown Tha-Tha-Tha
            </h1>

            <p className="text-base md:text-lg mb-8 max-w-xl leading-relaxed" style={{ color: "hsl(200 20% 80%)" }}>
              Saya <span className="text-foreground font-semibold">Totok Suryanto</span> (Surya Ban-jang) — technologist & product leader yang nggabungin engineering, agile delivery, dan UI/UX mindset biar produk terasa enak dipakai dan gampang diskalakan.
            </p>

            {/* Quote */}
            <div className="card-template border-l-4 !border-l-primary p-5 mb-8 max-w-xl">
              <p className="font-heading text-xl md:text-2xl font-bold text-foreground italic">
                "Tidak Ada Hal Baru di Bawah Matahari."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Yang bikin beda itu cara kita merapikan, mempercepat, dan memanusiakan pengalaman pengguna.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={18} />
                Chat WhatsApp
              </a>
              <a href="#portfolio" className="btn-secondary">
                <ArrowDown size={18} />
                Lihat Portfolio
              </a>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl blur-3xl" style={{ background: "hsl(174 72% 50% / 0.08)" }} />
              <img
                src={portraitImg}
                alt="Totok Suryanto - Surya Ban-jang"
                className="relative w-80 h-80 object-cover rounded-3xl border-2 shadow-2xl"
                style={{
                  borderColor: "hsl(174 72% 50% / 0.2)",
                  boxShadow: "0 20px 60px hsl(220 20% 4% / 0.6)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
