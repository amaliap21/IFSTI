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
    <div className="pl-8 pr-10 pb-8 pt-12 drop-shadow-lg rounded-lg bg-white relative mt-14 mx-1">
      <Image
        src={icon}
        alt={title}
        width={95}
        height={95}
        className="absolute top-[-45px] "
      />
      <h3 className="text-3xl font-normal mt-4">{title}</h3>
      <p className="text-2xl text-black mt-4 font-light">{description}</p>
    </div>
  );
};

export default ServiceCard;
