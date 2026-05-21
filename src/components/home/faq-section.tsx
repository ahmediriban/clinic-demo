"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsPlus, BsDash } from "react-icons/bs";

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-3">
          {FAQ_KEYS.map((key, i) => {
            const question = t(`questions.${key}.question` as Parameters<typeof t>[0]);
            const answer = t(`questions.${key}.answer` as Parameters<typeof t>[0]);
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-[var(--color-primary)]/30 bg-[var(--color-surface)]"
                    : "border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-start gap-4"
                >
                  <span className={`font-semibold text-base ${isOpen ? "text-[var(--color-primary)]" : "text-[var(--color-dark)]"}`}>
                    {question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-[var(--color-muted)]"
                  }`}>
                    {isOpen ? <BsDash className="w-4 h-4" /> : <BsPlus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-[var(--color-muted)] text-sm leading-relaxed border-t border-[var(--color-border)] pt-4">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
