import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BsWhatsapp, BsTelephone, BsEnvelope, BsInstagram, BsFacebook, BsYoutube, BsClock } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { buildWhatsAppUrl, WHATSAPP_PHONE, CALL_PHONE, CLINIC_EMAIL, SOCIAL_LINKS } from "@/lib/whatsapp";
import Image from "next/image";

const LOGO_URL = "/images/logo.png";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const tw = useTranslations("whatsapp");

  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(tw("defaultMessage"));

  return (
    <footer className="bg-[var(--color-dark)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="relative h-12 w-36 mb-4">
              <Image
                src={LOGO_URL}
                alt="Al Fawzy Dental Clinic"
                fill
                sizes="144px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
              <BsClock className="w-4 h-4 shrink-0" />
              <span>{t("workingHours")}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-700">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: tNav("home") },
                { href: "/team", label: tNav("ourTeam") },
                { href: "/portfolio", label: tNav("portfolio") },
                { href: "/testimonials", label: tNav("testimonials") },
                { href: "/international-patients", label: tNav("internationalPatients") },
                { href: "/contact", label: tNav("contactUs") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-700">
              {t("services")}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/services/dental-implants", label: tNav("dentalImplants") },
                { href: "/services/full-mouth-rehabilitation", label: tNav("fullMouthRehab") },
                { href: "/services/cosmetic-veneers", label: tNav("cosmeticVeneers") },
                { href: "/services/sedation-dentistry", label: tNav("sedationDentistry") },
                { href: "/services", label: tNav("otherServices") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-700">
              {t("contactInfo")}
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${CALL_PHONE}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <BsTelephone className="w-4 h-4 shrink-0" />
                {tContact("phone1")}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#25D366] text-sm transition-colors"
              >
                <BsWhatsapp className="w-4 h-4 shrink-0" />
                {tContact("phone2")}
              </a>
              <a
                href={`mailto:${CLINIC_EMAIL}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors break-all"
              >
                <BsEnvelope className="w-4 h-4 shrink-0" />
                {tContact("emailAddress")}
              </a>

              {/* Social media */}
              <div className="pt-4">
                <p className="text-white font-semibold text-sm mb-3">{t("followUs")}</p>
                <div className="flex items-center gap-3">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-600 transition-colors">
                    <BsInstagram className="w-4 h-4" />
                  </a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-colors">
                    <BsFacebook className="w-4 h-4" />
                  </a>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition-colors">
                    <BsYoutube className="w-4 h-4" />
                  </a>
                  <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-900 transition-colors">
                    <FaTiktok className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center">
              © {currentYear} Al Fawzy Dental Clinic. {t("rights")}
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                {t("terms")}
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                {t("privacy")}
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center mt-3">{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
