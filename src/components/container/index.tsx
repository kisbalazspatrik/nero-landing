import { siteMaxWidth } from "@/utils/tailwindClasses";
import { cn } from "@/utils/tailwindMerge";
import React, { FC, HTMLProps, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: HTMLProps<HTMLDivElement>["className"];
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        `full-width border-neutral-700 border sm:m-2 justify-center flex items-center m-3`,
        className,
        siteMaxWidth
      )}
    >
      {children}
    </div>
  );
};

export default Container;
