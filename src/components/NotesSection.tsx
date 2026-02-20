import { motion } from "framer-motion";
import bgImg from "@/assets/background_ciremai.jpg";

const NotesSection = () => (
  <section id="notes" className="py-24 relative overflow-hidden">
    {/* Subtle bg */}
    <div className="absolute inset-0 opacity-[0.06]">
      <img src={bgImg} alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-gradient-warm">Catatan</h2>
        <p className="text-lg md:text-xl text-foreground italic leading-relaxed font-heading">
          "Selamat datang di beranda kecilku, tempat ide mengalir setenang air dari puncak Ciremai."
        </p>
        <p className="text-sm text-muted-foreground mt-6">
          — Surya Ban-jang (Totok Suryanto)
        </p>
      </motion.div>
    </div>
  </section>
);

export default NotesSection;
