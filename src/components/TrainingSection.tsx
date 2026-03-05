import { motion } from "framer-motion";

import certEu from "@/assets/cert-eu.jpeg";
import certGoexport from "@/assets/cert-goexport.jpeg";
import certYea from "@/assets/cert-yea.png";
import certMinimba from "@/assets/cert-minimba.png";
import certNudira from "@/assets/cert-nudira.jpg";
import certPmi from "@/assets/cert-pmi.webp";
import certPsm1 from "@/assets/cert-psm1.png";
import certPsm2 from "@/assets/cert-psm2.png";
import certPspo from "@/assets/cert-pspo.png";
import certMmbc from "@/assets/cert-mmbc.png";

type Cert = {
  name: string;
  org: string;
  category: string;
  logo: string;
};

const certs: Cert[] = [
  { name: "Professional Scrum Master I", org: "Scrum.org", category: "Professional", logo: certPsm1 },
  { name: "Professional Scrum Master II", org: "Scrum.org", category: "Professional", logo: certPsm2 },
  { name: "Professional Scrum Product Owner I", org: "Scrum.org", category: "Professional", logo: certPspo },
  { name: "Project Management Professional", org: "PMI", category: "Professional", logo: certPmi },
  { name: "Mini MBA Online Program", org: "Kuncie × SBM ITB", category: "Executive Education", logo: certMinimba },
  { name: "Go Export – UMKM", org: "UMKM Go Export", category: "Business", logo: certGoexport },
  { name: "Entrepreneur University", org: "Entrepreneur University", category: "Business", logo: certEu },
  { name: "Pelatihan Bisnis Ekspor", org: "Nudira Learning Centre", category: "Business", logo: certNudira },
  { name: "Millionaire Mindset Bootcamp", org: "MMBC", category: "Business", logo: certMmbc },
  { name: "Young Entrepreneur Academy", org: "YEA Indonesia", category: "Business", logo: certYea },
];

const TrainingSection = () => (
  <section id="training" className="py-32 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">Training & Certifications</h2>
        <p className="section-subtitle">Continuous learning across product, agile, and business domains.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="card-template flex items-center gap-5 !p-5 group"
          >
            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white/5 flex items-center justify-center">
              <img
                src={cert.logo}
                alt={cert.name}
                className="w-full h-full object-contain p-1"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground leading-snug mb-1 truncate">{cert.name}</p>
              <p className="text-xs text-muted-foreground truncate">{cert.org}</p>
              <span className="inline-block mt-1.5 text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{ background: "hsl(32 80% 55% / 0.1)", color: "hsl(32 80% 60%)" }}
              >
                {cert.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
