import "@/app/global.css";

import { CodeBracketIcon } from "@heroicons/react/24/outline";
import DesktopHeader from "@/components/DesktopHeader";
import Image from "next/image";
import MobileHeader from "@/components/MobileHeader";

export const metadata = {
  title: "Mihai V Alexandru - Personal Website",
  description: "Personal website of Mihai V Alexandru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="font-mono bg-gradient-to-r from-gray-100 to-blue-100 h-20 fixed w-[100%] z-50">
          <nav className="mx-auto p-6 pb-0 flex justify-between items-center w-full md:px-4 lg:px-10">
            <div className="flex gap-6">
              <Image
                src={"/avatar.png"}
                className="h-8 w-8 rounded-full"
                width={40}
                height={40}
                alt="Mihai Alexandru"
              />
              <a href="#" className="text-xl font-semibold text-gray-800">
                Mihai Alexandru
              </a>
            </div>
            <DesktopHeader />
            <MobileHeader />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
