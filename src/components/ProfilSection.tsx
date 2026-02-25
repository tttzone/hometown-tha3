import { motion } from "framer-motion";
import { MessageCircle, Linkedin } from "lucide-react";

const WA_LINK = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20tertarik%20diskusi%20project.%20Boleh%20share%20kebutuhan%20%26%20timeline%3F";
const LINKEDIN_LINK = "https://www.linkedin.com/in/totok-suryanto";

const highlights = [
  "T-shaped skills: engineering + product + agile",
  "System thinking & delivery governance",
  "Stakeholder alignment & cross-team collaboration",
  "Human-centered: clarity > complexity",
];

const ProfilSection = () => (
  <section id="profil" className="py-28 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="section-heading !text-left">Profil</h2>
        <p className="text-secondary-foreground text-base md:text-lg leading-relaxed mb-6">
          Dengan <span className="text-foreground font-semibold">13+ tahun pengalaman sejak 2012</span>, saya telah menjalani berbagai peran — dari <span className="text-foreground font-semibold">Backend Developer, Full Stack Engineer, Team Lead,</span> hingga <span className="text-foreground font-semibold">Agile Coach, Scrum Master, dan Product Manager.</span> Keahlian saya terletak pada membangun produk digital berdampak tinggi, termasuk AI products dan large-scale digital transformation.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          Saya percaya produk hebat lahir dari kolaborasi yang jelas, delivery yang terukur, dan empati terhadap pengguna. Bukan soal teknologi paling canggih, tapi soal solusi yang paling tepat.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-template flex items-start gap-3 !p-4"
            >
              <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{h}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Linkedin size={16} />
            View LinkedIn
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={16} />
            Chat WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProfilSection;
