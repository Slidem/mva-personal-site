import React, { RefAttributes } from "react";

import Link from "next/link";

interface Props {
  page: string;
  label: string;
  icon: any;
  inverted?: boolean;
}

const DesktopHeaderLink: React.FC<Props> = ({
  page,
  label,
  icon,
  inverted,
}) => {
  const bgColor = inverted ? "bg-[#06b6d4]" : "bg-white";
  const textColor = inverted ? "text-white" : "text-gray-800";
  const hoverBackgroundColor = inverted
    ? "hover:bg-[#a5f3fc]"
    : "hover:bg-gray-100";
  const hoverTextColor = inverted ? "hover:text-white" : "hover:text-gray-600";
  return (
    <div
      className={`flex flex-row items-center gap-2 rounded-full ${bgColor} ${hoverTextColor} ${hoverBackgroundColor} ${textColor} p-2 px-6 cursor-pointer`}
    >
      <Link href={`/${page}`}>{label}</Link>
      <div className="w-4 h-4">{icon}</div>
    </div>
  );
};

export default DesktopHeaderLink;
