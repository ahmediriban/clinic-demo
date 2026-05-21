"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { BsWhatsapp, BsCalendar2Check, BsCheckCircleFill } from "react-icons/bs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";

const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1),
  branch: z.string().min(1),
  date: z.string().optional(),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const SERVICE_KEYS = [
  "implants", "fullMouth", "veneers", "sedation",
  "whitening", "orthodontics", "rootCanal", "crowns",
  "smileMakeover", "checkup", "other",
] as const;

const BRANCH_KEYS = ["dokki", "agouza", "newCairo"] as const;

export default function BookingPage() {
  const t = useTranslations("book");
  const tw = useTranslations("whatsapp");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const whatsappDirectUrl = buildWhatsAppUrl(tw("defaultMessage"));

  const onSubmit = (data: BookingFormData) => {
    const msg = `${tw("defaultMessage")}

Name: ${data.name}
Phone: ${data.phone}
${data.email ? `Email: ${data.email}` : ""}
Service: ${data.service}
Branch: ${data.branch}
${data.date ? `Preferred Date: ${data.date}` : ""}
${data.notes ? `Notes: ${data.notes}` : ""}`;

    window.open(buildWhatsAppUrl(msg), "_blank");
    setSubmitted(true);
  };

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
              className="text-amber-100 text-xl max-w-2xl mx-auto"
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-[var(--color-surface)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* WhatsApp option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-8 text-white flex flex-col"
              >
                <BsWhatsapp className="w-12 h-12 mb-6 opacity-90" />
                <h2 className="text-2xl font-bold mb-3">{t("whatsappTitle")}</h2>
                <p className="text-green-100 text-sm leading-relaxed mb-8 flex-1">
                  {t("whatsappDesc")}
                </p>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#128C7E] font-bold py-3.5 rounded-xl hover:bg-green-50 transition-colors text-base"
                >
                  <BsWhatsapp className="w-5 h-5" />
                  {t("whatsappCta")}
                </a>
              </motion.div>

              {/* Booking form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
              >
                <div className="flex items-center gap-2 mb-6">
                  <BsCalendar2Check className="w-6 h-6 text-[var(--color-primary)]" />
                  <h2 className="text-xl font-bold text-[var(--color-dark)]">{t("formTitle")}</h2>
                </div>

                {submitted ? (
                  <div className="text-center py-8">
                    <BsCheckCircleFill className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-[var(--color-dark)] font-semibold text-base">{t("form.success")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[var(--color-dark)] mb-1.5">{t("form.name")}</label>
                        <input
                          {...register("name")}
                          placeholder={t("form.namePlaceholder")}
                          className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none text-sm"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[var(--color-dark)] mb-1.5">{t("form.phone")}</label>
                        <input
                          {...register("phone")}
                          placeholder={t("form.phonePlaceholder")}
                          type="tel"
                          className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none text-sm"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[var(--color-dark)] mb-1.5">{t("form.service")}</label>
                      <select
                        {...register("service")}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none text-sm bg-white"
                      >
                        <option value="">{t("form.servicePlaceholder")}</option>
                        {SERVICE_KEYS.map((key) => (
                          <option key={key} value={key}>
                            {t(`services.${key}` as Parameters<typeof t>[0])}
                          </option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[var(--color-dark)] mb-1.5">{t("form.branch")}</label>
                      <select
                        {...register("branch")}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none text-sm bg-white"
                      >
                        <option value="">{t("form.branchPlaceholder")}</option>
                        {BRANCH_KEYS.map((key) => (
                          <option key={key} value={key}>
                            {t(`branches.${key}` as Parameters<typeof t>[0])}
                          </option>
                        ))}
                      </select>
                      {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[var(--color-dark)] mb-1.5">{t("form.date")}</label>
                      <input
                        {...register("date")}
                        type="date"
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[var(--color-dark)] mb-1.5">{t("form.notes")}</label>
                      <textarea
                        {...register("notes")}
                        placeholder={t("form.notesPlaceholder")}
                        rows={3}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--color-primary)] text-white font-bold py-3.5 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-60"
                    >
                      {isSubmitting ? t("form.submitting") : t("form.submit")}
                    </button>
                  </form>
                )}
              </motion.div>
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
