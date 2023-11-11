import Image from "next/image";
import { boissons, menu } from "@/constants";
import { cormorant } from "@/components/fonts";
import SubHeading from "@/components/subheading";
import Button from "@/components/button";

export default function Menu() {
  return (
    <section className="app-bg flex-center flex-col paddings" id="menu">
      <div className="mb-8 text-center">
        <SubHeading title="Les plus populaires" className="mx-auto" />
        <h1
          className={`${cormorant.className} text-golden text-[64px] capitalize`}
        >
          Notre Menu
        </h1>
      </div>

      <div className="w-full flex flex-col mb-16 lg:flex-row">
        <div className="flex items-center flex-1 w-full flex-col lg:items-start">
          <p
            className={`${cormorant.className} text-5xl font-semibold text-white`}
          >
            Nos Pizzas
          </p>
          <div className="my-8 max-w-xl w-full">
            {menu.map((pizza, index) => (
              <div key={index} className="my-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p
                      className={`${cormorant.className} text-golden font-bold capitalize text-2xl`}
                    >
                      {pizza.title}
                    </p>
                  </div>
                  <div className="w-20 h-[1px] bg-golden mx-4" />
                  <div className="flex items-center justify-end">
                    <p
                      className={`${cormorant.className} text-white font-bold capitalize text-2xl`}
                    >
                      {pizza.price}
                    </p>
                  </div>
                </div>

                <div className="w-full mt-1">
                  <p className="text-gray text-base">{pizza.tags}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/knife.webp"
          alt="couteau"
          width={48}
          height={402}
          className="hidden w-[48px] h-[402px] mx-auto lg:mx-16 sm:flex"
        />

        <div className="flex items-center flex-1 w-full flex-col mt-8 lg:items-end lg:mt-0">
          <p
            className={`${cormorant.className} text-5xl font-semibold text-white`}
          >
            Nos Boissons
          </p>
          <div className="my-8 max-w-xl w-full">
            {boissons.map((boisson, index) => (
              <div key={index} className="my-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p
                      className={`${cormorant.className} text-golden font-bold capitalize text-2xl`}
                    >
                      {boisson.title}
                    </p>
                  </div>
                  <div className="w-20 h-[1px] bg-golden mx-4" />
                </div>

                <div className="w-full mt-1">
                  <p className="text-gray text-base">{boisson.tags}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button href="/menu" title="Voir le menu" />
    </section>
  );
}
