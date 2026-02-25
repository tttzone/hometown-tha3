import { motion } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Top Inovasi Pelayanan Publik Terpuji 2022",
    context: "Penghargaan nasional untuk inovasi pelayanan publik yang berdampak luas.",
  },
  {
    icon: Star,
    title: "Best Government Collaboration for Pandemic Solution",
    context: "Kolaborasi terbaik antara pemerintah dan teknologi dalam penanganan pandemi.",
  },
  {
    icon: Award,
    title: "Karya Terpilih Pertama",
    context: "Karya terpilih pertama dalam kompetisi solusi digital nasional.",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-28 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        Achievements
      </motion.h2>
      <p className="section-subtitle">Penghargaan dan pencapaian yang membanggakan.</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-template text-center group"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "hsl(16 80% 60% / 0.1)" }}>
              <a.icon size={28} className="text-accent group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-heading text-sm font-bold text-foreground mb-3">{a.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{a.context}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
