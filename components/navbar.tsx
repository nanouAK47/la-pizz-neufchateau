"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { link } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-black py-4 px-4 lg:px-24">
      <Image
        src="/logo.webp"
        alt="logo La Pizz"
        width={180}
        height={180}
        className="w-32 h-32 sm:w-[180px] sm:h-[180px]"
        priority
      />

      <ul className="hidden gap-4 text-lg lg:flex-center">
        {link.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={cn(
                pathname === link.href
                  ? "text-golden border-b border-golden"
                  : "text-white hover:text-golden hover:border-b hover:border-golden"
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden sm:flex">
        <a href="tel:0329065562" className="flex-center text-lg text-golden">
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

      <div className="flex lg:hidden">
        <Menu
          onClick={() => setToggleMenu(true)}
          width={35}
          height={35}
          className="cursor-pointer text-golden"
        />
        {toggleMenu && (
          <nav className="flex-center flex-col fixed top-0 left-0 w-full h-screen bg-black transition-all z-10 slide-bottom">
            <X
              onClick={() => setToggleMenu(false)}
              width={35}
              height={35}
              className="cursor-pointer text-golden absolute top-12 right-[17px]"
            />

            <a
              href="tel:0329065562"
              className="flex-center text-xl text-golden absolute top-12"
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

            <ul className="text-center text-white text-3xl">
              {link.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    onClick={() => setToggleMenu(false)}
                    href={link.href}
                    className={cn(
                      pathname === link.href
                        ? "text-golden border-b border-golden"
                        : "text-white hover:text-golden hover:border-b hover:border-golden"
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
}
