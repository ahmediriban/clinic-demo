"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsArrowRight, BsWhatsapp, BsCheckCircle } from "react-icons/bs";
import { Link } from "@/i18n/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";

const ALL_SERVICES = [
  {
    key: "implants",
    route: "/services/dental-implants",
    whatsappKey: "implantMessage",
    gradient: "from-blue-500 to-blue-700",
    features: ["implants.features.0", "implants.features.1", "implants.features.2", "implants.features.3"],
  },
  {
    key: "fullMouth",
    route: "/services/full-mouth-rehabilitation",
    whatsappKey: "fullMouthMessage",
    gradient: "from-teal-500 to-teal-700",
    features: ["fullMouth.features.0", "fullMouth.features.1", "fullMouth.features.2", "fullMouth.features.3"],
  },
  {
    key: "veneers",
    route: "/services/cosmetic-veneers",
    whatsappKey: "veneerMessage",
    gradient: "from-violet-500 to-violet-700",
    features: ["veneers.features.0", "veneers.features.1", "veneers.features.2", "veneers.features.3"],
  },
  {
    key: "sedation",
    route: "/services/sedation-dentistry",
    whatsappKey: "sedationMessage",
    gradient: "from-indigo-500 to-indigo-700",
    features: ["sedation.features.0", "sedation.features.1", "sedation.features.2", "sedation.features.3"],
  },
  {
    key: "whitening",
    route: null,
    whatsappKey: "generalMessage",
    gradient: "from-amber-500 to-amber-700",
    features: [],
  },
  {
    key: "orthodontics",
    route: null,
    whatsappKey: "generalMessage",
    gradient: "from-green-500 to-green-700",
    features: [],
  },
  {
    key: "rootCanal",
    route: null,
    whatsappKey: "generalMessage",
    gradient: "from-rose-500 to-rose-700",
    features: [],
  },
  {
    key: "crowns",
    route: null,
    whatsappKey: "generalMessage",
    gradient: "from-cyan-500 to-cyan-700",
    features: [],
  },
  {
    key: "smileMakeover",
    route: null,
    whatsappKey: "generalMessage",
    gradient: "from-pink-500 to-pink-700",
    features: [],
  },
  {
    key: "digitalSmile",
    route: null,
    whatsappKey: "generalMessage",
    gradient: "from-orange-500 to-orange-700",
    features: [],
  },
] as const;

export default function ServicesPage() {
  const t = useTranslations("services");
  const tw = useTranslations("whatsapp");

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

        {/* Services grid */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ALL_SERVICES.map((service, i) => {
                const name = t(`${service.key}.name` as Parameters<typeof t>[0]);
                const tagline = t(`${service.key}.tagline` as Parameters<typeof t>[0]);
                const description = t(`${service.key}.description` as Parameters<typeof t>[0]);
                let features: string[] | undefined;
                try {
                  const raw = (t.raw as (key: string) => unknown)(`${service.key}.features`);
                  features = Array.isArray(raw) ? (raw as string[]) : undefined;
                } catch { features = undefined; }
                const whatsappMsg = tw(service.whatsappKey as Parameters<typeof tw>[0]);
                const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

                return (
                  <motion.div
                    key={service.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-[var(--color-border)]"
                  >
                    {/* Color header */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-6`}>
                      <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
                      <p className="text-white/80 text-sm">{tagline}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">
                        {description}
                      </p>

                      {features && features.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {features.map((feature, fi) => (
                            <li key={fi} className="flex items-center gap-2 text-sm text-[var(--color-dark)]">
                              <BsCheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex gap-3">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#20bc5c] transition-colors"
                        >
                          <BsWhatsapp className="w-4 h-4" />
                          {t("bookService")}
                        </a>
                        {service.route && (
                          <Link
                            href={service.route}
                            className="flex items-center justify-center gap-1 border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                          >
                            {t("viewAll")}
                            <BsArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
