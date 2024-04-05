/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import Container from "@/components/container";
import SectionCTA from "@/components/sectionCta";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Container className="flex-col p-3">
        <p>Nero</p>
        <div className="flex flex-row">
          <Button type="solid">Solid</Button>
          <Button type="outline">Outline</Button>
          <Button type="link">Link</Button>
        </div>
      </Container>
      <SectionCTA
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
