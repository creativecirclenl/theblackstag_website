"use client";
import { useState } from "react";
import plus from "@/../public/images/plus.svg";
import min from "@/../public/images/min-roze.svg";
import Image from "next/image";

interface AccordionProps {
  content: { title: string; description: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ content }) => {
  const [open, setOpen] = useState<number>(2);

  return (
    <>
      {content.map((step, index) => (
        <div key={index} className="border-b w-full md:w-2/3 overflow-hidden">
          <h4
            className="text-2xl py-4 flex justify-between cursor-pointer"
            onClick={() => setOpen(index)}
          >
            {step.title}
            {open === index ? (
              <Image src={min} width={18} height={18} alt="close" />
            ) : (
              <Image src={plus} width={18} height={18} alt="open" />
            )}
          </h4>
          <p
            className={`${
              open !== index && "hidden"
            } transition-all duration-500 ease-out text-base py-4`}
          >
            {step.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default Accordion;
