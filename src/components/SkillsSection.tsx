import { motion } from "framer-motion";
import { Brain, Users, Settings, Code, Database, GitBranch, Layout, Handshake } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Product Management (AI & Analytics)",
    value: "Dari discovery sampai go-to-market, berbasis data.",
    chips: ["Product Roadmap", "AI/ML Products", "Data Analytics"],
  },
  {
    icon: Users,
    title: "Agile Coaching & Scrum Mastery",
    value: "Membangun tim yang self-organizing dan high-performing.",
    chips: ["PSM I & II", "Sprint Planning", "Retrospectives"],
  },
  {
    icon: Settings,
    title: "System Thinking & Delivery Governance",
    value: "Melihat keseluruhan, mengeksekusi secara terstruktur.",
    chips: ["OKR", "Delivery Metrics", "Risk Management"],
  },
  {
    icon: Code,
    title: "Backend/API Engineering",
    value: "Arsitektur yang scalable dan maintainable.",
    chips: ["Java", "REST API", "Microservices"],
  },
  {
    icon: Database,
    title: "Data & Database",
    value: "Oracle + modern stack mindset, optimized queries.",
    chips: ["Oracle", "PostgreSQL", "Data Modeling"],
  },
  {
    icon: GitBranch,
    title: "DevOps Mindset",
    value: "CI/CD, reliability, dan release yang smooth.",
    chips: ["CI/CD", "Docker", "Release Mgmt"],
  },
  {
    icon: Layout,
    title: "UI/UX Collaboration",
    value: "IA, usability testing, conversion optimization.",
    chips: ["Figma", "Usability", "Conversion"],
  },
  {
    icon: Handshake,
    title: "Stakeholder Management",
    value: "Cross-team alignment dan komunikasi yang efektif.",
    chips: ["Facilitation", "Alignment", "Communication"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        Skills & Capabilities
      </motion.h2>
      <p className="section-subtitle">Kombinasi unik engineering, product, dan agile delivery.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card-template group"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsl(174 72% 50% / 0.1)" }}>
              <skill.icon size={22} className="text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-heading text-sm font-bold text-foreground mb-1.5">
              {skill.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{skill.value}</p>
            <div className="flex flex-wrap gap-1.5">
              {skill.chips.map((chip) => (
                <span key={chip} className="chip !text-[10px] !px-2 !py-0.5">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
