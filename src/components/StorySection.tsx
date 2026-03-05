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
            Saya tumbuh di kaki <span className="text-foreground font-medium">Gunung Ciremai</span> — di kota kecil tempat tetangga saling kenal dan gotong-royong bukan sekadar kata. Dari sana saya belajar bahwa dampak terbaik lahir dari kepedulian yang tulus.
          </p>
          <p className="text-base md:text-lg text-secondary-foreground leading-[1.9]">
            Rasa penasaran terhadap teknologi membawa saya jauh dari kampung halaman — membangun platform digital berskala nasional, merancang AI systems, dan memimpin delivery teams. Namun nilai-nilai dari rumah selalu menjadi kompas.
          </p>
          <p className="text-base md:text-lg text-secondary-foreground leading-[1.9]">
            Saya membangun karena percaya teknologi seharusnya <span className="text-foreground font-medium">memanusiakan</span> — mendekatkan layanan publik, mempermudah keputusan, dan menjembatani tradisi dengan inovasi.
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
