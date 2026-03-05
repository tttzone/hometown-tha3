import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import portraitImg from "@/assets/totok.jpeg";
import bgImg from "@/assets/background_ciremai.jpg";

const WA_LINK = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20tertarik%20diskusi%20project.%20Boleh%20share%20kebutuhan%20%26%20timeline%3F";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Gunung Ciremai landscape"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 mx-auto py-40 md:py-52 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <img
              src={portraitImg}
              alt="Totok Suryanto"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto border-2"
              style={{ borderColor: "hsl(32 80% 55% / 0.3)" }}
            />
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm tracking-[0.3em] uppercase mb-6 font-medium"
            style={{ color: "hsl(32 80% 60%)" }}
          >
            Totok Suryanto
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.15] text-foreground"
          >
            Building AI-Driven Digital Systems for{" "}
            <span className="text-gradient-primary italic">Public Impact</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed text-muted-foreground"
          >
            From national digital platforms to AI-powered government intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#portfolio" className="btn-primary">
              <ArrowDown size={16} />
              View My Work
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle size={16} />
              Connect With Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, hsl(30 15% 6%))" }} />
    </section>
  );
};

export default HeroSection;
