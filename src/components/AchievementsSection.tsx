import { motion } from "framer-motion";
import logoPL from "@/assets/logo-pl.jpg";
import logoSetneg from "@/assets/logo-setneg.png";

const impacts = [
  {
    title: "PeduliLindungi National Platform",
    year: "2019 – 2022",
    description:
      "Contributed to Indonesia's national digital response during the COVID-19 pandemic through the PeduliLindungi platform, enabling millions of citizens to access vaccination records, mobility verification, and public health services.",
    tags: ["National Digital Platform", "Public Health Infrastructure", "Millions of Users"],
    logo: logoPL,
  },
  {
    title: "AI Situation Room – Ministry of State Secretariat",
    year: "2025 – 2026",
    description:
      "Participated in the development of an AI-powered Situation Room platform for the Ministry of State Secretariat, designed to support real-time monitoring, strategic analytics, and decision intelligence.",
    tags: ["Government AI Platform", "Strategic Intelligence", "Real-Time Monitoring"],
    logo: logoSetneg,
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-32 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">Impact I've Helped Create</h2>
        <p className="section-subtitle">Contributing to systems that serve millions.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {impacts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="card-template !p-9"
          >
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center mb-6 bg-background border border-border/40">
                <img src={item.logo} alt={item.title} className="w-full h-full object-contain" />
              </div>
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-1 leading-tight">
              {item.title}
            </h3>
            <p className="text-xs text-primary font-medium mb-4">{item.year}</p>
            <p className="text-sm text-muted-foreground leading-[1.8] mb-6">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="chip !text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
