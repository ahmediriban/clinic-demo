"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsWhatsapp, BsCalendar2Check, BsStarFill, BsArrowDown } from "react-icons/bs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const HERO_IMAGE = "/images/hero/clinic-hero.webp";

export default function HeroSection() {
  const t = useTranslations("hero");
  const tw = useTranslations("whatsapp");

  const whatsappUrl = buildWhatsAppUrl(tw("defaultMessage"));

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0D1B2E] via-[#1B3A5C] to-[#0D1B2E]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Al Fawzy Dental Clinic"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2E] via-[#0D1B2E]/80 to-transparent" />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-40 -end-40 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
      <div className="absolute -bottom-40 -start-40 w-96 h-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <BsStarFill className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            {t("badge")}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {t("headline")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl"
          >
            {t("subheadline")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#20bc5c] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <BsWhatsapp className="w-5 h-5" />
              {t("ctaBook")}
            </a>

            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <BsCalendar2Check className="w-5 h-5" />
              {t("ctaConsult")}
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-start">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <BsArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
