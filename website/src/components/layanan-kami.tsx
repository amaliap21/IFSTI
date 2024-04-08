"use client";
import * as React from "react";
import ServiceCard from "./service-card";
import DotIcon from "./icons/dot-icon";

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
    icon: "/belanja.png",
    title: "Belanja",
    description:
      "Berbagai produk pertanian seperti pupuk, pestisida dan benih, dan alat pertanian dengan mudah.",
  },
  {
    icon: "/belanja.png",
    title: "Belanja",
    description:
      "Berbagai produk pertanian seperti pupuk, pestisida dan benih, dan alat pertanian dengan mudah.",
  },
  {
    icon: "/belanja.png",
    title: "Belanja",
    description:
      "Berbagai produk pertanian seperti pupuk, pestisida dan benih, dan alat pertanian dengan mudah.",
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

  const totalPages = Math.ceil(services.length / itemsPerPage + 1);

  const renderDots = () => {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <DotIcon
            key={index}
            active={index === currentPage}
            className={`cursor-pointer ${
              index === currentPage ? "fill-[#000]" : "fill-[#d7d7d7]"
            }`}
            size={12}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 p-14">
      <h2 className="text-4xl text-black font-normal text-center mb-6">
        Layanan Kami
      </h2>

      <p className="text-center text-lg mb-6 font-light">
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
