import React, { FC, HTMLProps, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: HTMLProps<HTMLDivElement>["className"];
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`full-width border-neutral-700 border max-w-[1200px] sm:m-2 justify-center flex items-center m-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
