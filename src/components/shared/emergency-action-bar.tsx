"use client";

import { BsWhatsapp, BsTelephone, BsCalendar2Check, BsGeoAlt } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { buildWhatsAppUrl, CALL_PHONE, MAPS_LINK_DOKKI } from "@/lib/whatsapp";
import { Link } from "@/i18n/navigation";

export default function EmergencyActionBar() {
  const t = useTranslations("emergency");
  const tw = useTranslations("whatsapp");

  const whatsappUrl = buildWhatsAppUrl(tw("emergencyLabel"));

  return (
    <div className="fixed bottom-0 start-0 end-0 z-40 md:hidden">
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-4">
          <a
            href={`tel:${CALL_PHONE}`}
            className="flex flex-col items-center justify-center py-2.5 gap-1 text-[var(--color-primary)] hover:bg-blue-50 transition-colors"
          >
            <BsTelephone className="w-5 h-5" />
            <span className="text-xs font-semibold">{t("call")}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2.5 gap-1 text-[#15803d] hover:bg-green-50 transition-colors"
          >
            <BsWhatsapp className="w-5 h-5" />
            <span className="text-xs font-semibold">{t("whatsapp")}</span>
          </a>

          <Link
            href="/book"
            className="flex flex-col items-center justify-center py-2.5 gap-1 bg-[var(--color-primary)] text-white"
          >
            <BsCalendar2Check className="w-5 h-5" />
            <span className="text-xs font-semibold">{t("book")}</span>
          </Link>

          <a
            href={MAPS_LINK_DOKKI}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2.5 gap-1 text-[var(--color-accent-dark)] hover:bg-amber-50 transition-colors"
          >
            <BsGeoAlt className="w-5 h-5" />
            <span className="text-xs font-semibold">{t("directions")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
