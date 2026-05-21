"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";
import { Link } from "@/i18n/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Image from "next/image";

const FEATURED_DOCTORS = [
  {
    key: "ahmed",
    image: "/images/doctors/Dr.-Ahmed-Fawzy.png",
    reg: "#16870",
  },
  {
    key: "manal",
    image: "/images/doctors/Dr.-Manal-Elesily.jpg",
    reg: "#17871",
  },
  {
    key: "rehan",
    image: "/images/doctors/Dr.-Rehan-Anwar.jpg",
    reg: "#N/A",
  },
  {
    key: "reham",
    image: "/images/doctors/Dr.-Reham-El-Gendy.jpg",
    reg: "#N/A",
  },
];

export default function TeamPreviewSection() {
  const t = useTranslations("team");
  const tw = useTranslations("whatsapp");

  return (
    <section className="py-20 bg-[var(--color-dark)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-3">
            {t("allDoctors")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_DOCTORS.map((doctor, i) => {
            const name = t(`members.${doctor.key}.name` as Parameters<typeof t>[0]);
            const title = t(`members.${doctor.key}.title` as Parameters<typeof t>[0]);
            const bookMsg = `${tw("defaultMessage")}`;
            const whatsappUrl = buildWhatsAppUrl(bookMsg);

            return (
              <motion.div
                key={doctor.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-accent)]/30 transition-all hover:bg-white/10"
              >
                {/* Doctor image */}
                <div className="relative h-56 bg-gradient-to-br from-[var(--color-primary)]/40 to-[var(--color-primary-dark)]/60">
                  <Image
                    src={doctor.image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-1">{name}</h3>
                  <p className="text-[var(--color-accent)] text-sm font-medium mb-4 leading-tight">{title}</p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#20bc5c] transition-colors w-full"
                  >
                    <BsWhatsapp className="w-4 h-4" />
                    {t("bookWith")}{name.split(" ")[1] || ""}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
          >
            {t("viewAll")}
            <BsArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
