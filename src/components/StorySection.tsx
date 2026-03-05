import { motion } from "framer-motion";
import bgImg from "@/assets/background_ciremai.jpg";

const StorySection = () => (
  <section id="story" className="py-32 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">Why I Build</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        {/* Left — landscape image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={bgImg}
              alt="Gunung Ciremai — Hometown"
              className="w-full h-80 lg:h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(30 15% 6% / 0.6), transparent)" }} />
            <p className="absolute bottom-6 left-6 text-sm text-foreground/70 italic font-heading">
              Gunung Ciremai, Jawa Barat
            </p>
          </div>
        </motion.div>

        {/* Right — narrative */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-base md:text-lg text-secondary-foreground leading-[1.9]">
            Saya memulai karier di IT sejak 2012. Waktu membawa saya melewati banyak ruang: membangun sistem, mengawal delivery, hingga menguatkan peran sebagai <span className="text-foreground font-medium italic">Agile Coach</span>—dan sekitar 8 tahun terakhir saya bertumbuh di Telkom.
          </p>
          <p className="text-base md:text-lg text-secondary-foreground leading-[1.9]">
            Namun hidup saya tidak hanya tentang teknologi dan AI. Saya juga jatuh cinta pada entrepreneurship—pada cara ide berubah menjadi nilai, dan nilai menjadi dampak yang bisa bertahan.
          </p>
          <p className="text-base md:text-lg text-secondary-foreground leading-[1.9]">
            Sekarang saya menetap di kaki <span className="text-foreground font-medium">Gunung Ciremai</span>. Di antara udara yang tenang dan langit yang sering berubah warna, motivasi saya tetap sama: membangun sesuatu yang lebih besar dari diri saya sendiri—terutama ketika karya itu bisa memberi manfaat yang luas, dan menjadi bagian dari dakwah: mengajak pada kebaikan melalui tindakan.
          </p>

          {/* Quote */}
          <blockquote className="border-l-2 pl-6 mt-8" style={{ borderColor: "hsl(32 80% 55% / 0.4)" }}>
            <p className="font-heading text-lg italic text-foreground">
              "Sebaik-baik manusia adalah yang bermanfaat bagi orang lain."
            </p>
            <cite className="text-sm text-muted-foreground mt-2 block not-italic">
              — Hadits Riwayat Ath-Thabrani dan Ahmad
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;
