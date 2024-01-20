import "@/app/global.css";

import DesktopHeader from "@/components/DesktopHeader";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "@/components/MobileHeader";
import { SocialIcon } from "react-social-icons";

export const metadata = {
  title: "Mihai V Alexandru - Personal Website",
  description: "Personal website of Mihai V Alexandru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
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
        <div className="h-[calc(100vh-80px)] overflow-y-auto flex flex-col justify-between">
          <div className="grow">{children}</div>
          <footer className="px-20  bg-black h-20 text-white align-middle flex flex-column items-center">
            <div className="flex flex-row items-center justify-between w-full h-20">
              <div>
                <h1>© {currentYear} Mihai V Alexandru</h1>
              </div>
              <div className="text-white flex flex-row gap-6">
                <div>
                  <SocialIcon
                    style={{ width: "40px", height: "40px" }}
                    bgColor="gray"
                    fgColor="black"
                    url="https://www.linkedin.com/in/mihai-v-alexandru/"
                  />
                </div>
                <div>
                  <SocialIcon
                    style={{ width: "40px", height: "40px" }}
                    bgColor="gray"
                    fgColor="black"
                    url="https://github.com/Slidem"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
