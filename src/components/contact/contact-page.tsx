"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsTelephone, BsWhatsapp, BsEnvelope, BsClock, BsGeoAlt } from "react-icons/bs";
import { buildWhatsAppUrl, WHATSAPP_PHONE, CALL_PHONE, CLINIC_EMAIL, MAPS_LINK_DOKKI, MAPS_LINK_AGOUZA, MAPS_LINK_NEW_CAIRO } from "@/lib/whatsapp";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";
import ContactForm from "./contact-form";

const BRANCHES = [
  {
    key: "dokki",
    mapsUrl: MAPS_LINK_DOKKI,
    mapEmbed: "https://maps.google.com/maps?q=96+El+Nile+Street+Dokki+Giza&output=embed",
  },
  {
    key: "agouza",
    mapsUrl: MAPS_LINK_AGOUZA,
    mapEmbed: "https://maps.google.com/maps?q=Al+Galaa+Square+Agouza+Giza&output=embed",
  },
  {
    key: "newCairo",
    mapsUrl: MAPS_LINK_NEW_CAIRO,
    mapEmbed: "https://maps.google.com/maps?q=Agora+Mall+New+Cairo&output=embed",
  },
];

export default function ContactPage() {
  const t = useTranslations("contact");
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

        {/* Contact info + form */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-8">{t("getInTouch")}</h2>

                <div className="space-y-5">
                  <ContactInfoItem
                    icon={<BsTelephone className="w-5 h-5" />}
                    label={t("callUs")}
                    value={t("phone1")}
                    href={`tel:${CALL_PHONE}`}
                    color="bg-blue-50 text-blue-600"
                  />
                  <ContactInfoItem
                    icon={<BsWhatsapp className="w-5 h-5" />}
                    label={t("whatsapp")}
                    value={t("phone2")}
                    href={whatsappUrl}
                    color="bg-green-50 text-green-600"
                    external
                  />
                  <ContactInfoItem
                    icon={<BsEnvelope className="w-5 h-5" />}
                    label={t("email")}
                    value={t("emailAddress")}
                    href={`mailto:${CLINIC_EMAIL}`}
                    color="bg-violet-50 text-violet-600"
                  />
                  <ContactInfoItem
                    icon={<BsClock className="w-5 h-5" />}
                    label={t("hours")}
                    value={t("hoursValue")}
                    color="bg-amber-50 text-amber-600"
                  />
                </div>

                {/* Branches */}
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-[var(--color-dark)] mb-5">{t("branches.title")}</h3>
                  <div className="space-y-4">
                    {BRANCHES.map((branch) => (
                      <a
                        key={branch.key}
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all group"
                      >
                        <div className="w-8 h-8 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <BsGeoAlt className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-[var(--color-dark)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                            {t(`branches.${branch.key}.name` as Parameters<typeof t>[0])}
                          </p>
                          <p className="text-[var(--color-muted)] text-xs mt-0.5">
                            {t(`branches.${branch.key}.address` as Parameters<typeof t>[0])}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
              >
                <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-6">{t("form.title")}</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-8 text-center">{t("findUs")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {BRANCHES.map((branch) => (
                <div key={branch.key} className="rounded-2xl overflow-hidden shadow-md border border-[var(--color-border)]">
                  <div className="bg-[var(--color-primary)] text-white px-4 py-3">
                    <p className="font-semibold text-sm">
                      {t(`branches.${branch.key}.name` as Parameters<typeof t>[0])}
                    </p>
                    <p className="text-blue-200 text-xs mt-0.5">
                      {t(`branches.${branch.key}.address` as Parameters<typeof t>[0])}
                    </p>
                  </div>
                  <div className="h-56 bg-[var(--color-surface)] flex items-center justify-center">
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                    >
                      <BsGeoAlt className="w-12 h-12" />
                      <span className="font-semibold text-sm">{t("bookNow")}</span>
                    </a>
                  </div>
                </div>
              ))}
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

function ContactInfoItem({
  icon,
  label,
  value,
  href,
  color,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  color: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[var(--color-border)] hover:shadow-md transition-all group">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-[var(--color-muted)] font-medium">{label}</p>
        <p className="text-[var(--color-dark)] font-semibold text-sm">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
