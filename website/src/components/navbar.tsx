import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface PathItem {
  name: string;
  url: string;
  isButton?: boolean;
}

interface NavbarProps {
  expandNavbar: boolean;
  setExpandNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ expandNavbar, setExpandNavbar }) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const blackBgRef = useRef<HTMLDivElement>(null);

  const path: PathItem[] = [
    { name: "Status Kebunku", url: "/Status-Kebunku" },
    { name: "Tani Cerdas", url: "/Tani-Cerdas" },
    { name: "Belanja", url: "/Belanja" },
    { name: "Edukasi", url: "/Edukasi" },
    { name: "Daftar", url: "/Daftar", isButton: true },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        blackBgRef.current &&
        !blackBgRef.current.contains(event.target as Node)
      ) {
        setExpandNavbar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setExpandNavbar]);

  return (
    <nav className="sticky left-0 right-0 top-0 flex justify-between z-20 w-full bg-white py-6 px-7 lg:px-10 xl:px-16 2xl:px-24 lg:py-6">
      <Image
        src="/navbar.png"
        alt="Logo Navbar"
        width={292}
        height={75}
        className="w-[75px] lg:w-[292px] lg-h-[75px] rounded"
      />

      <ul
        className={`text-custom-black font-normal fixed right-0 top-0 z-10 flex h-full w-7/12 flex-col gap-5 lg:gap-10 xl:gap-12 2xl:gap-16 pl-10 sm:pl-20 md:pl-24 max-lg:py-10 font-outfit text-base duration-300 ease-in-out lg:static lg:h-auto lg:flex-1 lg:justify-end lg:translate-x-0 lg:flex-row lg:items-center lg:border-none lg:bg-transparent xl:text-xl ${
          expandNavbar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {path.map((item) => {
          if (!item.isButton) {
            return (
              <Link key={item.name} href={item.url}>
                <li
                  className={`${
                    pathname.toLowerCase() === item.url.toLowerCase()
                      ? "text-custom-green"
                      : "text-custom-black"
                  } hover:text-custom-green cursor-pointer`}
                >
                  {item.name}
                </li>
              </Link>
            );
          } else {
            return (
              <li key={item.name} className="mt-4 lg:mt-0">
                <Button
                  className="
                  font-normal z-10 font-outfit text-base duration-300 ease-in-out xl:text-xl 
                  inline-block rounded bg-custom-green px-12 py-0.5 text-white hover:bg-white hover:text-custom-black"
                  onClick={() => {
                    console.log("Daftar");
                  }}
                >
                  Daftar
                </Button>
              </li>
            );
          }
        })}
      </ul>

      {expandNavbar && (
        <div
          ref={blackBgRef}
          className="fixed inset-0 z-0 h-full w-full bg-opacity-40 bg-custom-black lg:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
