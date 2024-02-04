"use client";

import { createContext, useContext } from "react";

import { PreviewBadge } from "./PreviewLink";

export type BadgesTypes =
  | "aws_sysops_associate"
  | "aws_dev_associate"
  | "aws_arch_associate"
  | "aws_arch_professional"
  | "ckad"
  | "cka";

interface CertBadgesType {
  certBadges: { [key: string]: React.ReactNode };
}

export const CertBadgesContext = createContext<CertBadgesType>({
  certBadges: {},
});

export const useCertBadges = () => useContext(CertBadgesContext);

export const CertBadgesProvider: React.FC<{
  certBadges: { [key: string]: React.ReactNode };
  children: React.ReactNode;
}> = ({ certBadges, children }) => {
  return (
    <CertBadgesContext.Provider
      value={{
        certBadges,
      }}
    >
      {children}
    </CertBadgesContext.Provider>
  );
};
