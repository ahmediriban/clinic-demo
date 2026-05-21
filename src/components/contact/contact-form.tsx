"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.union([z.string().email(), z.literal("")]).optional(),
  service: z.string().optional(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const tw = useTranslations("whatsapp");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const message = `${tw("generalMessage")}

Name: ${data.name}
Phone: ${data.phone}
${data.email ? `Email: ${data.email}` : ""}
${data.service ? `Service: ${data.service}` : ""}

Message: ${data.message}`;

    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-green-50 rounded-2xl text-center border border-green-200">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-green-700 font-semibold">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
          {t("name")}
        </label>
        <input
          {...register("name")}
          placeholder={t("namePlaceholder")}
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 text-sm transition-all"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
          {t("phone")}
        </label>
        <input
          {...register("phone")}
          placeholder={t("phonePlaceholder")}
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 text-sm transition-all"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
          {t("email")}
        </label>
        <input
          {...register("email")}
          placeholder={t("emailPlaceholder")}
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 text-sm transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
          {t("service")}
        </label>
        <input
          {...register("service")}
          placeholder={t("servicePlaceholder")}
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 text-sm transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
          {t("message")}
        </label>
        <textarea
          {...register("message")}
          placeholder={t("messagePlaceholder")}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 text-sm transition-all resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--color-primary)] text-white font-bold py-3.5 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
