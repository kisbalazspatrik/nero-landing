import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../container";
import { cn } from "@/utils/tailwindMerge";
import { transition } from "@/utils/tailwindClasses";

const Footer = () => {
  return (
    <Container className={`justify-between`}>
      <p className="p-3 text-sm font-light text-neutral-300">
        © {new Date().getFullYear()} Nero
      </p>
      <div className="flex border-l border-neutral-700">
        {SocialItems.map((item, index) => (
          <a key={index} href={item.href} target="_b">
            <div
              className={cn(
                `flex p-3 text-xl font-light text-neutral-300 hover:text-black hover:bg-white`,
                transition
              )}
            >
              <item.icon />
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
};

const SocialItems = [
  {
    icon: FaDiscord,
    href: "https://nfteam.eu/discord",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/nfteam_eu",
  },
  {
    icon: FaGithub,
    href: "https://github.com/kisbalazspatrik/nero-landing",
  },
];

export default Footer;
