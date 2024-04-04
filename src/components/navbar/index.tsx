/* eslint-disable @next/next/no-img-element */
import { transition } from "@/utils/tailwindClasses";
import React from "react";

const Navbar = () => {
  return (
    <div className="full-width border-neutral-700 border max-w-[1200px] sm:m-2 justify-between flex items-stretch flex-row">
      <a href="/" className="flex items-center group">
        <img
          src="/favicon.png"
          alt="Nero"
          className={`p-5 ${transition} size-[72px] invert group-hover:bg-white group-hover:invert-0`}
        />
        <p
          className={`px-3 text-sm font-thin ${transition} text-neutral-300 group-hover:text-white`}
        >
          Nero
        </p>
      </a>
      <div className="flex items-stretch">
        {MenuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_b"
            className={`flex items-center px-3 group hover:bg-white hover:text-black text-sm font-thin ${transition} text-neutral-300`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

const MenuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default Navbar;
