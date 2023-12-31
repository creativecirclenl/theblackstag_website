"use client";
import React, { useState, useEffect } from "react";
import logo1 from "@/../public/images/logo-wit.svg";
import logo2 from "@/../public/images/logo-beeldmerk.svg";
import Image from "next/image";

const Carrousel: React.FC = () => {
  const [logos, setLogos] = useState([
    logo1,
    logo2,
    logo1,
    logo2,
    logo1,
    logo2,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const firstLogo = logos.shift();
      logos.push(firstLogo);
      setLogos([...logos]);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos]);

  return (
    <div className="flex items-center justify-center my-12 h-40 overflow-hidden">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-1/2 p-2 md:w-1/6 md:p-4 even:md:border-x md:border-gray-300"
        >
          <Image
            src={logo}
            width={100}
            height={100}
            className="mx-auto h-40"
            alt="Client Logo"
          />
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
