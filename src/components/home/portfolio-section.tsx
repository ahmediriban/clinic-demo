"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const CASE_IMAGE = "/images/hero/clinic-hero.webp";

const CASE_KEYS = ["case1", "case2", "case3", "case4"] as const;

const CASE_GRADIENTS = [
  "from-blue-400 to-blue-600",
  "from-teal-400 to-teal-600",
  "from-violet-400 to-violet-600",
  "from-amber-400 to-amber-600",
];

export default function PortfolioSection() {
  const t = useTranslations("portfolio");

  return (
    <section className="py-20 bg-[var(--color-surface)]">
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
          {CASE_KEYS.map((key, i) => {
            const title = t(`cases.${key}.title` as Parameters<typeof t>[0]);
            const procedure = t(`cases.${key}.procedure` as Parameters<typeof t>[0]);
            const concern = t(`cases.${key}.concern` as Parameters<typeof t>[0]);
            const outcome = t(`cases.${key}.outcome` as Parameters<typeof t>[0]);

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Case image with before/after overlay */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={CASE_IMAGE}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${CASE_GRADIENTS[i]} opacity-60`} />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-base leading-tight">{title}</h3>
                    <span className="text-white/80 text-xs mt-1">{procedure}</span>
                  </div>

                  {/* Before/After badges */}
                  <div className="absolute top-3 start-3 flex gap-2">
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {t("before")}
                    </span>
                    <span className="bg-[var(--color-primary)]/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {t("after")}
                    </span>
                  </div>
                </div>

                {/* Case details */}
                <div className="p-4">
                  <div className="text-xs text-[var(--color-muted)] mb-1">
                    <span className="font-medium text-[var(--color-dark)]">Concern: </span>{concern}
                  </div>
                  <div className="text-xs text-[var(--color-muted)]">
                    <span className="font-medium text-green-600">Result: </span>{outcome}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[var(--color-primary-dark)] transition-colors shadow-md"
          >
            {t("viewAll")}
            <BsArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
