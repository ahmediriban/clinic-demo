"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsArrowRight, BsWhatsapp, BsCurrencyDollar, BsHeadset, BsAward, BsShieldCheck } from "react-icons/bs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "@/i18n/navigation";

const FEATURE_ICONS = {
  savings: BsCurrencyDollar,
  support: BsHeadset,
  quality: BsAward,
  warranty: BsShieldCheck,
};

export default function DentalTourismSection() {
  const t = useTranslations("dentalTourism");
  const tw = useTranslations("whatsapp");

  const whatsappUrl = buildWhatsAppUrl(tw("generalMessage"));
  const featureKeys = Object.keys(FEATURE_ICONS) as (keyof typeof FEATURE_ICONS)[];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-light)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 end-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 start-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              {t("title")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t("subtitle")}
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              {t("description")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/international-patients"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-dark)] font-bold px-7 py-3.5 rounded-full hover:bg-[var(--color-accent-light)] transition-all shadow-lg"
              >
                {t("cta")}
                <BsArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("whatsappAria")}
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
              >
                <BsWhatsapp className="w-5 h-5" />
                {t("whatsappCta")}
              </a>
            </div>
          </motion.div>

          {/* Feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 mt-12 lg:mt-0"
          >
            {featureKeys.map((key, i) => {
              const Icon = FEATURE_ICONS[key];
              const title = t(`features.${key}.title` as Parameters<typeof t>[0]);
              const desc = t(`features.${key}.description` as Parameters<typeof t>[0]);

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
                >
                  <Icon className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                  <p className="text-amber-100 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
