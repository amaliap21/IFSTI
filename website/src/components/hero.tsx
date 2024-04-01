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
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-screen text-white px-4 md:px-0 ml-36 gap-16  ">
        <h1 className="text-6xl md:text-6xl font-normal mb-6">
          Masa Depan Pertanian <br /> Indonesia yang Berkelanjutan!
        </h1>
        <Button className="text-lg bg-custom-green hover:bg-custom-green-dark font-bold py-2.5 px-3.5 rounded-lg inline-flex items-center justify-center">
          Selengkapnya{""}
          <span className="ml-2">
            <Image src="/arrow.png" alt="Arrow" width={8} height={8} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
