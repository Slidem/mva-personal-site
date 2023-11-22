import "@/app/global.css";

import { CodeBracketIcon } from "@heroicons/react/24/outline";
import DesktopHeader from "@/components/DesktopHeader";
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
        <header className="font-mono bg-gradient-to-r from-gray-100 to-blue-100 h-20">
          <nav className="mx-auto p-6 pb-0 flex justify-between items-center w-full md:px-4 lg:px-10">
            <div className="flex gap-6">
              <CodeBracketIcon className="h-6 w-6" />
              <a href="#" className="text-xl font-semibold text-gray-800">
                Mihai Alexandru
              </a>
            </div>
            <DesktopHeader />
            <MobileHeader />
          </nav>
        </header>
        <h1 className="text-1xl font-bold">Shared layout here</h1>
        {children}
      </body>
    </html>
  );
}
