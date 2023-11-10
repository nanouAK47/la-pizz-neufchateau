import Image from "next/image";
import { Facebook, Phone } from "lucide-react";
import { cormorant } from "./fonts";

export default function Footer() {
  const getAnneeActuelle = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="bg-black flex flex-col justify-between items-center paddings">
      <div className="w-full flex flex-col gap-y-5 text-center lg:flex-row lg:justify-between">
        <div>
          <h1
            className={`${cormorant.className} text-golden text-4xl capitalize mb-4`}
          >
            Contact
          </h1>
          <p className="text-base text-white">
            23 rue de France, 88300 Neufchâteau
          </p>
          <a
            href="tel:0329065562"
            className="flex-center text-base text-golden"
          >
            <Phone
              width={35}
              height={35}
              fill="#dcca87"
              stroke="none"
              className="mr-2"
            />
            03 29 06 55 62
          </a>
        </div>

        <div>
          <div className="flex-center gap-x-4">
            <Image
              src="/logo.webp"
              alt="logo La Pizz"
              width={128}
              height={128}
              priority
            />
            <a
              href="https://nb-web.fr"
              aria-label="Site internet nb-web"
              target="_blank"
            >
              <Image
                src="/nb-web.png"
                width={160}
                height={160}
                alt="logo nb web"
                className="mt-4"
              />
            </a>
          </div>
        </div>

        <div>
          <h1
            className={`${cormorant.className} text-golden text-4xl capitalize mb-4`}
          >
            Horaires 7j7
          </h1>
          <p className="text-base text-white mb-4">
            Ouverture bar : 8h15 - 23h00
            <br />
            Samedi : 7h30 - 23h00
            <br />
            Dimanche : 10h00 - 23h00
          </p>
          <p className="text-base text-white">
            Ouverture pizzeria :
            <br />
            11h00 - 14h00 & 18h30 - 23h00
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-base text-white underline decoration-2 decoration-golden underline-offset-8">
        &copy; {getAnneeActuelle()} La Pizz. Tous droits réservés.
      </p>

      <a
        href="https://www.facebook.com/profile.php?id=100057123563972&sk=photos"
        aria-label="facebook la pizz"
        target="_blank"
        className="text-golden mx-auto mt-8"
      >
        <Facebook width={35} height={35} fill="#dcca87" stroke="none" />
      </a>
    </footer>
  );
}
