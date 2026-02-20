import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MessageCircle, Linkedin, X } from "lucide-react";

const WA_LINK = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20tertarik%20diskusi%20project.%20Boleh%20share%20kebutuhan%20%26%20timeline%3F";
const LINKEDIN_LINK = "https://www.linkedin.com/in/totok-suryanto";
const WA_CONTACT = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20ingin%20diskusi%20tentang%20%5BMVP%2FRevamp%2FAutomation%5D.%20Kebutuhan%20saya%3A%20____.%20Timeline%3A%20____.%20Budget%20range%3A%20____.";

type PortfolioItem = {
  name: string;
  desc: string;
  tags: string[];
  cta: "detail" | "visit" | "contact";
  url?: string;
  modal?: { bullets: string[] };
};

const items: PortfolioItem[] = [
  {
    name: "MSC (Mustanir ShariaTech Consulting)",
    desc: "Konsultasi teknologi yang rapi, terukur, dan sesuai governance.",
    tags: ["Consulting & Tech"],
    cta: "visit",
    url: "https://mustanir-sc.lovable.app",
  },
  {
    name: "Gandiwa Partner",
    desc: "Platform kolaborasi partner digital.",
    tags: ["Consumer Brand"],
    cta: "visit",
    url: "https://gandiwa-partner.lovable.app",
  },
  {
    name: "Rempah Power",
    desc: "Brand rempah modern dengan kekuatan lokal.",
    tags: ["Consumer Brand"],
    cta: "visit",
    url: "https://project-rempah-power.lovable.app",
  },
  {
    name: "Wadah Rempah",
    desc: "Produk rempah dengan positioning premium dan ritual harian.",
    tags: ["Consumer Brand"],
    cta: "detail",
    modal: {
      bullets: [
        "Produk rempah premium untuk ritual kesehatan harian.",
        "Untuk siapa saja yang ingin gaya hidup sehat berbasis rempah nusantara.",
        "Kamu mendapat produk berkualitas tinggi dengan packaging premium.",
      ],
    },
  },
  {
    name: "ContentCraft AI (UGC dengan AI)",
    desc: "Jasa pembuatan UGC pakai AI: cepat, hemat, tetap terasa human.",
    tags: ["AI Services"],
    cta: "contact",
  },
];

const filters = ["All", "Consulting & Tech", "Consumer Brand", "AI Services"];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.tags.includes(filter));

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-gradient-primary"
        >
          Portfolio Usaha
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-6 flex flex-col hover:glow-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="font-heading text-lg font-bold text-primary">
                  {item.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{item.desc}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
              {item.cta === "detail" && (
                <button
                  onClick={() => setModalItem(item)}
                  className="w-full py-2.5 rounded-lg text-sm font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-all"
                >
                  Lihat Detail
                </button>
              )}
              {item.cta === "visit" && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
                >
                  <ExternalLink size={14} />
                  Visit Site
                </a>
              )}
              {item.cta === "contact" && (
                <div className="flex gap-2">
                  <a
                    href="#contact"
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-all text-center"
                  >
                    Request Paket
                  </a>
                  <a
                    href={WA_CONTACT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalItem && modalItem.modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-background/60 backdrop-blur-sm p-4"
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-t-2xl md:rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-xl font-bold text-foreground">{modalItem.name}</h3>
                <button
                  onClick={() => setModalItem(null)}
                  className="p-1 text-muted-foreground hover:text-foreground"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="space-y-3 mb-6">
                {modalItem.modal.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all"
                >
                  <MessageCircle size={16} />
                  Chat WhatsApp
                </a>
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-border text-foreground hover:border-primary hover:text-primary transition-all"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
