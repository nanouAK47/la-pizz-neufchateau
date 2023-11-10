import Image from "next/image";
import { cormorant } from "./fonts";

export default function SubHeading({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  return (
    <div className="mb-4">
      <p
        className={`${cormorant.className} text-2xl text-white capitalize font-bold`}
      >
        {title}
      </p>
      <Image
        src="/spoon.svg"
        alt="cuillère"
        width={40}
        height={10}
        className={className}
      />
    </div>
  );
}
