"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsWhatsapp } from "react-icons/bs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";
import Image from "next/image";

const CASE_IMAGE = "/images/hero/clinic-hero.webp";

const ALL_CASES = [
  { key: "case1", gradient: "from-blue-400 to-blue-600" },
  { key: "case2", gradient: "from-teal-400 to-teal-600" },
  { key: "case3", gradient: "from-violet-400 to-violet-600" },
  { key: "case4", gradient: "from-amber-400 to-amber-600" },
  { key: "case1", gradient: "from-rose-400 to-rose-600" },
  { key: "case2", gradient: "from-indigo-400 to-indigo-600" },
  { key: "case3", gradient: "from-emerald-400 to-emerald-600" },
] as const;

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const tw = useTranslations("whatsapp");

  const whatsappUrl = buildWhatsAppUrl(tw("defaultMessage"));

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary-dark)] pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-200 text-xl max-w-2xl mx-auto"
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ALL_CASES.map((item, i) => {
                const title = t(`cases.${item.key}.title` as Parameters<typeof t>[0]);
                const procedure = t(`cases.${item.key}.procedure` as Parameters<typeof t>[0]);
                const outcome = t(`cases.${item.key}.outcome` as Parameters<typeof t>[0]);

                return (
                  <motion.div
                    key={`${item.key}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={CASE_IMAGE}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50`} />
                      <div className="absolute top-3 start-3 flex gap-1.5">
                        <span className="bg-black/50 text-white text-xs font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
                          {t("before")}
                        </span>
                        <span className="bg-green-500/80 text-white text-xs font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
                          {t("after")}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[var(--color-dark)] text-sm mb-1">{title}</h3>
                      <p className="text-xs text-[var(--color-muted)] mb-1">{procedure}</p>
                      <p className="text-xs text-green-600 font-medium">{outcome}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <p className="text-[var(--color-dark)] font-semibold text-lg mb-4">
                {t("subtitle")}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bc5c] transition-all shadow-lg text-base"
              >
                <BsWhatsapp className="w-5 h-5" />
                {tw("floatingLabel")}
              </a>
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
