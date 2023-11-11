import Link from "next/link";
import React from "react";
import { ExternalLinkIcon } from "lucide-react";

export default function Button({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <button type="button">
      <Link href={href} className="button">
        {title}
        <ExternalLinkIcon width={24} height={24} className="text-black ml-1" />
      </Link>
    </button>
  );
}
