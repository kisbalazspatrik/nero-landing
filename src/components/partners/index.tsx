/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "../container";
import { siteMaxWidth, transition } from "@/utils/tailwindClasses";
import { cn } from "@/utils/tailwindMerge";

const Partners = () => {
  return (
    <>
      <Container className="flex-col p-3 md:p-6 mb-0 sm:mb-0 items-start">
        <p className="uppercase">Partnerships</p>
      </Container>
      <div
        className={cn(`grid grid-cols-3 md:grid-cols-6 w-full`, siteMaxWidth)}
      >
        {PartnerList.map((partner) => (
          <a key={partner.name} href="#">
            <img
              src={partner.imgSrc}
              alt={partner.name}
              className={cn(`w-full h-auto bg-black hover:invert`, transition)}
            />
          </a>
        ))}
      </div>
    </>
  );
};

const PartnerList = [
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "#",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "#",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "#",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "#",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "#",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "#",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "#",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "#",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "#",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "#",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "#",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "#",
  },
];

export default Partners;
