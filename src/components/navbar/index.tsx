"use client";

/* eslint-disable @next/next/no-img-element */
import { transition } from "@/utils/tailwindClasses";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative full-width border-neutral-700 border max-w-[1200px] sm:m-2 justify-between flex items-stretch flex-row">
      <a href="/" className="flex items-center group">
        <img
          src="/favicon.png"
          alt="Nero"
          className={`p-5 ${transition} size-[72px] invert group-hover:bg-white group-hover:invert-0`}
        />
        <p
          className={`px-3 text-lg font-semibold ${transition} text-neutral-300 group-hover:text-white`}
        >
          Nero
        </p>
      </a>
      <div className="items-stretch hidden md:flex">
        {MenuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_b"
            className={`flex items-center px-5 group hover:bg-white hover:text-black text-sm font-thin ${transition} text-neutral-300`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex md:hidden">
        <div
          className={`flex items-center p-5 
            ${transition} 
            ${isOpen ? "bg-white" : "bg-transparent"} 
            ${isOpen ? "text-black" : "text-neutral-300"}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 z-10 w-full mt-px bg-black border-b top-full border-neutral-700">
          {MenuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex px-5 py-5 text-white bg-black border-0 hover:bg-white hover:text-black ${transition}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
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
