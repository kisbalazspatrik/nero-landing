import { transition } from "@/utils/tailwindClasses";
import { cn } from "@/utils/tailwindMerge";
import React, { FC, HTMLProps, ReactNode } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type: "solid" | "outline" | "link";
  href?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type,
  href,
  className,
  children,
  leftIcon,
  rightIcon,
}) => {
  const buttonClasses = cn(
    `px-5 py-3 cursor-pointer flex items-center`,
    transition,
    className
  );

  const Buttons = {
    solid: cn(
      `bg-white border-white text-black border hover:bg-black hover:text-white hover:opacity-80`,
      buttonClasses
    ),
    outline: cn(
      `bg-black border-white text-white border hover:bg-white hover:text-black hover:opacity-80`,
      buttonClasses
    ),
    link: cn(
      `underline text-white hover:text-white hover:opacity-80`,
      buttonClasses
    ),
  };

  return (
    <a href={href} className={Buttons[type]}>
      {leftIcon && <div className="mr-3">{leftIcon}</div>}
      {children}
      {rightIcon && <div className="ml-auto">{rightIcon}</div>}
    </a>
  );
};

export default Button;
