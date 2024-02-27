"use client";
import Link from "next/link";
import CaseItem from "../CaseItem";
import Image from "next/image";

function scrollRight() {
  const element = document.querySelector("#succes-verhalen");
  const width =
    document.querySelector("#succes-verhalen a")?.getBoundingClientRect()
      .width || 400;
  if (element) {
    element.scrollBy({
      left: width,
      behavior: "smooth",
    });
  }
}

function scrollLeft() {
  const element = document.querySelector("#succes-verhalen");
  const elementA = document.querySelector("#succes-verhalen a");
  const width = elementA ? elementA.getBoundingClientRect().width + 32 : 0 || 0;
  if (element) {
    element.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  }
}

export default function Cases() {
  const SuccesVerhalen = [
    {
      title: "Fortune Factory",
      slug: "fortune-factory",
      photo: "/images/fortunefactory.jpg",
      subtitle: "Rebranding en compleet nieuwe siging",
    },
    {
      title: "Geboorte kaartje voor Casper",
      slug: "casper",
      photo: "/images/casper1.webp",
      subtitle: "Een persoonlijk en uniek kaartje",
    },
    {
      title: "Anna & Wesley",
      slug: "anna-wesley",
      photo: "/images/anna-wesley1.webp",
      subtitle: "Een kaartje in meerdere talen voor de hele familie.",
    },
    {
      title: "Fémur Beheer",
      slug: "femur-beheer",
      photo: "/images/femur-beheer1.webp",
      subtitle: "VvE saai? Nee juist helemaal hip!",
    },
    {
      title: "Lindi",
      slug: "lindi",
      photo: "/images/lindi1.webp",
      subtitle: "Ontwikkelingspsycholoog en Speltherapeut",
    },
    {
      title: "GGD ZHZ",
      slug: "kookboek-ggd-zhz",
      photo: "/images/kookboek-ggd-zhz1.webp",
      subtitle: "Een kookboek om Nieuw-Lekkerland gezonder te laten eten.",
    },
    {
      title: "PT I’ts Personal",
      slug: "pt-its-personal",
      photo: "/images/pt-its-personal1.webp",
      subtitle:
        "It's Personal streeft ernaar bij te dragen aan de gezondheid en behoeften van de klant.",
    },
  ];

  return (
    <section className="my-48">
      <div className="container md:flex justify-between items-end">
        <div>
          <h3 className="text-[#68beec] text-2xl uppercase">Cases</h3>
          <h4 className="text-4xl font-bold">Succesverhalen</h4>
        </div>
        <Link
          href="/succesverhalen"
          className="border-b leading-relaxed hover:bg-gradient-to-t hover:from-50% hover:to-50% hover:from-tbsgreen hover:border-b-0"
        >
          Bekijk meer werk
        </Link>
      </div>
      <div
        id="succes-verhalen"
        className="mt-12 no-scrollbar overflow-x-scroll"
      >
        <div className="container">
          <div className="w-fit flex gap-4">
            {SuccesVerhalen.sort(() => Math.random() - 0.5).map(
              (succesVerhaal, index) => (
                <CaseItem
                  key={index}
                  title={succesVerhaal.title}
                  description={succesVerhaal.subtitle}
                  image={succesVerhaal.photo}
                  link={`/succesverhalen/${succesVerhaal.slug}`}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className=" container flex gap-4">
        <button className="h-8 w-8 m-4" onClick={scrollLeft}>
          <Image
            src="/images/pijl.svg"
            width={16}
            height={16}
            alt="previous"
            className="transform rotate-[135deg]"
          />
        </button>
        <button className="h-8 w-8 m-4" onClick={scrollRight}>
          <Image
            src="/images/pijl.svg"
            width={16}
            height={16}
            alt="next"
            className="transform -rotate-45"
          />
        </button>
      </div>
    </section>
  );
}
