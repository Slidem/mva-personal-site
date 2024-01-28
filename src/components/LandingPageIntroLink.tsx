import Link from "next/link";
import React from "react";

export const LandingPageIntroLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <span className="font-bold italic text-sky-800">{children}</span>
    </Link>
  );
};
