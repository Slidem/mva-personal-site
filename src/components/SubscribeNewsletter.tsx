"use client";

import React, { useState } from "react";

export const SubscribeNewsletterInput = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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
        disabled={isValidEmail()}
        className={`w-full ${
          isValidEmail() ? `bg-sky-300 hover:bg-sky-200` : `bg-slate-300`
        } text-white font-bold py-2 px-4 rounded cursor-pointer`}
      >
        Subscribe Now
      </button>
    </>
  );
};
