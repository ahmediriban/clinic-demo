"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsWhatsapp, BsCheckCircle, BsArrowRight } from "react-icons/bs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";
import Image from "next/image";

const SERVICE_IMAGES: Record<string, string> = {
  implants: "/images/hero/clinic-hero.webp",
  fullMouth: "/images/hero/clinic-hero.webp",
  veneers: "/images/hero/clinic-hero.webp",
  sedation: "/images/hero/clinic-hero.webp",
};

const WHATSAPP_MESSAGES: Record<string, string> = {
  implants: "implantMessage",
  fullMouth: "fullMouthMessage",
  veneers: "veneerMessage",
  sedation: "sedationMessage",
};

interface ServiceDetailPageProps {
  serviceKey: "implants" | "fullMouth" | "veneers" | "sedation";
}

export default function ServiceDetailPage({ serviceKey }: ServiceDetailPageProps) {
  const t = useTranslations("services");
  const tw = useTranslations("whatsapp");
  const tCommon = useTranslations("common");

  const msgKey = WHATSAPP_MESSAGES[serviceKey] as Parameters<typeof tw>[0];
  const whatsappUrl = buildWhatsAppUrl(tw(msgKey));
  const image = SERVICE_IMAGES[serviceKey];

  const name = t(`${serviceKey}.name` as Parameters<typeof t>[0]);
  const tagline = t(`${serviceKey}.tagline` as Parameters<typeof t>[0]);
  const description = t(`${serviceKey}.description` as Parameters<typeof t>[0]);
  let features: string[] = [];
  try {
    const raw = (t.raw as (key: string) => unknown)(`${serviceKey}.features`);
    features = Array.isArray(raw) ? (raw as string[]) : [];
  } catch { features = []; }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary-dark)] pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src={image} alt={name} fill sizes="100vw" className="object-cover opacity-15" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-semibold px-4 py-2 rounded-full mb-4"
              >
                {tagline}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
              >
                {name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-amber-100 text-lg leading-relaxed mb-8"
              >
                {description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#20bc5c] transition-all shadow-lg"
                >
                  <BsWhatsapp className="w-5 h-5" />
                  {t("bookService")}
                </a>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
                >
                  {tCommon("bookNow")}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        {features && features.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-8 text-center">
                {t("viewAll")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="flex items-center gap-3 p-4 bg-[var(--color-surface)] rounded-xl"
                  >
                    <BsCheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                    <span className="text-[var(--color-dark)] font-medium text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="py-16 bg-[var(--color-surface)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-4">
              {t("bookService")}?
            </h2>
            <p className="text-[var(--color-muted)] mb-8">
              {tagline}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bc5c] transition-all shadow-lg text-base"
              >
                <BsWhatsapp className="w-5 h-5" />
                {t("bookService")}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold px-8 py-4 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all text-base"
              >
                {t("viewAll")}
                <BsArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <EmergencyActionBar />
    </>
  );
}
