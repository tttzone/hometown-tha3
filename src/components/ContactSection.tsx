import { motion } from "framer-motion";
import { MessageCircle, Linkedin, Mail } from "lucide-react";

const WA_CONTACT = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20ingin%20diskusi%20tentang%20%5BMVP%2FRevamp%2FAutomation%5D.%20Kebutuhan%20saya%3A%20____.%20Timeline%3A%20____.%20Budget%20range%3A%20____.";
const LINKEDIN_LINK = "https://www.linkedin.com/in/totok-suryanto";

const quickChips = [
  { label: "Mau diskusi MVP", wa: "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20mau%20diskusi%20MVP.%20Bisa%20cerita%20lebih%20lanjut%3F" },
  { label: "Mau revamp UI/UX + performance", wa: "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20mau%20revamp%20UI%2FUX%20%2B%20performance.%20Bisa%20bantu%3F" },
  { label: "Butuh agile coaching / delivery improvement", wa: "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20butuh%20agile%20coaching%20%2F%20delivery%20improvement.%20Bisa%20diskusi%3F" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
          Let's build something that feels effortless.
        </h2>
        <p className="text-secondary-foreground text-base mb-8">
          Kalau kamu butuh orang yang bisa nyambungin engineering + product + UX tanpa bikin ribet, chat aja.
        </p>

        <a
          href={WA_CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all animate-pulse-glow"
        >
          <MessageCircle size={20} />
          Chat via WhatsApp
        </a>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {quickChips.map((chip) => (
            <a
              key={chip.label}
              href={chip.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-muted hover:text-primary transition-all border border-border"
            >
              {chip.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-border text-foreground hover:border-primary hover:text-primary transition-all"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={16} />
            totok.suryanto@rocketmail.com
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
