import Intro from "@/components/Home/Intro";
import Image from "next/image";

interface SuccesVerhaal {
  type: string;
  title: string;
  photo: string;
  subtitle: string;
  hashtags: string[];
}

const SuccesVerhalenPage: React.FC = () => {
  const content = {
    Intro: {
      title: "Succes-verhalen",
      subtitle: "van idee tot uitvoering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris dui, commodo vitae magna posuere, egestas aliquet dui. Morbi quis neque sit amet purus consequat cursus nec vitae arcu. Mauris nec erat dolor.",
      colors: "from-tbspurple to-tbsred",
      size: "w-fit md:w-1/2 text-7xl md:text-[125px]",
      subsize: "text-lg md:w-1/2 md:text-[50px] lg:pr-24",
    },
    SuccesVerhalen: [
      {
        type: "Rebranding",
        title: "Fortune Factory",
        photo: "/images/fortunefactory.jpg",
        subtitle: "Rebranding en compleet nieuwe siging",
        hashtags: ["#rebranding", "#signing", "#huisstijl"],
      },
      {
        type: "Advertentie",
        title: "Adverts",
        photo: "/images/adverts.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#ADVERTENTIE", "#VORMGEVING", "#KLANTNAAM"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
    ],
  };

  return (
    <div className="container min-h-[calc(100vh-7rem)]">
      <Intro content={content.Intro} />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {content.SuccesVerhalen.map(
          (succesverhaal: SuccesVerhaal, index: number) => (
            <>
              <div key={index} className="flex flex-col justify-between">
                <div className="relative flex flex-col justify-between bg-gradient-to-b from-tbspurple to-tbsred h-[480px]">
                  <Image
                    className="hover:opacity-15 transition-opacity duration-500 ease-in-out"
                    src={succesverhaal.photo}
                    fill
                    alt={succesverhaal.title}
                  />
                  <div className="absolute z-10 left-0 top-0 flex flex-col justify-between">
                    <div className="flex flex-col justify-between p-12">
                      <h2 className="text-2xl">{succesverhaal.type}</h2>
                      <h3 className="text-4xl font-semibold">
                        {succesverhaal.title}
                      </h3>
                      <p>{succesverhaal.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="uppercase text-lg py-4">
                    {succesverhaal.hashtags}
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
            </>
          )
        )}
      </section>
    </div>
  );
};

export default SuccesVerhalenPage;
