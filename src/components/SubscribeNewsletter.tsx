"use client";

import React, { useState } from "react";

import { useModalContext } from "./ModalContext";

export const SubscribeNewsletterInput = () => {
  const [email, setEmail] = useState("");
  const { openModal } = useModalContext();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
      <input
        className="w-full p-3 border border-gray-300 rounded-md mb-3"
        type="email"
        placeholder="Your email..."
        aria-label="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        disabled={!isValidEmail}
        className={`w-full ${
          isValidEmail ? `bg-sky-300 hover:bg-sky-200` : `bg-slate-300`
        } text-white font-bold py-2 px-4 rounded cursor-pointer`}
        onClick={(e) => {
          openModal(
            <div className="w-[calc(100vw-40px)] p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
                Newsletter subscription will be available soon 🚀
              </h2>
              <h3 className="text-xl text-gray-800 mb-5 text-center">
                Thank you for understanding 🙏
              </h3>
              <h3 className="text-xl text-gray-800 mb-5 text-center">
                Stay tuned!
              </h3>
            </div>,
          );
        }}
      >
        Subscribe Now
      </button>
    </>
  );
};
