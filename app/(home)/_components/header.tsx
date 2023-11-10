import Image from "next/image";
import { CornerRightDown } from "lucide-react";
import SubHeading from "@/components/subheading";
import { cormorant } from "@/components/fonts";

export default function Header() {
  return (
    <header className="app-bg h-full flex items-center justify-between paddings">
      <div className="flex-center flex-col w-full text-center xl:items-start xl:text-start">
        <SubHeading
          title="Découvrez à Neufchâteau"
          className="mx-auto xl:m-0"
        />
        <h1
          className={`${cormorant.className} text-golden font-bold capitalize text-7xl`}
        >
          La Pizz : Bar & Pizza
        </h1>
        <p className="text-white text-base my-8 max-w-lg">
          L&apos;endroit idéal pour se détendre et savourer ! Rencontrez-vous
          dans un cadre convivial et chaleureux, parfait pour passer du bon
          temps en compagnie de vos amis et votre famille.
        </p>
        <a
          href="#menu"
          className="text-white"
          aria-label="Voir un extrait du menu"
        >
          <CornerRightDown width={45} height={45} className="text-golden" />
        </a>
      </div>

      <Image
        src="/vitrine.webp"
        alt="vitrine La Pizz"
        width={1080}
        height={810}
        className="hidden w-1/2 xl:flex"
      />
    </header>
  );
}
