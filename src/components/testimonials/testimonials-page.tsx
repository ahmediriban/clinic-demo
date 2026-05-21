"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsStarFill, BsWhatsapp } from "react-icons/bs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";

const MOCK_REVIEWS = [
  { name: "Ahmed M.", stars: 5, text: "Excellent service! Dr. Ahmed Fawzy transformed my smile completely. The clinic is very professional and uses the latest technology.", location: "Cairo" },
  { name: "Sarah K.", stars: 5, text: "I came from abroad specifically for dental implants. The team was incredibly supportive and the results exceeded my expectations.", location: "UK" },
  { name: "Mohamed A.", stars: 5, text: "The sedation dentistry option was perfect for me. I had multiple procedures done in one comfortable session.", location: "Giza" },
  { name: "Fatima R.", stars: 5, text: "My E-max veneers look absolutely natural. I receive compliments on my smile every day!", location: "Alexandria" },
  { name: "Omar H.", stars: 5, text: "Full mouth rehabilitation changed my life. The team was patient, professional, and the results are stunning.", location: "New Cairo" },
  { name: "Nour S.", stars: 4, text: "Great experience overall. The staff is friendly, the clinic is spotless, and the results speak for themselves.", location: "Dokki" },
  { name: "Yusuf A.", stars: 5, text: "Best dental clinic in Egypt. I trust them completely with my family's dental care.", location: "Heliopolis" },
  { name: "Layla T.", stars: 5, text: "The digital smile design process was amazing — I could see my new smile before treatment even started!", location: "Maadi" },
];

export default function TestimonialsPageContent() {
  const t = useTranslations("testimonials");
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
              className="text-amber-100 text-xl max-w-2xl mx-auto mb-6"
            >
              {t("subtitle")}
            </motion.p>

            {/* Google rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <BsStarFill key={i} className="w-5 h-5 text-[var(--color-accent)]" />
                ))}
              </div>
              <span className="text-white font-bold">4.8</span>
              <span className="text-gray-300 text-sm">{t("googleRating")}</span>
            </motion.div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {MOCK_REVIEWS.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-all"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.stars)].map((_, s) => (
                      <BsStarFill key={s} className="w-4 h-4 text-[var(--color-accent)]" />
                    ))}
                  </div>

                  <p className="text-[var(--color-dark)] text-sm leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-2 pt-3 border-t border-[var(--color-border)]">
                    <div className="w-8 h-8 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="text-[var(--color-dark)] font-semibold text-sm">{review.name}</p>
                      <p className="text-[var(--color-muted)] text-xs">{review.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
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
