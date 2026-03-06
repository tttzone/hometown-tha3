import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MessageCircle, X } from "lucide-react";
import logoMsc from "@/assets/logo-msc.png";
import logoGandiwa from "@/assets/logo-gandiwa.png";
import logoRempah from "@/assets/logo-rempah.png";
import logoWadah from "@/assets/logo-wadah.png";
import logoKalam from "@/assets/logo-kalam.png";

const WA_LINK = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20tertarik%20diskusi%20project.";

type PortfolioItem = {
  name: string;
  desc: string;
  tags: string[];
  cta: "detail" | "visit" | "contact";
  url?: string;
  logo?: string;
  modal?: { bullets: string[] };
};

const items: PortfolioItem[] = [
  {
    name: "MSC (Mustanir ShariaTech Consulting)",
    desc: "Membantu bisnis menata bahan, pemasok, dan proses produksi agar berkembang berkelanjutan sesuai prinsip syariat.",
    tags: ["Consulting & Tech"],
    cta: "visit",
    url: "https://msc.asacentra.com/",
    logo: logoMsc,
  },
  {
    name: "Gandiwa Partner",
    desc: "Stokis & distributor produk Madu Gandiwa Power.",
    tags: ["Consumer Brand"],
    cta: "visit",
    url: "https://partner-gandiwa.asacentra.com/",
    logo: logoGandiwa,
  },
  {
    name: "Rempah Power",
    desc: "Ritual harian berbasis rempah & madu — tenang di malam hari, jernih di pagi hari.",
    tags: ["Consumer Brand"],
    cta: "visit",
    url: "https://rempah-power.asacentra.com/",
    logo: logoRempah,
  },
  {
    name: "Wadah Rempah",
    desc: "Produk rempah premium untuk ritual kesehatan harian.",
    tags: ["Consumer Brand"],
    cta: "visit",
    url: "https://wadah-rempah.asacentra.com/",
    logo: logoWadah,
  },
  {
    name: "ContentCraft AI",
    desc: "Jasa pembuatan UGC pakai AI — cepat, hemat, tetap terasa human.",
    tags: ["AI Services"],
    cta: "contact",
  },
  {
    name: "Kalam Cirebon",
    desc: "Kalam Cirebon | Muslim — Bukan sekadar hijrah penampilan, tapi reset Pola Pikir & Pola Sikap.",
    tags: ["Media"],
    cta: "visit",
    url: "https://www.instagram.com/officialkalamcirebon/",
    logo: logoKalam,
  },
];

const filters = ["All", "Consulting & Tech", "Consumer Brand", "AI Services", "Media"];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.tags.includes(filter));

  return (
    <section id="portfolio" className="py-32 relative section-divider">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Selected Projects</h2>
          <p className="section-subtitle">Products and services I'm building & growing.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                filter === f
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-template flex flex-col"
            >
              {item.logo ? (
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center mb-5 bg-background">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "hsl(32 80% 55% / 0.08)" }}
                >
                  <span className="font-heading text-base font-semibold text-primary">
                    {item.name.charAt(0)}
                  </span>
                </div>
              )}
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">{item.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {item.tags.map((t) => (
                  <span key={t} className="chip !text-[10px] !px-2.5 !py-0.5">{t}</span>
                ))}
              </div>
              {item.cta === "visit" && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full !py-2.5 !text-sm text-center"
                >
                  <ExternalLink size={14} />
                  Visit
                </a>
              )}
              {item.cta === "contact" && (
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full !py-2.5 !text-sm text-center"
                >
                  <MessageCircle size={14} />
                  Inquire
                </a>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "hsl(30 15% 6% / 0.7)", backdropFilter: "blur(8px)" }}
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl w-full max-w-lg p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-heading text-xl font-semibold text-foreground">{modalItem.name}</h3>
                <button onClick={() => setModalItem(null)} className="p-1.5 text-muted-foreground hover:text-foreground" aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              <ul className="space-y-3 mb-8">
                {modalItem.modal.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
