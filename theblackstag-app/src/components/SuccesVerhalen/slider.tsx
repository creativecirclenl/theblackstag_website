"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Slider({
  slider,
}: {
  slider: {
    images: string[];
    title: string;
    subtitle: string;
    description: string;
  };
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 3 - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 - 1 : prevIndex - 1));
  };
  const navigation = (className: string, buttonClassName: string) => (
    <div className={className}>
      <button className={buttonClassName} onClick={prevSlide}>
        <Image
          src="/images/pijl.svg"
          width={16}
          height={16}
          alt="previous"
          className="transform rotate-135"
        />
      </button>
      <button className={buttonClassName} onClick={nextSlide}>
        <Image
          src="/images/pijl.svg"
          width={16}
          height={16}
          alt="next"
          className="transform -rotate-45"
        />
      </button>
    </div>
  );

  return (
    <section className="overflow-hidden my-24">
      <div className="px-4 md:w-[160%] md:px-0 md:flex md:gap-x-16 md:-translate-x-[18.5%]">
        {slider.images.map((image: string, index: number) =>
          index !== 2 ? (
            <div
              key={index}
              className={`${index === 1 ? "hidden md:block" : "block"} md:w-2/5`}
            >
              <div className="h-[50vh] min-h-80 overflow-hidden md:h-[60vh]">
                <Image
                  src={
                    slider.images[
                      currentIndex === 0
                        ? index
                        : currentIndex === 1
                          ? index + 1
                          : index === 0
                            ? 2
                            : index - 1
                    ] || "placeholder.svg"
                  }
                  alt={slider.title}
                  height={600}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              {index === 0 &&
                navigation("flex items-center gap-4 pt-4 md:hidden", "h-8 w-8")}
            </div>
          ) : (
            <div
              key={index}
              className="slider no-scrollbar md:w-2/5 h-auto overflow-visible flex flex-col justify-start md:h-[60vh] md:overflow-y-scroll"
            >
              <h2 className="text-2xl uppercase text-tbsorange">
                {slider.title}
              </h2>
              <h3 className="text-4xl w-full mb-4 md:w-1/2">
                {slider.subtitle}
              </h3>
              <div
                className="my-4 text-gray-100"
                dangerouslySetInnerHTML={{
                  __html: slider.description,
                }}
              />
              {navigation("hidden md:block", "h-8 w-8 md:m-4")}
            </div>
          ),
        )}
        <div className="hidden md:block md:w-2/5 md:h-[60vh] overflow-hidden">
          <Image
            src={
              slider.images[
                currentIndex === 0 ? 2 : currentIndex === 1 ? 0 : 1
              ] || "placeholder.svg"
            }
            alt={slider.title || "placeholder"}
            height={600}
            width={1200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
