import { motion } from "framer-motion";
import { Brain, Globe, Building2, BarChart3, Cog, LayoutDashboard } from "lucide-react";

const capabilities = [
  { icon: Brain, label: "AI Systems" },
  { icon: Globe, label: "Digital Platforms" },
  { icon: Building2, label: "Government Technology" },
  { icon: BarChart3, label: "Data Intelligence Platforms" },
  { icon: Cog, label: "Automation Systems" },
  { icon: LayoutDashboard, label: "Analytics Dashboards" },
];

const WhatIBuildSection = () => (
  <section id="capabilities" className="py-32 relative section-divider">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">What I Build</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card-template text-center !p-8 group"
          >
            <cap.icon
              size={28}
              className="mx-auto mb-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-sm font-medium text-foreground">{cap.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIBuildSection;
