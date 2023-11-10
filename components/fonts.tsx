import { Cormorant_Upright } from "next/font/google";
import { Open_Sans } from "next/font/google";

export const cormorant = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
