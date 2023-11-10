import React from "react";
import { cormorant } from "@/components/fonts";
import SubHeading from "@/components/subheading";
import Button from "@/components/button";
import GoogleMaps from "@/components/google-map";

export default function Contact() {
  return (
    <section className="flex flex-col justify-between app-bg paddings relative lg:flex-row">
      <div className="w-full flex-center flex-col text-center mb-16 lg:items-start lg:text-start lg:mb-0">
        <SubHeading title="Lieu & Informations" className="mx-auto lg:m-0" />
        <h1
          className={`${cormorant.className} text-golden text-6xl capitalize`}
        >
          Contact
        </h1>
        <p className="text-[#aaaaaa] text-sm my-8">
          Parking à proximité, 23 rue de France, 88300 Neufchâteau.
        </p>
        <Button href="/contact" title="Voir le lieu" />
      </div>

      <GoogleMaps />
    </section>
  );
}
