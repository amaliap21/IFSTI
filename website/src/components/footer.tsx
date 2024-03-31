// Footer.tsx
import Image from "next/image";
import React from "react";

interface Contact {
  name: string;
  lineId?: string;
}

const Footer = () => {
  const services = ["Status Kebunku", "Tani Cerdas", "Belanja", "Edukasi"];
  const contacts: Contact[] = [
    { name: "Amalia Putri", lineId: "amaliap21_" },
    { name: "Willhelmina R Silalahi", lineId: "willhelminarchs" },
    { name: "Viktor", lineId: "" },
  ];

  return (
    <footer className="bg-custom-green text-white w-full relative">
      {/* Icons */}
      <div className="absolute bottom-2 left-2 -rotate-45">
        <Image src="/spark-1.png" alt="Spark 1" width={30} height={30} />
      </div>
      <div className="absolute top-2 right-2 rotate-45">
        <Image src="/spark-2.png" alt="Spark 2" width={30} height={30} />
      </div>
      <div className="absolute bottom-0 right-0"></div>

      {/* Content */}
      <div className="flex flex-col px-20">
        {/* Atas */}
        <div className="lg:pr-5 pt-8 pb-6 md:pt-12 flex flex-col justify-center items-center gap-8 lg:flex-row lg:justify-between lg:items-start lg:gap-0">
          {/* Sisi Kiri */}
          <div className="flex flex-col items-center mb-4 md:mb-0 gap-4">
            <Image
              src="/footer.png"
              alt="Logo Footer"
              width={140}
              height={140}
            />
            <p className="font-semibold text-3xl">AutoFarm Innovation</p>
          </div>

          {/* Sisi Kanan */}
          <div className="flex flex-row justify-start gap-36">
            {/* Layanan Kami */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-semibold text-3xl">Layanan Kami</h3>
              <ul className="flex flex-col gap-4">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            {/* Narahubung */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-semibold text-3xl">Narahubung</h3>
              <ul className="flex flex-col gap-3">
                {" "}
                {/* Adjust gap as needed */}
                {contacts.map((contact) => (
                  <li key={contact.name} className="flex flex-col">
                    <p>
                      {contact.name} <br />
                      Line: {contact.lineId || ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bawah */}
        <div className="flex flex-col items-center">
          <Image src="/leaf.png" alt="Leaf" width={47} height={47} />
          <div className="w-full h-[3px] bg-white mb-4" />
        </div>

        <p className="text-center font-medium text-xl pb-10 mt-2">
          Design and Developed by IFSTI Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
