"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  BsAward, BsCpuFill, BsPeopleFill, BsShieldCheck,
  BsCurrencyDollar, BsEmojiSmile, BsBuildings, BsGlobe
} from "react-icons/bs";

const REASON_ICONS = {
  experience: BsAward,
  technology: BsCpuFill,
  team: BsPeopleFill,
  warranty: BsShieldCheck,
  pricing: BsCurrencyDollar,
  comfort: BsEmojiSmile,
  units: BsBuildings,
  international: BsGlobe,
};

const REASON_COLORS = [
  "text-blue-600 bg-blue-50",
  "text-violet-600 bg-violet-50",
  "text-green-600 bg-green-50",
  "text-amber-600 bg-amber-50",
  "text-teal-600 bg-teal-50",
  "text-pink-600 bg-pink-50",
  "text-indigo-600 bg-indigo-50",
  "text-orange-600 bg-orange-50",
];

const REASON_KEYS = Object.keys(REASON_ICONS) as (keyof typeof REASON_ICONS)[];

export default function WhyUsSection() {
  const t = useTranslations("whyUs");

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest mb-3">
            {t("title")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] mb-4">
            {t("subtitle")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASON_KEYS.map((key, i) => {
            const Icon = REASON_ICONS[key];
            const colorClass = REASON_COLORS[i];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[var(--color-dark)] font-bold text-base mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {t(`reasons.${key}.title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {t(`reasons.${key}.description` as Parameters<typeof t>[0])}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
