import Image from "next/image";
import Link from "next/link";
import React from "react";
interface SuccesVerhaal {
  type: string;
  title: string;
  slug: string;
  photo: string;
  subtitle: string;
  hashtags: string[];
}
interface SuccesVerhalenProps {
  content: SuccesVerhaal[];
}

const SuccesVerhalen: React.FC<SuccesVerhalenProps> = ({ content }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {content.map((succesverhaal: SuccesVerhaal, index: number) => (
        <React.Fragment key={index}>
          <div className="group flex flex-col justify-between">
            <Link href={`/succesverhalen/${succesverhaal.slug}`}>
              <div className="relative flex flex-col justify-between bg-gradient-to-b from-tbspurple to-tbsred h-[480px]">
                <Image
                  className="group-hover:opacity-15 transition-opacity duration-500 ease-in-out"
                  src={succesverhaal.photo}
                  fill
                  alt={succesverhaal.title}
                />
                <div className="hidden absolute z-10 left-0 top-0 group-hover:flex flex-col justify-between">
                  <div className="flex flex-col justify-between p-12">
                    <h2 className="text-2xl">{succesverhaal.type}</h2>
                    <h3 className="text-4xl font-semibold">
                      {succesverhaal.title}
                    </h3>
                    <p>{succesverhaal.subtitle}</p>
                  </div>
                </div>
                <Image
                  className="invisible group-hover:visible absolute bottom-4 right-4"
                  src="/images/pijl.svg"
                  alt="pijl"
                  width={50}
                  height={50}
                />
              </div>
            </Link>
            <div className="flex flex-col justify-between">
              <p className="uppercase text-lg py-4">
                {succesverhaal.hashtags && succesverhaal.hashtags.join(" ")}
              </p>
            </div>
          </div>
          {index === 3 && (
            <div className="col-span-2 my-12">
              <h3 className="w-fit md:w-1/2 text-5xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-none bg-gradient-to-r from-tbspurple to-tbsred bg-clip-text text-transparent font-bold">
                Laten we samenwerken
              </h3>
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default SuccesVerhalen;
