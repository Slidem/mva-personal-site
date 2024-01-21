import "@/app/global.css";

import DesktopHeader from "@/components/DesktopHeader";
import Image from "next/image";
import Link from "next/link";
import MainLayoutBody from "@/components/MainLayoutBody";
import { MainLayoutHeader } from "@/components/MainLayoutHeader";
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
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <MainLayoutHeader />
        <MainLayoutBody>{children}</MainLayoutBody>
      </body>
    </html>
  );
}
