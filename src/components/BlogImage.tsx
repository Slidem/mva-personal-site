"use client";

import Image, { ImageProps } from "next/image";

import { useModalContext } from "./ModalContext";

export const BlogImage = (props: any) => {
  const { openModal } = useModalContext();
  const { src, alt } = props;
  const altTxt = alt?.split("|")[0] || "";
  const width = alt?.split("|")[1] || 0;
  const height = alt?.split("|")[2] || 0;
  return (
    <div
      className="w-full relative flex flex-col items-center hover:cursor-zoom-in"
      onClick={() =>
        openModal(
          <div className={`w-[70vw] h-[50vh] p-4`}>
            <Image src={src || ""} alt={altTxt} fill objectFit="contain" />
          </div>,
        )
      }
    >
      <Image src={src || ""} alt={altTxt} width={width} height={height} />
    </div>
  );
};
