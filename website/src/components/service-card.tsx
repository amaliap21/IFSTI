import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="px-10 pb-4 pt-12 shadow-lg rounded-lg bg-white relative mt-14">
      <Image
        src={icon}
        alt={title}
        width={95}
        height={95}
        className="absolute top-[-45px] "
      />
      <h3 className="text-2xl font-normal mt-4">{title}</h3>
      <p className="text-xl text-black mt-1 font-light">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
