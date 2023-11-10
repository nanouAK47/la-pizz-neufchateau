import Link from "next/link";
import React from "react";
import { ArrowUpRightIcon } from "lucide-react";

export default function Button({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <button type="button">
      <Link
        href={href}
        className="flex-center bg-golden text-black font-bold text-sm cursor-pointer border-none py-2 px-6"
      >
        {title}
        <ArrowUpRightIcon width={24} height={24} className="text-black ml-1" />
      </Link>
    </button>
  );
}
