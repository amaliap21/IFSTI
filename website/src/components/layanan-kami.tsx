"use client";
import React, { useState } from "react";
import ServiceCard from "./service-card";
import Pagination from "./pagination";

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

  // ... Add more services as needed
];

const itemsPerPage = 3; // Adjust based on how many items you want per page

// export const LayananKami: React.FC = () => {
const LayananKami = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Layanan Kami</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {currentServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default LayananKami;
