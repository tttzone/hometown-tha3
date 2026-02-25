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
    desc: "Kami membantu Anda menata bahan, pemasok, proses produksi, serta klaim pada kemasan & promosi—agar bisnis berkembang secara berkelanjutan, dengan keuntungan yang berkah dan berkelanjutan, tanpa melanggar prinsip syariat.",
    tags: ["Consulting & Tech"],
    cta: "visit",
    url: "https://mustanir-sc.lovable.app",
  },
  {
    name: "Gandiwa Partner",
    desc: "Stokis atau Distributor Produk Madu Gandiwa Power.",
    tags: ["Consumer Brand"],
    cta: "visit",
    url: "https://gandiwa-partner.lovable.app",
  },
  {
    name: "Rempah Power",
    desc: "Ritual harian berbasis rempah & madu untuk tenang di malam hari, jernih di pagi hari, dan kuat sepanjang hari.",
    tags: ["Consumer Brand"],
    cta: "visit",
    url: "https://project-rempah-power.lovable.app",
  },
  {
    name: "Wadah Rempah",
    desc: "Produk rempah dengan positioning premium dan ritual harian.",
    tags: ["Consumer Brand"],
    cta: "visit",
    url: "https://wadah-rempah.lovable.app",
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
  {
    name: "Kalam Cirebon",
    desc: "Media online lokal berbasis Cirebon yang menyajikan berita dan kejadian lokal melalui sudut pandang Islam Kaffah berlandaskan Al-Qur'an dan Hadis.",
    tags: ["Media"],
    cta: "visit",
    url: "https://www.instagram.com/official_kalam_cirebon/",
  },
];

const filters = ["All", "Consulting & Tech", "Consumer Brand", "AI Services", "Media"];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.tags.includes(filter));

  return (
    <section id="portfolio" className="py-28 relative section-divider">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Portfolio Usaha
        </motion.h2>
        <p className="section-subtitle">Produk dan layanan yang sedang saya bangun & kembangkan.</p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-muted border border-border"
              }`}
              style={filter === f ? { boxShadow: "0 4px 14px hsl(174 72% 50% / 0.25)" } : {}}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-template flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(174 72% 50% / 0.1)" }}>
                <span className="font-heading text-lg font-bold text-primary">
                  {item.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">{item.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {item.tags.map((t) => (
                  <span key={t} className="chip !text-[10px] !px-2 !py-0.5">
                    {t}
                  </span>
                ))}
              </div>
              {item.cta === "detail" && (
                <button
                  onClick={() => setModalItem(item)}
                  className="btn-secondary w-full !py-2.5 !text-sm"
                >
                  Lihat Detail
                </button>
              )}
              {item.cta === "visit" && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full !py-2.5 !text-sm text-center"
                >
                  <ExternalLink size={14} />
                  Visit Site
                </a>
              )}
              {item.cta === "contact" && (
                <div className="flex gap-2">
                  <a href="#contact" className="btn-secondary flex-1 !py-2.5 !text-sm text-center">
                    Request Paket
                  </a>
                  <a
                    href={WA_CONTACT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !px-4 !py-2.5"
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
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
            style={{ background: "hsl(220 20% 7% / 0.6)", backdropFilter: "blur(8px)" }}
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-t-2xl md:rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{modalItem.name}</h3>
                <button
                  onClick={() => setModalItem(null)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="space-y-4 mb-8">
                {modalItem.modal.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  <MessageCircle size={16} />
                  Chat WhatsApp
                </a>
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
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
