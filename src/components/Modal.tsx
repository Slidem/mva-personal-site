"use client";

import React, { useEffect } from "react";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { useModalContext } from "./ModalContext";

export const Modal = () => {
  const { isModalOpen, closeModal, modalContent } = useModalContext();
  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={`${
        isModalOpen ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500 z-50 `}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-lg transform transition-transform duration-500 scale-100 max-w-3xl m-4 p-5 sm:p-20 space-y-10 flex flex-col items-center justify-center max-h-[calc(100vh-60px)] overflow-y-auto"
      >
        {modalContent}
        <button
          className="absolute -top-8 right-2 w-8 h-8"
          onClick={closeModal}
        >
          <XCircleIcon />
        </button>
      </div>
    </div>
  );
};
