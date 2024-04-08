import React from "react";
import Image from "next/image";

const LayananKami: React.FC = () => {
  const title = "Aspirasi Kami";
  const description = (
    <>
      Tantangan yang dihadapi oleh sektor pertanian Indonesia, seperti degradasi
      lahan pada <strong> 7 juta hektar pertanian </strong>yang menyebabkan
      <strong> kehilangan hasil panen sebesar 20%,</strong> serta rendahnya
      hasil panen yang mengakibatkan pendapatan petani yang minim. Dampaknya,
      petani mengalami kesulitan dalam{" "}
      <strong>
        mengakses fasilitas pertanian berkualitas karena biayanya yang tinggi,{" "}
      </strong>
      sementara kurangnya pengetahuan petani tentang praktik pertanian
      menyulitkan peningkatan hasil panen.
    </>
  );
  const steps = [
    {
      title: "Mengintegrasikan Teknologi",
      description:
        "Penggunaan IoT dan AI dalam pemantauan dan pengelolaan kondisi pertanian secara otomatis untuk meningkatkan produktivitas dan efisiensi.",
      imageUrl: "/langkah-1.png", // Change to your image path
    },
    {
      title: "Menyejahterakan Para Petani",
      description:
        "Pendapatan yang lebih besar melalui penggunaan pupuk yang lebih efisien.",
      imageUrl: "/langkah-2.png", // Change to your image path
    },
    // ... add more steps if necessary
  ];

  return (
    <div className="bg-[#F0F0EB] p-4 lg:py-20 lg:px-24">
      <h2 className="text-6xl font-normal text-center mb-24">{title}</h2>

      <div className="flex flex-wrap lg:flex-nowrap gap-14">
        <p className="mb-8 text-xl">{description}</p>
        <Image
          src="/peta.png"
          alt="Map"
          width={600}
          height={250}
          className="w-[600px] h-[250px]"
        />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-28 gap-60">
        <div className="w-full lg:w-1/3">
          <Image
            src="/survey.png"
            alt="Inspirational Image"
            width={600}
            height={600}
            className="rounded-full w-[600px] max-w-none"
          />
        </div>

        <div className="flex flex-col space-y-4 gap-4">
          <h3 className="text-6xl">Apa langkah kami?</h3>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-row items-center p-4 gap-8">
              <Image
                src={step.imageUrl}
                alt="Inspirational Image"
                width={65}
                height={65}
                className="w-[65px]"
              />
              <div className="flex flex-col">
                <h3 className="text-4xl text-custom-green font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-2xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayananKami;
