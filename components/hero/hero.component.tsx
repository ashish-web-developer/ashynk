import Image from "next/image";
// types
import type { FC } from "react";


const Hero: FC = () => {
  return (
    <section className="flex h-[calc(100vh-108px)] max-h-[900px] w-full justify-center">
      <div className="relative h-full w-7xl px-8">
        <div className="absolute bottom-[0] left-1/2 h-[600px] w-[700px] -translate-x-1/2">
          <Image
            src="/hero/green-stroke.png"
            fill={true}
            alt="green stroke"
            className="object-contain object-bottom"
          />
        </div>
        <div className="absolute bottom-[0] left-1/2 h-[500px] w-[700px] -translate-x-1/2">
          <Image
            src="/hero/hero-profile.png"
            fill={true}
            alt="user-profile"
            className="object-contain object-bottom"
          />
        </div>
        <h3 className="pt-16 text-5xl leading-snug font-bold tracking-wider">
          Hey There,
          <br /> I'm Ashish
        </h3>
        <p className="float-right text-base font-medium">
          I design beautifully Simple <br />
          things, and I love what I do
        </p>
        <span className="absolute top-1/2 font-semibold text-red-600">
          ashish_classic@proton.me
        </span>
        <div className="absolute bottom-[108px] inline-flex gap-x-4 uppercase">
          <span className="text-6xl font-bold">02</span>
          <span className="text-lg font-semibold">
            Years <br />
            Experience
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
