import Link from "next/link";
import React from "react";

interface Props {
  page: string;
  label: string;
}

const DesktopHeaderLink: React.FC<Props> = ({ page, label }) => {
  return (
    <Link href={`/${page}`} className="text-gray-800 hover:text-gray-600">
      {label}
    </Link>
  );
};

export default DesktopHeaderLink;
