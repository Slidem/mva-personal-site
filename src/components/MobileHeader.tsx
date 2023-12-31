"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import MobileHeaderLink from "@/components/MobileHeaderLink";
import { Transition } from "@headlessui/react";
import { headerItems } from "@/components/config";
import { useState } from "react";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden block">
      <button className="rounded-full" onClick={() => setIsOpen(!isOpen)}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-250"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-gray-100 to-blue-100 flex flex-col items-start flex-column items-center justify-items-center align-center">
          {headerItems.map((link) => (
            <div className="p-2 first:pt-4 first:border-t first:border-white last:pb-4 w-full flex flex-col items-center justify-items-center align-center">
              <MobileHeaderLink {...link} />
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default MobileHeader;
