import "@/app/global.css";

import MainLayoutBody from "@/components/MainLayoutBody";
import { MainLayoutHeader } from "@/components/MainLayoutHeader";

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
        <MainLayoutHeader />
        <MainLayoutBody>{children}</MainLayoutBody>
      </body>
    </html>
  );
}
