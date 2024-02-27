"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carrousel: React.FC = () => {
  const [logos, setLogos] = useState([
    "/images/logo-ag-autoservice.svg",
    "/images/logo-fortune-factory.svg",
    "/images/logo-ggd-zhz.svg",
    "/images/logo-lindi.svg",
    "/images/logo-promes.svg",
    "/images/logo-van-der-elst.svg",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const firstLogo = logos.shift() as string;
      logos.push(firstLogo);
      setLogos([...logos]);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos]);

  return (
    <section className="overflow-hidden my-12 h-40">
      <div className="flex items-center justify-center w-[300%] md:w-full">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-1/2 p-2 md:w-1/6 md:p-4 even:md:border-x md:border-gray-300"
          >
            <Image
              src={logo}
              width={100}
              height={100}
              className="mx-auto h-24"
              alt="Client Logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carrousel;
