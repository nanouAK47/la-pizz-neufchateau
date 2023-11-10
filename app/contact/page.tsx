import React from "react";
import { Metadata } from "next";
import { cormorant } from "@/components/fonts";
import GoogleMaps from "@/components/google-map";
import SubHeading from "@/components/subheading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez-nous par téléphone pour passer votre commande sur place, à emporter ou en livraison.",
};

export default function Contact() {
  return (
    <main>
      <section className="app-bg paddings flex-center flex-col text-center">
        <SubHeading title="Lieu & Contact" className="mx-auto" />
        <h1
          className={`${cormorant.className} text-golden font-bold capitalize text-7xl`}
        >
          Contact
        </h1>
        <p className="text-white mt-4 mb-8">
          Parking à proximité.
          <br /> 23 rue de France, 88300 Neufchâteau.
        </p>
        <GoogleMaps />
      </section>
    </main>
  );
}
