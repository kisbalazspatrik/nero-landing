/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import Container from "@/components/container";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <CTA
        imgSrc="/latest-drop.png"
        imgAlt="NFT Drop"
        headline="Featured"
        title="Latest NFT Drop"
        description="Dive into the 'Digital Dreamscape' collection, where each
          NFT serves as a gateway to immersive virtual worlds. Crafted by
          visionary artists, this series blends surreal landscapes with
          futuristic motifs, offering collectors a piece of the metaverse's
          untapped beauty and potential."
        button={{
          text: "Check it out",
          href: "#",
          rightIcon: <BsArrowRight />,
        }}
        reverse
      />
      <CTA
        imgSrc="/latest-drop.png"
        imgAlt="NFT Drop"
        headline="Featured"
        title="Latest NFT Drop"
        description="Dive into the 'Digital Dreamscape' collection, where each
          NFT serves as a gateway to immersive virtual worlds. Crafted by
          visionary artists, this series blends surreal landscapes with
          futuristic motifs, offering collectors a piece of the metaverse's
          untapped beauty and potential."
        button={{
          text: "Check it out",
          href: "#",
          rightIcon: <BsArrowRight />,
        }}
      />
    </>
  );
}
