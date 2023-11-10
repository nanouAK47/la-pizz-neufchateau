import { Metadata } from "next";
import { cormorant } from "@/components/fonts";
import SubHeading from "@/components/subheading";
import Carousel from "./_components/carousel";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez La Pizz à travers notre galerie de photos et préparez-vous à succomber à la tentation.",
};

export default function Gallery() {
  return (
    <main>
      <section className="app-bg paddings flex-center flex-col text-center">
        <SubHeading title="Nos photos" className="mx-auto" />
        <h1
          className={`${cormorant.className} text-golden font-bold capitalize text-7xl`}
        >
          Galerie
        </h1>
        <p className="text-white my-4">
          Découvrez La Pizz à travers notre galerie de photos et préparez-vous à
          succomber à la tentation.
        </p>
        <Carousel />
      </section>
    </main>
  );
}
