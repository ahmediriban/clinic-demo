const WHATSAPP_NUMBER = "201114444190";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_PHONE = "+20 111 4444190";
export const CALL_PHONE = "+20 111 010 0027";
export const CLINIC_EMAIL = "bookappointment@alfawzydental.info";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/alfawzydental_cairo",
  facebook: "https://www.facebook.com/alfawzydentalcairo",
  tiktok: "https://www.tiktok.com/@alfawzydentalcairo",
  youtube: "https://www.youtube.com/@alfawzy_dental",
  whatsapp: buildWhatsAppUrl("Hello, I would like to book an appointment at Al Fawzy Dental Clinic."),
};

export const MAPS_LINK_DOKKI = "https://maps.google.com/?q=Al+Fawzy+Dental+Clinic+Dokki+Cairo";
export const MAPS_LINK_AGOUZA = "https://maps.google.com/?q=Al+Fawzy+Dental+Clinic+Agouza+Cairo";
export const MAPS_LINK_NEW_CAIRO = "https://maps.google.com/?q=Al+Fawzy+Dental+Clinic+New+Cairo";
