/* eslint-disable @next/next/no-img-element */
import React, { FC, ReactNode } from "react";
import Container from "../container";
import Button from "../button";
import { BsArrowRight } from "react-icons/bs";
import { insidePadding } from "@/utils/tailwindClasses";

interface CTAProps {
  imgSrc: string;
  imgAlt: string;
  headline: string;
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
  };
  reverse?: boolean;
}

const CTA: FC<CTAProps> = ({
  imgSrc,
  imgAlt,
  headline,
  title,
  description,
  button,
  reverse,
}) => {
  return (
    <Container
      className={
        reverse
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      }
    >
      <div className="w-full md:w-1/2 md:border-r border-neutral-700 bg-neutral-800 flex items-center justify-center">
        <img src={imgSrc} width={"100%"} height={"auto"} alt={imgAlt} />
      </div>
      <div className={`w-full md:w-1/2 flex flex-col ${insidePadding}`}>
        <p className="uppercase font-light text-neutral-300">{headline}</p>
        <p className="mb-5 uppercase font-semibold text-4xl">{title}</p>
        <p className="mb-5 font-light">{description}</p>
        <Button
          type="solid"
          className="uppercase font-light"
          href={button.href}
          rightIcon={button.rightIcon}
          leftIcon={button.leftIcon}
        >
          {button.text}
        </Button>
      </div>
    </Container>
  );
};

export default CTA;
