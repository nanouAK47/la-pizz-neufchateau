"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/button";
import { cormorant } from "@/components/fonts";
import SubHeading from "@/components/subheading";

export default function Galerie() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: any) => {
    const { current } = scrollRef;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  return (
    <section className="flex items-center justify-between flex-col paddings app-bg lg:flex-row">
      <div className="flex-1 flex-center flex-col text-center lg:items-start lg:text-start">
        <SubHeading title="Nos photos" className="mx-auto lg:m-0" />
        <h1
          className={`${cormorant.className} text-golden text-6xl capitalize`}
        >
          Galerie
        </h1>
        <p className="my-8 text-gray">
          Découvrez notre collection de photos et jetez un coup d&apos;œil à nos
          événements.
        </p>
        <Button title="Voir les photos" href="/galerie" />
      </div>

      <div className="flex-1 flex max-w-[100%] relative mt-5 lg:max-w-[50%]">
        <div className="flex overflow-hidden" ref={scrollRef}>
          <div className="relative flex min-w-[301px] h-[447px] gap-8">
            <Image
              src="/galerie-1.webp"
              alt="galerie image 1"
              width={700}
              height={700}
            />
            <Image
              src="/galerie-2.webp"
              alt="galerie image 2"
              width={700}
              height={700}
            />
            <Image
              src="/galerie-3.webp"
              alt="galerie image 3"
              width={700}
              height={700}
            />
            <Image
              src="/galerie-4.webp"
              alt="galerie image 4"
              width={700}
              height={700}
            />
          </div>
        </div>

        <div className="w-full flex justify-between items-center px-4 absolute bottom-[5%]">
          <ArrowLeft
            width={45}
            height={45}
            className="text-golden cursor-pointer bg-black rounded-sm hover:text-white"
            onClick={() => scroll("left")}
          />
          <ArrowRight
            width={45}
            height={45}
            className="text-golden cursor-pointer bg-black rounded-sm hover:text-white"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
}
