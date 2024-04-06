"use client";

/* eslint-disable @next/next/no-img-element */
import { siteMaxWidth, transition } from "@/utils/tailwindClasses";
import React, { useState } from "react";
import Container from "../container";
import { cn } from "@/utils/tailwindMerge";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className={`relative justify-between items-stretch`}>
      <a href="/" className="flex items-center group">
        <img
          src="/favicon.png"
          alt="Nero"
          className={cn(
            `p-5 size-[72px] invert group-hover:bg-white group-hover:invert-0`,
            transition
          )}
        />
        <p
          className={cn(
            `px-3 text-lg font-semibold text-neutral-300 group-hover:text-white`,
            transition
          )}
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
            className={cn(
              `flex items-center px-5 group hover:bg-white hover:text-black text-sm font-light text-neutral-300`,
              transition
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex md:hidden">
        <div
          className={cn(
            `flex items-center p-5 
          `,
            transition,
            isOpen ? "bg-white" : "bg-transparent",
            isOpen ? "text-black" : "text-neutral-300"
          )}
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
        <div className="absolute left-0 z-10 w-full mt-px bg-black border-b border-r border-l top-full border-neutral-700">
          {MenuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={cn(
                `flex px-5 py-5 text-white bg-black border-0 hover:bg-white hover:text-black`,
                transition
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </Container>
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
