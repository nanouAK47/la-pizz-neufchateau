import { Metadata } from "next";
import { cormorant } from "@/components/fonts";
import SubHeading from "@/components/subheading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Livraison",
  description:
    "Profitez de notre service de livraison le soir de 18h00 à 23h00 pour savourer chez vous une pizza fraîchement préparée.",
  keywords:
    "livraison la pizz, la pizz neufchateau, restaurant neufchateau, pizzeria neufchateau, pizzeria et bar neufchateau, livraison neufchateau, pizzas, bar, boissons, soirée, ambiance, la pizz à neufchateau, neufchateau",
};

export default function About() {
  return (
    <main>
      <section className="app-bg paddings flex-center flex-col text-center">
        <SubHeading title="A propos" className="mx-auto" />
        <h1
          className={`${cormorant.className} text-golden font-bold capitalize text-7xl`}
        >
          Livraison
        </h1>
        <p className="text-white my-4">
          <strong>Offerte</strong> à partir de 3 pizzas.
          <br /> <strong>5€</strong> la livraison en dessous de 3 pizzas.
          <br /> Le soir de <strong>18h00 à 23h00</strong>.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="max-w-lg">
            <AccordionTrigger className="text-white text-lg">
              Voir toutes les communes
            </AccordionTrigger>
            <AccordionContent className="text-gray text-base">
              (Toute autre possibilité à étudier !)
              <br /> Neufchâteau
              <br /> Moncel Sur Vair
              <br /> Frebecourt
              <br /> Coussey
              <br /> Rouceux
              <br /> Brancourt
              <br /> Saint Elophe
              <br /> Soulosse Sous Saint Elophe
              <br /> Fruze
              <br /> Mont Les Neufchateau
              <br /> Rollainville
              <br /> Villard
              <br /> Rebeuville
              <br /> Bazoille Sur Meuse
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
