import Hero from "@/components/hero";
import LayananKami from "@/components/layanan-kami";
import AspirasiKami from "@/components/aspirasi-kami";
import React from "react";
import Image from "next/image";

const images = [
  {
    src: "/daun-1.png",
    alt: "Daun 1",
    width: 185,
    height: 161,
    classname: "top-[235px] right-[250px]",
  },
  {
    src: "/daun-2.png",
    alt: "Daun 2",
    width: 288,
    height: 201,
    classname: "top-[400px] right-[0px]",
  },
  {
    src: "/daun-3.png",
    alt: "Daun 3",
    width: 185,
    height: 161,
    classname: "top-[650px] left-[0px]",
  },
  {
    src: "/daun-4.png",
    alt: "Daun 4",
    width: 185,
    height: 161,
    classname: "bottom-[1150px] right-[0px]",
  },
  {
    src: "/daun-5.png",
    alt: "Daun 5",
    width: 185,
    height: 161,
    classname: "bottom-[45px] left-[100px]",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between relative">
      {images.map((image, index) => (
        <Image
          key={image.alt + index}
          src={image.src}
          alt={image.alt}
          quality={100}
          width={image.width}
          height={image.height}
          className={`absolute ${image.classname} z-50`}
          priority={index === 0}
        />
      ))}

      <Hero />
      <LayananKami />
      <AspirasiKami />
    </main>
  );
}

export const metadata = {
  title: "AutoFarm Innovation",
  description:
    "AutoFarm Innovation adalah platform yang memudahkan petani dalam mengelola pertanian secara efisien dan berkelanjutan",
  generator: "Next.js",
  applicationName: "AutoFarm Innovation",
  colorScheme: "dark",
};
