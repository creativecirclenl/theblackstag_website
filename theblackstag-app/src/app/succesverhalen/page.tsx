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
        slug: "casper",
        photo: "/images/casper1.webp",
        subtitle: "Een persoonlijk en uniek kaartje",
        hashtags: ["#geboortekaartje", "#ontwerp", "#signing"],
      },
      {
        type: "Trouwkaarten",
        title: "Anna & Wesley",
        slug: "anna-wesley",
        photo: "/images/anna-wesley1.webp",
        subtitle: "Een kaartje in meerdere talen voor de hele familie.",
        hashtags: ["#trouwkaarten", "#ontwerp", "#signing"],
      },
      {
        type: "Rebranding",
        title: "Fémur Beheer",
        slug: "femur-beheer",
        photo: "/images/femur-beheer1.webp",
        subtitle: "VvE saai? Nee juist helemaal hip!",
        hashtags: ["#rebranding", "#signing", "#huisstijl"],
      },
      {
        type: "Rebranding",
        title: "Lindi",
        slug: "lindi",
        photo: "/images/lindi1.webp",
        subtitle: "Ontwikkelingspsycholoog en Speltherapeut",
        hashtags: ["#HUISSTIJL", "#ONTWERP", "#SIGNING"],
      },
      {
        type: "Kookboek",
        title: "GGD ZHZ",
        slug: "kookboek-ggd-zhz",
        photo: "/images/kookboek-ggd-zhz1.webp",
        subtitle: "Een kookboek om Nieuw-Lekkerland gezonder te laten eten.",
        hashtags: ["#kookboek", "#ontwerp", "#signing"],
      },
      {
        type: "Huisstijl ontwikkeling",
        title: "PT I’ts Personal",
        slug: "pt-its-personal",
        photo: "/images/pt-its-personal1.webp",
        subtitle:
          "It's Personal streeft ernaar bij te dragen aan de gezondheid en behoeften van de klant.",
        hashtags: ["#huisstijl", "#ontwerp", "#signing"],
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
