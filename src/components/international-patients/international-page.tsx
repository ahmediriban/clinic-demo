"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsWhatsapp, BsArrowRight } from "react-icons/bs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";
import DentalTourismSection from "@/components/home/dental-tourism-section";

const STEP_KEYS = ["consultation", "planning", "arrival", "followup"] as const;

export default function InternationalPage() {
  const t = useTranslations("international");
  const tw = useTranslations("whatsapp");

  const whatsappUrl = buildWhatsAppUrl(tw("generalMessage"));

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary-dark)] pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-semibold px-4 py-2 rounded-full mb-4"
            >
              {t("savings")}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-200 text-xl max-w-2xl mx-auto mb-8"
            >
              {t("heroText")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#20bc5c] transition-all shadow-lg"
              >
                <BsWhatsapp className="w-5 h-5" />
                {t("getStarted")}
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
              >
                {t("packages")}
                <BsArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl font-bold text-[var(--color-dark)] mb-3">{t("howItWorks")}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEP_KEYS.map((key, i) => {
                const step = t(`steps.${key}.step` as Parameters<typeof t>[0]);
                const title = t(`steps.${key}.title` as Parameters<typeof t>[0]);
                const description = t(`steps.${key}.description` as Parameters<typeof t>[0]);

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)]"
                  >
                    <div className="text-4xl font-black text-[var(--color-primary)]/20 mb-4">{step}</div>
                    <h3 className="font-bold text-[var(--color-dark)] text-base mb-2">{title}</h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">{description}</p>

                    {i < STEP_KEYS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -end-4 w-8 h-0.5 bg-[var(--color-border)]" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tourism section */}
        <DentalTourismSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <EmergencyActionBar />
    </>
  );
}
