"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";
// @ts-ignore
import FsLightbox from "fslightbox-react";

export default function Carousel() {
  const [toggler, setToggler] = useState(false);

  return (
    <div>
      <button onClick={() => setToggler(!toggler)} className="button">
        Voir la galerie
        <ArrowUpRightIcon width={24} height={24} className="text-black ml-1" />
      </button>

      <FsLightbox
        toggler={toggler}
        sources={[
          "/galerie-1.webp",
          "/galerie-2.webp",
          "/galerie-3.webp",
          "/galerie-4.webp",
        ]}
      />
    </div>
  );
}
