"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsAward, BsPeopleFill, BsPersonBadge, BsStarFill } from "react-icons/bs";
import { MdLocationCity } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";

const STATS = [
  { key: "years", iconKey: "award", color: "bg-blue-50 text-blue-600" },
  { key: "patients", iconKey: "people", color: "bg-green-50 text-green-600" },
  { key: "doctors", iconKey: "badge", color: "bg-purple-50 text-purple-600" },
  { key: "rating", iconKey: "star", color: "bg-amber-50 text-amber-600" },
  { key: "branches", iconKey: "city", color: "bg-indigo-50 text-indigo-600" },
  { key: "dailyPatients", iconKey: "calendar", color: "bg-rose-50 text-rose-600" },
] as const;

const ICONS = {
  award: BsAward,
  people: BsPeopleFill,
  badge: BsPersonBadge,
  star: BsStarFill,
  city: MdLocationCity,
  calendar: FaCalendarCheck,
};

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] mb-3">
            {t("title")}
          </h2>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.iconKey];
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-primary)]/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-[var(--color-dark)] mb-1">
                  {t(`${stat.key}Value` as Parameters<typeof t>[0])}
                </div>
                <div className="text-xs text-[var(--color-muted)] font-medium leading-tight">
                  {t(stat.key as Parameters<typeof t>[0])}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
