import React from "react";
import Container from "../container";
import {
  insidePadding,
  siteMaxWidth,
  transition,
} from "@/utils/tailwindClasses";
import { cn } from "@/utils/tailwindMerge";
import Image from "next/image";

const Partners = () => {
  return (
    <>
      <Container
        className={`flex-col ${insidePadding} mb-0 sm:mb-0 items-start`}
      >
        <p className="uppercase">Partnerships</p>
      </Container>
      <div
        className={cn(
          `grid grid-cols-3 mx-3 sm:mx-2 md:grid-cols-6 full-width`,
          siteMaxWidth
        )}
      >
        {PartnerList.map((partner) => (
          <a key={partner.name} href={partner.link} target="_blank">
            <Image
              src={partner.imgSrc}
              alt={partner.name}
              width={512}
              height={512}
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
    link: "https://nfteam.eu",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "https://monochroma.hu",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "https://nfteam.eu",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "https://monochroma.hu",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "https://nfteam.eu",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "https://monochroma.hu",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "https://nfteam.eu",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "https://monochroma.hu",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "https://nfteam.eu",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "https://monochroma.hu",
  },
  {
    name: "NFTeam",
    imgSrc: "/partners/nfteam.png",
    link: "https://nfteam.eu",
  },
  {
    name: "Monochroma",
    imgSrc: "/partners/monochroma.png",
    link: "https://monochroma.hu",
  },
];

export default Partners;
