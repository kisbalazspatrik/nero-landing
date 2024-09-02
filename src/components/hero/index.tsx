import React from "react";
import Container from "../container";
import Button from "../button";

export const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-16 px-2 bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/hero.png')]">
        <p className="mb-2 text-xs font-semibold uppercase text-neutral-300 sm:text-sm md:text-base">
          COMING SOON
        </p>
        <h1 className="text-center text-7xl font-semibold uppercase text-white sm:text-8xl md:text-9xl">
          Enter the void
        </h1>
        <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-300 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          quisquam nemo excepturi officia necessitatibus veritatis enim ipsam!
          Laudantium, reiciendis officia!
        </p>
        <Button type="solid">JOIN WAITLIST</Button>
      </div>
    </Container>
  );
};

export default Hero;
