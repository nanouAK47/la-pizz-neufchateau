import Image from "next/image";
import { Metadata } from "next";
import { GlassWater, IceCream2, Phone, Pizza, Wine } from "lucide-react";
import { cormorant } from "@/components/fonts";
import Modal from "./_components/modal";
import Button from "@/components/button";
import SubHeading from "@/components/subheading";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Découvrez notre menu alléchant de pizzas artisanales. Accompagnez votre pizza d'un verre rafraîchissant au bar, où vous trouverez une sélection de boissons variées.",
  keywords:
    "menu la pizz, la pizz neufchateau, restaurant neufchateau, pizzeria neufchateau, pizzeria et bar neufchateau, livraison neufchateau, pizzas, bar, boissons, soirée, ambiance, la pizz à neufchateau, neufchateau",
};

export default function Menu() {
  return (
    <main className="app-bg paddings">
      <section className="flex-center flex-col text-center mb-8">
        <SubHeading title="Notre carte" className="mx-auto" />
        <h1
          className={`${cormorant.className} text-golden font-bold capitalize text-7xl`}
        >
          Menu
        </h1>
        <p className="text-white my-4">
          Découvrez notre menu de pizzas artisanales.
          <br />
          Accompagnez votre pizza d&apos;un verre rafraîchissant au bar, où vous
          trouverez une sélection de boissons.
        </p>
        <a
          href="tel:0329065562"
          className="flex items-center text-2xl font-bold text-golden my-4"
        >
          <Phone
            width={30}
            height={30}
            fill="#dcca87"
            stroke="none"
            className="mr-2"
          />
          03 29 06 55 62
        </a>
        <Button title="Livraison disponible" href="/livraison" />
      </section>

      {/* Pizzas  */}
      <section className="menu">
        <h1
          className={`${cormorant.className} flex items-center text-3xl text-black font-bold`}
        >
          <Pizza width={30} height={30} className="mr-2" />
          Pizzas
        </h1>
        <Image
          src="/spoon.svg"
          alt="cuillère"
          width={40}
          height={10}
          className="mx-auto mb-4"
        />
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          8.50€ & Grande : 12.50€
        </h2>
        <Modal />
      </section>

      {/* Boissons  */}
      <section className="menu">
        <h1
          className={`${cormorant.className} flex items-center text-3xl text-black font-bold`}
        >
          <GlassWater width={30} height={30} className="mr-2" /> Boissons
        </h1>
        <Image
          src="/spoon.svg"
          alt="cuillère"
          width={40}
          height={10}
          className="mx-auto mb-4"
        />
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          Alcool
        </h2>
        <p className="text-sm text-gray">
          Pastis, Ricard (le verre : 2.60€)
          <br /> Jameson (baby : 2.80€, 4cl : 5.50€)
          <br /> Jack Daniel&apos;s (baby : 3.20€, 4cl : 6.20€)
          <br /> Rhums blanc ou brun (4.90€)
          <br /> Vodkas (5.50€)
          <br /> Get 27, Malibu, Baileys (4.40€)
          <br /> Cognac (3.70€)
          <br /> Porto blanc/rouge, Suze, Martini (3.60€)
          <br /> Poire, Mirabelle (3.30€)
          <br /> Punch (6€), Shot différent (3.20€)
        </p>
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          Bières
        </h2>
        <p className="text-sm text-gray">
          Pression blonde (25cl: 2.70€, 50cl : 5.20€)
          <br /> Pression rouge (25cl : 4.30€, 50cl : 8.20€)
          <br /> Panaché (2.70€), Monaco, demi sirop (2.70€)
          <br /> Galopin (1.60€), Super Bock (2.70€)
          <br /> 1664 (2.80€), Heineken (3.40€)
          <br /> Chimay (5.30€), Desperados (3.80€)
          <br /> Sans alcool : Leffe, La Goudale (3.20€)
          <br /> Picon (3.70€), Cuvée des trolls (4.30€)
          <br /> Bière Bourdon (4.50€), Noirade (5.20€)
          <br /> Suppléments : sirop (0.30€), picon (1€)
        </p>
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          Boissons chaudes
        </h2>
        <p className="text-sm text-gray">
          Café express (1.60€, double : 2.80€)
          <br /> Café crème (2€, grand crème : 3€)
          <br /> Café déca expresso (1.90€), Café déca allongé (2€)
          <br /> Grand déca (3.40€)
          <br /> Déca noisette (2€), Déca crème (2.30€)
          <br /> Cappuccino (2.90€), Déca cappuccino (3.50€)
          <br /> Petit chocolat (2€), Chocolat (2.70€), Chocolat viennois
          (2.90€)
          <br /> Lait (2.50€)
          <br /> Thé, Infusion (2.50€)
          <br /> Supplément lait (0.40€)
        </p>
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          Softs
        </h2>
        <p className="text-sm text-gray">
          Verre d&apos;eau (0.90€), Sirop à l&apos;eau (1.90€)
          <br /> Limonade (verre : 2.30€ + sirop : 2.50€)
          <br /> Diabolo (2.50€)
          <br /> Coca-cola, Orangina, Schweppes, Fuze Tea, Perrier (3.40€)
          <br /> Jus de fruits : orange, pomme, abricot,
          <br /> ananas, tomate (3.40€)
          <br /> Carola (50cl : 3.30€, 1L : 5.60€)
          <br /> Redbull (3.80€)
          <br /> Lait nature (2.30€ + sirop 2.50€)
          <br /> Suppléments : sirop, rondelle de citron (0.30€)
        </p>
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          À emporter
        </h2>
        <p className="text-sm text-gray">
          Fanta, Coca-cola, Orangina, Fuze-Tea (cannette : 2.50€, bouteille
          1.25L : 4.50€)
          <br /> Lambrousco (11€)
        </p>
      </section>

      {/* Vins et Champagnes  */}
      <section className="menu">
        <h1
          className={`${cormorant.className} flex items-center text-3xl text-black font-bold`}
        >
          <Wine width={30} height={30} className="mr-2" /> Vins & Champagnes
        </h1>
        <Image
          src="/spoon.svg"
          alt="cuillère"
          width={40}
          height={10}
          className="mx-auto mb-4"
        />
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          Vins
        </h2>
        <p className="text-sm text-gray">
          Côtes-du-Rhône (verre : 2.50€, 1/4 : 4.30€, 1/2 : 6.40€)
          <br /> Rosé méditerranée (2.50€, 1/4 : 4.60€, 1/2 : 6.80€)
          <br /> Chardonnay (verre : 3.70€, 1/4 : 7.10€, 1/2 : 12.60€)
          <br /> Merlot (verre : 2.50€, 1/4 : 5.60€, 1/2 : 10.10€)
          <br /> Sauvignon (verre : 2.50€, 1/4 : 4.60€, 1/2 : 6.80€)
          <br /> Rosé Côtes-de-Provence (verre : 3.70€, 1/4 : 7.10€, 1/2 :
          12.60€)
          <br /> Bouteille de vin (75cl : 18.50€)
          <br /> Supplément : crème cassis (1€)
        </p>
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          Champagnes
        </h2>
        <p className="text-sm text-gray">
          Champagnes (la coupe : 7.60€, la bouteille : 60€)
        </p>
      </section>

      {/* Glaces  */}
      <section className="menu">
        <h1
          className={`${cormorant.className} flex items-center text-3xl text-black font-bold`}
        >
          <IceCream2 width={30} height={30} className="mr-2" /> Desserts
        </h1>
        <Image
          src="/spoon.svg"
          alt="cuillère"
          width={40}
          height={10}
          className="mx-auto mb-4"
        />
        <h2 className={`${cormorant.className} text-black font-bold text-2xl`}>
          Glaces
        </h2>
        <p className="text-sm text-gray">
          Une boule (1.60€), coulis (caramel, chocolat, fruit rouge) et
          friandises offert
          <br /> Parfums : Vanille, Chocolat, Fraise, Cerise, Rhum raisin,
          Pistache, Menthe Chocolat, Café, Citron
          <br /> Chantilly (1.60€)
        </p>
      </section>
    </main>
  );
}
