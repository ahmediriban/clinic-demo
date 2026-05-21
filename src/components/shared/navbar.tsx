"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { BsWhatsapp, BsList, BsX, BsChevronDown, BsTelephone } from "react-icons/bs";
import { buildWhatsAppUrl, CALL_PHONE } from "@/lib/whatsapp";
import Image from "next/image";

const LOGO_EN = "/images/logo.png";
const LOGO_AR = "/images/logo-ar.png";

export default function Navbar() {
  const t = useTranslations("nav");
  const tw = useTranslations("whatsapp");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    router.replace(pathname, { locale: locale === "ar" ? "en" : "ar" });
  };

  const whatsappUrl = buildWhatsAppUrl(tw("defaultMessage"));

  const serviceLinks = [
    { href: "/services/dental-implants", label: t("dentalImplants") },
    { href: "/services/full-mouth-rehabilitation", label: t("fullMouthRehab") },
    { href: "/services/cosmetic-veneers", label: t("cosmeticVeneers") },
    { href: "/services/sedation-dentistry", label: t("sedationDentistry") },
  ];

  return (
    <header
      className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative h-10 w-32">
              <Image
                src={locale === "ar" ? LOGO_AR : LOGO_EN}
                alt="Al Fawzy Dental Clinic"
                fill
                sizes="128px"
                className={`object-contain transition-all duration-300 ${!scrolled ? "brightness-0 invert" : "brightness-0"}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${scrolled ? "text-[var(--color-dark)]" : "text-white"}`}
            >
              {t("home")}
            </Link>

            <Link
              href="/team"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${scrolled ? "text-[var(--color-dark)]" : "text-white"}`}
            >
              {t("ourTeam")}
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${scrolled ? "text-[var(--color-dark)]" : "text-white"}`}>
                {t("services")}
                <BsChevronDown
                  className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full start-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-[var(--color-dark)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link
                        href="/services"
                        className="block px-4 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
                      >
                        {t("otherServices")} →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${scrolled ? "text-[var(--color-dark)]" : "text-white"}`}
            >
              {t("portfolio")}
            </Link>

            <Link
              href="/international-patients"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${scrolled ? "text-[var(--color-dark)]" : "text-white"}`}
            >
              {t("internationalPatients")}
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${scrolled ? "text-[var(--color-dark)]" : "text-white"}`}
            >
              {t("contactUs")}
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <button
              onClick={toggleLocale}
              className={`hidden sm:flex items-center gap-1 text-sm font-medium transition-colors rounded-full px-3 py-1 border ${
                scrolled
                  ? "text-[var(--color-primary)] border-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                  : "text-white border-white/60 hover:border-white"
              }`}
            >
              {t("language")}
            </button>

            {/* Call button (desktop) */}
            <a
              href={`tel:${CALL_PHONE}`}
              className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? "text-[var(--color-dark)] hover:text-[var(--color-primary)]" : "text-white/80 hover:text-white"}`}
            >
              <BsTelephone className="w-4 h-4" />
            </a>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#1a7a3e] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#166534] transition-colors shadow-md"
            >
              <BsWhatsapp className="w-4 h-4" />
              {t("bookAppointment")}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`lg:hidden p-2 transition-colors ${scrolled || menuOpen ? "text-[var(--color-dark)]" : "text-white"}`}
            >
              {menuOpen ? <BsX className="w-6 h-6" /> : <BsList className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              <Link href="/" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-[var(--color-dark)] border-b border-gray-100">
                {t("home")}
              </Link>
              <Link href="/team" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-[var(--color-dark)] border-b border-gray-100">
                {t("ourTeam")}
              </Link>
              <Link href="/services" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-[var(--color-dark)] border-b border-gray-100">
                {t("services")}
              </Link>
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-2 ps-4 text-sm text-[var(--color-muted)] border-b border-gray-50">
                  {link.label}
                </Link>
              ))}
              <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-[var(--color-dark)] border-b border-gray-100">
                {t("portfolio")}
              </Link>
              <Link href="/international-patients" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-[var(--color-dark)] border-b border-gray-100">
                {t("internationalPatients")}
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-[var(--color-dark)] border-b border-gray-100">
                {t("contactUs")}
              </Link>

              <div className="flex gap-3 pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1a7a3e] text-white text-sm font-semibold py-3 rounded-xl"
                >
                  <BsWhatsapp className="w-4 h-4" />
                  {t("bookAppointment")}
                </a>
                <button
                  onClick={() => { toggleLocale(); setMenuOpen(false); }}
                  className="border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-semibold px-4 py-3 rounded-xl"
                >
                  {t("language")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
