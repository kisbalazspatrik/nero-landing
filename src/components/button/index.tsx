import { transition } from "@/utils/tailwindClasses";
import React, { FC, HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type: "solid" | "outline" | "link";
  href?: string;
}

const Button: FC<ButtonProps> = ({ type, href }) => {
  const buttonClasses = `${transition} px-5 py-3 cursor-pointer`;

  const Buttons = {
    solid: `${buttonClasses} bg-white border-white text-black border hover:bg-black hover:text-white hover:opacity-80`,
    outline: `${buttonClasses} bg-black border-white text-white border hover:bg-white hover:text-black hover:opacity-80`,
    link: `${buttonClasses} underline text-white hover:text-white hover:opacity-80`,
  };

  return (
    <a href={href} className={Buttons[type]}>
      Button
    </a>
  );
};

export default Button;
