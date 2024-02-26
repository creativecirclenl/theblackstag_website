import Intro from "@/components/Home/Intro";
import SuccesVerhalen from "@/components/SuccesVerhalen";

export default function SuccesVerhalenPage() {
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
        slug: "fortune-factory",
        photo: "/images/fortunefactory.jpg",
        subtitle: "Rebranding en compleet nieuwe siging",
        hashtags: ["#rebranding", "#signing", "#huisstijl"],
      },
      {
        type: "Geboortekaartje",
        title: "Geboorte kaartje voor Casper",
        slug: "paspoort-van-casper",
        photo: "/images/caspertop.webp",
        subtitle: "Een persoonlijk en uniek kaartje",
        hashtags: ["#geboortekaartje", "#VORMGEVING", "#KLANTNAAM"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        slug: "lorem-ipsum-dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        slug: "lorem-ipsum-dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        slug: "lorem-ipsum-dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        slug: "lorem-ipsum-dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        slug: "lorem-ipsum-dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Huisstijl",
        title: "Lorem ipsum dolor",
        slug: "lorem-ipsum-dolor",
        photo: "/images/placeholder.svg",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
    ],
  };

  return (
    <div className="container min-h-[calc(100vh-7rem)]">
      <Intro content={content.Intro} />
      <SuccesVerhalen content={content.SuccesVerhalen} />
    </div>
  );
}
