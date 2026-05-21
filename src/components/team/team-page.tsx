"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsWhatsapp, BsShieldCheck } from "react-icons/bs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";
import Image from "next/image";

const ALL_DOCTORS = [
  {
    key: "ahmed",
    image: "/images/doctors/Dr.-Ahmed-Fawzy.png",
    syndicateReg: "#16870",
    mohLicense: "#17185",
    featured: true,
  },
  {
    key: "manal",
    image: "/images/doctors/Dr.-Manal-Elesily.jpg",
    syndicateReg: "#17871",
    featured: true,
  },
  {
    key: "rehan",
    image: "/images/doctors/Dr.-Rehan-Anwar.jpg",
    featured: true,
  },
  {
    key: "reham",
    image: "/images/doctors/Dr.-Reham-El-Gendy.jpg",
    featured: true,
  },
  {
    key: "rahma",
    image: "/images/doctors/Dr.-Rahma-Samir.jpg",
    syndicateReg: "#51681",
  },
  {
    key: "ibrahim",
    image: "/images/doctors/Dr.-Ibrahim-Metwaly.jpg",
    syndicateReg: "#41195",
  },
  {
    key: "mohab",
    image: "/images/doctors/Dr.-Mohab-Shemis.jpg",
    syndicateReg: "#61665",
  },
  {
    key: "basem",
    image: "/images/doctors/Dr.-Basem-Bahi-El-den.jpg",
    syndicateReg: "#54127",
  },
  {
    key: "maryam",
    image: "/images/doctors/Dr.-Maryam-Shehab.jpg",
    syndicateReg: "#104608",
  },
  {
    key: "ghoniem",
    image: "/images/doctors/Dr.-Ahmed-Ghoniem.jpg",
    syndicateReg: "#67452",
  },
  {
    key: "haya",
    image: "/images/doctors/Dr.-Haya-Saied.jpg",
    syndicateReg: "#104217",
  },
  {
    key: "mostafa",
    image: "/images/doctors/Dr.-Mostafa-El-Farmawy.jpg",
    syndicateReg: "#104309",
  },
  {
    key: "mohga",
    image: "/images/doctors/Dr.-Mohga-Essam.jpg",
    syndicateReg: "#106076",
  },
];

export default function TeamPage() {
  const t = useTranslations("team");
  const tw = useTranslations("whatsapp");

  const featured = ALL_DOCTORS.filter((d) => d.featured);
  const staff = ALL_DOCTORS.filter((d) => !d.featured);

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

        {/* Leadership team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-10">{t("allDoctors")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {featured.map((doctor, i) => (
                <DoctorCard key={doctor.key} doctor={doctor} index={i} t={t} tw={tw} />
              ))}
            </div>

            {/* Staff doctors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {staff.map((doctor, i) => (
                <DoctorCard key={doctor.key} doctor={doctor} index={i} t={t} tw={tw} compact />
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

function DoctorCard({
  doctor,
  index,
  t,
  tw,
  compact = false,
}: {
  doctor: typeof ALL_DOCTORS[0];
  index: number;
  t: ReturnType<typeof useTranslations<"team">>;
  tw: ReturnType<typeof useTranslations<"whatsapp">>;
  compact?: boolean;
}) {
  const name = t(`members.${doctor.key}.name` as Parameters<typeof t>[0]);
  const title = t(`members.${doctor.key}.title` as Parameters<typeof t>[0]);
  const description = t(`members.${doctor.key}.description` as Parameters<typeof t>[0]);
  const whatsappUrl = buildWhatsAppUrl(tw("defaultMessage"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl transition-all group"
    >
      <div className={`relative ${compact ? "h-44" : "h-56"} bg-[var(--color-surface)]`}>
        <Image
          src={doctor.image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/40 via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-[var(--color-dark)] text-base mb-1">{name}</h3>
        <p className="text-[var(--color-primary)] text-sm font-medium mb-2 leading-tight">{title}</p>

        {!compact && (
          <p className="text-[var(--color-muted)] text-xs leading-relaxed mb-4">{description}</p>
        )}

        {doctor.syndicateReg && (
          <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] mb-3">
            <BsShieldCheck className="w-3.5 h-3.5 text-green-500 shrink-0" />
            {t("syndicate")}: {doctor.syndicateReg}
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#1a7a3e] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#166534] transition-colors w-full"
        >
          <BsWhatsapp className="w-4 h-4" />
          {t("bookWith")}{name.split(" ")[1] || ""}
        </a>
      </div>
    </motion.div>
  );
}
