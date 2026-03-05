import { motion } from "framer-motion";

const ideas = [
  {
    title: "AI for Government",
    summary: "Bagaimana kecerdasan buatan bisa meningkatkan kualitas kebijakan publik melalui data-driven insights.",
  },
  {
    title: "Digital Public Infrastructure",
    summary: "Membangun fondasi digital yang inklusif, scalable, dan aman untuk layanan publik Indonesia.",
  },
  {
    title: "Future of Data-Driven Decision Making",
    summary: "Dari dashboard ke decision intelligence — evolusi cara kita mengambil keputusan strategis.",
  },
  {
    title: "Building Impactful Technology",
    summary: "Teknologi yang bermakna bukan soal yang paling canggih, tapi yang paling tepat untuk masalah yang nyata.",
  },
];

const IdeasSection = () => (
  <section id="ideas" className="py-32 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">Ideas</h2>
        <p className="section-subtitle">Thinking about the intersection of technology, public impact, and human values.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ideas.map((idea, i) => (
          <motion.div
            key={idea.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-template !p-8 group"
          >
            <div className="w-8 h-px mb-6" style={{ background: "hsl(32 80% 55% / 0.4)" }} />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{idea.title}</h3>
            <p className="text-sm text-muted-foreground leading-[1.8]">{idea.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IdeasSection;
