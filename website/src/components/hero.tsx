import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src="/plants-agricult.png"
        alt="Plants Agricult"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0 w-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#030914] opacity-65 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-screen text-white px-4 md:px-0 ml-40 gap-16  ">
        <h1 className="text-6xl md:text-6xl font-normal mb-6 leading-loose">
          Masa Depan Pertanian <br /> Indonesia yang Berkelanjutan!
        </h1>
        <Button className="text-2xl bg-custom-green hover:bg-custom-green-dark font-normal py-7 px-5 rounded-lg inline-flex items-center justify-center">
          Selengkapnya{""}
          <span className="ml-5">
            <Image src="/arrow.png" alt="Arrow" width={11} height={18} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
