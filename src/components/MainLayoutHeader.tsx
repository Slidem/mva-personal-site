import DesktopHeader from "@/components/DesktopHeader";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "@/components/MobileHeader";
import React from "react";

export const MainLayoutHeader = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-gray-100 to-blue-100 h-20 fixed w-[100%] z-50">
        <nav className="mx-auto p-6 pb-0 flex justify-between items-center w-full md:px-4 lg:px-10">
          <div className="flex gap-6">
            <Image
              src={"/avatar.png"}
              className="h-8 w-8 rounded-full"
              width={40}
              height={40}
              alt="Mihai Alexandru"
            />
            <Link href="/" className="text-xl font-semibold text-gray-800">
              Mihai Alexandru
            </Link>
          </div>
          <DesktopHeader />
          <MobileHeader />
        </nav>
      </header>
      <div className="h-20"></div>
    </>
  );
};
