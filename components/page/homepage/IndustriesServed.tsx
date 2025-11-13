"use client";

import { motion } from "framer-motion";
import industries_served from "@/content/homepage/industries_served.json";
import { theme } from "@/assets/theme";
import { container } from "@/assets/container";

export default function IndustriesServed() {
  return (
    <section className="py-16 bg-black text-white">
      <div className={`${container}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`${theme.typography.techno_36_semibold} mb-5`}>
            {industries_served.headline}
          </h2>
          <div className="flex flex-wrap gap-6">
            {industries_served.industries.map((name, i) => (
              <motion.div
                key={name}
                className={`flex-1 min-w-[200px] text-center rounded-xl py-16 ${theme.typography.techno_20_semibold}`}
                style={{
                  background: `${theme.colors.purple[900]}`,
                  color: theme.colors.purple[300],
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
