import type { Metadata } from "next";
import "./globals.css";
import { opensans } from "@/components/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "%s - La Pizz à Neufchâteau, pizzeria et bar",
    default: "Accueil - La Pizz à Neufchâteau, pizzeria et bar",
  },
  description:
    "Découvrez La Pizz à Neufchâteau, une pizzeria artisanale et un bar avec une bonne ambiance ! Rencontrez-vous dans un cadre convivial et chaleureux, parfait pour passer du bon temps en compagnie de vos amis et de votre famille.",
  openGraph: {
    title: "La Pizz à Neufchâteau, pizzeria et bar",
    description:
      "Découvrez La Pizz à Neufchâteau, une pizzeria artisanale et un bar avec une bonne ambiance ! Rencontrez-vous dans un cadre convivial et chaleureux, parfait pour passer du bon temps en compagnie de vos amis et votre famille.",
    url: "https://la-pizz-neufchateau.fr",
    siteName: "La Pizz à Neufchâteau",
    phoneNumbers: "03 29 06 55 62",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  keywords:
    "la pizz, la pizz neufchateau, restaurant neufchateau, pizzeria neufchateau, pizzeria et bar neufchateau, livraison neufchateau, pizzas, bar, boissons, soirée, ambiance, la pizz à neufchateau, neufchateau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={opensans.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
