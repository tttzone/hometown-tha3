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
  <section id="achievements" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-gradient-primary"
      >
        Achievements
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass rounded-xl p-6 text-center hover:glow-accent transition-all duration-300"
          >
            <a.icon size={36} className="text-accent mx-auto mb-4" />
            <h3 className="font-heading text-sm font-bold text-foreground mb-2">{a.title}</h3>
            <p className="text-xs text-muted-foreground">{a.context}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
