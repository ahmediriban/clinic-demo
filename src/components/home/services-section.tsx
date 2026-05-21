"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";
import { Link } from "@/i18n/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Image from "next/image";

const SERVICE_IMAGES: Record<string, string> = {
  implants: "/images/hero/clinic-hero.webp",
  fullMouth: "/images/hero/clinic-hero.webp",
  veneers: "/images/hero/clinic-hero.webp",
  sedation: "/images/hero/clinic-hero.webp",
};

const SERVICE_ROUTES: Record<string, string> = {
  implants: "/services/dental-implants",
  fullMouth: "/services/full-mouth-rehabilitation",
  veneers: "/services/cosmetic-veneers",
  sedation: "/services/sedation-dentistry",
};

const SERVICE_COLORS = [
  "from-blue-600 to-blue-800",
  "from-teal-600 to-teal-800",
  "from-violet-600 to-violet-800",
  "from-indigo-600 to-indigo-800",
];

const SERVICE_KEYS = ["implants", "fullMouth", "veneers", "sedation"] as const;

const WHATSAPP_MESSAGE_KEYS: Record<string, string> = {
  implants: "implantMessage",
  fullMouth: "fullMouthMessage",
  veneers: "veneerMessage",
  sedation: "sedationMessage",
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const tw = useTranslations("whatsapp");

  return (
    <section className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_KEYS.map((key, i) => {
            const serviceT = t as (key: string) => string;
            const name = t(`${key}.name` as Parameters<typeof t>[0]);
            const tagline = t(`${key}.tagline` as Parameters<typeof t>[0]);
            const whatsappMsg = tw(WHATSAPP_MESSAGE_KEYS[key] as Parameters<typeof tw>[0]);
            const whatsappUrl = buildWhatsAppUrl(whatsappMsg);
            const route = SERVICE_ROUTES[key];
            const gradient = SERVICE_COLORS[i];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Image area */}
                <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
                  <Image
                    src={SERVICE_IMAGES[key]}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h3 className="text-xl font-bold leading-tight">{name}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                    {tagline}
                  </p>

                  <div className="flex flex-col gap-2">
                    <Link
                      href={route}
                      className="flex items-center justify-between text-[var(--color-primary)] font-semibold text-sm hover:text-[var(--color-primary-dark)] transition-colors"
                    >
                      {t("viewAll")}
                      <BsArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#20bc5c] transition-colors"
                    >
                      <BsWhatsapp className="w-4 h-4" />
                      {t("bookService")}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[var(--color-primary-dark)] transition-colors shadow-md hover:shadow-lg"
          >
            {t("viewAll")}
            <BsArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
