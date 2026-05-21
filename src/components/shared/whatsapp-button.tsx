"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  const [hovered, setHovered] = useState(false);

  const message = t("defaultMessage");
  const url = buildWhatsAppUrl(message);

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-[var(--color-dark)] text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap"
          >
            {t("floatingLabel")}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("floatingLabel")}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl hover:shadow-2xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        <BsWhatsapp className="w-7 h-7 text-white" />

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </div>
  );
}
