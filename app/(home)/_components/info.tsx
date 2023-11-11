import Image from "next/image";
import SubHeading from "@/components/subheading";
import { cormorant } from "@/components/fonts";
import Button from "@/components/button";

export default function Info() {
  return (
    <section className="flex flex-col justify-between items-center app-bg paddings lg:flex-row">
      <div className="flex flex-col justify-center items-center mb-16 lg:items-start lg:mb-0">
        <SubHeading title="A propos" className="mx-auto lg:m-0" />
        <h1
          className={`${cormorant.className} text-golden text-6xl capitalize`}
        >
          Livraison
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-x-4">
          <div className="py-3 text-center lg:text-start">
            <p
              className={`${cormorant.className} text-golden font-bold capitalize text-2xl`}
            >
              Horaires Bar
            </p>
            <p className="text-[#aaaaaa] text-sm">
              Lundi - Vendredi : 8h15 - 23h00
              <br /> Samedi : 7h30 - 23h00
              <br /> Dimanche : 10h00 - 23h00
            </p>
          </div>
          <div className="py-3 text-center lg:text-start">
            <p
              className={`${cormorant.className} text-golden font-bold capitalize text-2xl`}
            >
              Horaires Pizzeria
            </p>
            <p className="text-[#aaaaaa] text-sm">
              7j7 : 11h00 - 14h00 & 18h30 - 23h00
            </p>
          </div>
          <div className="py-3 text-center lg:text-start">
            <p
              className={`${cormorant.className} text-golden font-bold capitalize text-2xl`}
            >
              Licence
            </p>
            <p className="text-[#aaaaaa] text-sm">Bar sous licence IV</p>
          </div>
          <div className="py-3 text-center lg:text-start">
            <p
              className={`${cormorant.className} text-golden font-bold capitalize text-2xl`}
            >
              Livraison disponible
            </p>
            <p className="text-[#aaaaaa] text-sm">Conditions & communes</p>
          </div>
        </div>

        <Button href="/a-propos" title="Livraison" />
      </div>

      <Image
        src="/vitrine.webp"
        alt="vitrine La Pizz"
        width={1080}
        height={810}
        className="lg:w-1/2"
      />
    </section>
  );
}
