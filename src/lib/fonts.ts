import { Cairo, Plus_Jakarta_Sans } from "next/font/google";

export const arabicFont = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const englishFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-english",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});
