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

  return (
    <section className="overflow-hidden my-24">
      <div className="md:w-[160%] md:flex md:gap-x-16 md:-translate-x-[18.5%]">
        {slider.images.map((image: string, index: number) =>
          index !== 2 ? (
            <div key={index} className="md:w-2/5 h-[60vh] overflow-hidden">
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
          ) : (
            <div
              key={index}
              className="slider no-scrollbar md:w-2/5 h-[60vh] overflow-y-scroll flex flex-col justify-start"
            >
              <h2 className="text-2xl uppercase text-tbsorange">
                {slider.title}
              </h2>
              <h3 className="text-4xl w-1/2 mb-4">{slider.subtitle}</h3>
              <div
                className="my-4 text-gray-100"
                dangerouslySetInnerHTML={{
                  __html: slider.description,
                }}
              />
              <div>
                <button className="h-8 w-8 m-4" onClick={prevSlide}>
                  <Image
                    src="/images/pijl.svg"
                    width={16}
                    height={16}
                    alt="previous"
                    className="transform rotate-135"
                  />
                </button>
                <button className="h-8 w-8 m-4" onClick={nextSlide}>
                  <Image
                    src="/images/pijl.svg"
                    width={16}
                    height={16}
                    alt="next"
                    className="transform -rotate-45"
                  />
                </button>
              </div>
            </div>
          )
        )}
        <div className="md:w-2/5 h-[60vh] overflow-hidden">
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
