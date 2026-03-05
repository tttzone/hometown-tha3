import { motion } from "framer-motion";
import { MessageCircle, Linkedin, Mail } from "lucide-react";

const WA_CONTACT = "https://wa.me/6282111186898?text=Halo%20Surya%2C%20saya%20ingin%20diskusi%20tentang%20kolaborasi.%20Boleh%20share%20kebutuhan%20saya%3F";
const LINKEDIN_LINK = "https://www.linkedin.com/in/totok-suryanto";

const ContactSection = () => (
  <section id="contact" className="py-32 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-heading">Let's Build Something Meaningful</h2>
        <p className="section-subtitle">
          Open for collaboration, consulting, and building impactful digital systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={WA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="mailto:totok.suryanto@rocketmail.com"
            className="btn-secondary"
          >
            <Mail size={18} />
            Email
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
