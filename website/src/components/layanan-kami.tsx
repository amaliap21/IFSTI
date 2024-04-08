"use client";
import * as React from "react";
import ServiceCard from "./service-card";
import DotIcon from "./icons/dot-icon";
import { Button } from "./ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  {
    icon: "/status-kebunku.png",
    title: "Status Kebunku",
    description:
      "Memantau kesehatan tanaman, kelembapan tanah, dan cuaca secara real-time.",
  },
  {
    icon: "/tani-cerdas.png",
    title: "Tani Cerdas",
    description:
      "Otomatisasi irigasi, pemupukan, dan pengendalian hama pada tanaman.",
  },
  {
    icon: "/belanja.png",
    title: "Belanja",
    description:
      "Berbagai produk pertanian seperti pupuk, pestisida dan benih, dan alat pertanian dengan mudah.",
  },
  {
    icon: "/edukasi.png",
    title: "Edukasi",
    description:
      "Berbagai artikel informatif tentang pengelolaan kebun yang optimal.",
  },
];

const LayananKami = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Dots Icon Handle
  const itemsPerPage = 2;
  const currentPage = current - 1;

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  const isActive = true ? currentPage < totalPages - 1 : currentPage > 0;

  const renderDots = () => {
    return (
      <Button
        className="bg-white hover:bg-white flex mx-auto space-x-5 mt-2"
        onClick={isActive ? scrollNext : scrollPrev}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <DotIcon
            key={index}
            active={index === currentPage}
            className={`cursor-pointer rounded-full w-6 h-6 ${
              index === currentPage ? "fill-[#000]" : "fill-[#d7d7d7]"
            }`}
            size={12}
          />
        ))}
      </Button>
    );
  };

  return (
    <div className=" bg-[#FFF] pb-32 pt-14 px-24">
      <h2 className="text-6xl text-black font-normal text-center mb-6">
        Layanan Kami
      </h2>

      <p className="text-center text-2xl mb-6 font-light">
        AutoFarm Innovation menyediakan berbagai fitur dan layanan yang dapat
        dimanfaatkan oleh para petani
      </p>

      <Carousel setApi={setApi}>
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem
              key={service.title + index}
              className="flex-none basis-1/3"
            >
              <ServiceCard {...service} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {renderDots()}
    </div>
  );
};

export default LayananKami;
