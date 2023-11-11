"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/button";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 w-full h-full bg-black flex-center">
      <div className="flex-center flex-col">
        <h1 className="text-6xl text-[#dcca87] text-center mb-8">
          &quot;{pathname}&quot; introuvable
        </h1>
        <p className="text-base text-white mb-8">
          Impossible de trouver la page &quot;{pathname}&quot;
        </p>
        <Button title="Revenir à la page d'accueil" href="/" />
      </div>
    </div>
  );
}
