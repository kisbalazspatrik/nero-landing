import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="full-width border-neutral-700 border max-w-[1200px] sm:m-2 justify-between flex items-center flex-row">
      <p className="p-3 text-sm font-thin text-neutral-300">
        © {new Date().getFullYear()} Nero
      </p>
      <div className="flex sm:border-l border-neutral-700">
        {SocialItems.map((item, index) => (
          <a key={index} href={item.href} target="_b">
            <div className="flex p-3 text-xl font-thin transition-all duration-150 ease-in-out text-neutral-300 hover:text-black hover:bg-white">
              <item.icon />
            </div>
          </a>
        ))}
      </div>
    </div>
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
