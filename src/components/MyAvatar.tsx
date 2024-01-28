import Image from "next/image";
import React from "react";

export const MyAvatar = () => {
  return (
    <Image
      src={"/avatar.png"}
      className="h-8 w-8 rounded-full"
      width={40}
      height={40}
      alt="Mihai Alexandru"
    />
  );
};
