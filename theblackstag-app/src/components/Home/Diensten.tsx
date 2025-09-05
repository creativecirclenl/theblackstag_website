import Image from "next/image";
import Link from "next/link";

export default function Diensten() {
  const dienstenIntro = {
    title: "The Black Stag Maakt",
    subtitle: "Frisse en creatieve ontwerpoplossingen",
    description:
      "Ons team van experts begeleid je van eerste idee tot eindproduct — volledig en persoonlijk.",
    linktext: "Ontdek meer",
    link: "/diensten",
  };
  const dienstenContent = [
    {
      image: "/images/visuele-identiteit.svg",
      title: "Visuele identiteit",
      description:
        "Je hebt een idee voor een nieuw bedrijf, product of dienst. Al snel daarna is de naam hiervoor een feit, maar dan?",
    },
    {
      image: "/images/promotie-en-uitingen.svg",
      title: "Geboorte- en trouwkaarten",
      description:
        "Bij het creëren van jullie kaart kijken we verder dan alleen een leuk ontwerp. Samen kijken we naar papier, vorm en natuurlijk ook niet te vergeten de envelop.",
    },
    {
      image: "/images/fotografie.svg",
      title: "Fotografie",
      description:
        "Een sterke foto zegt meer dan duizend woorden maar sterke beelden komen in veel verschillende vormen.",
    },
    {
      image: "/images/hulp-op-de-werkvloer.svg",
      title: "Hulp op de werkvloer",
      description:
        "Is je collega met verlof of vertrekt je DTP’er op wereldreis? Geen zorgen — The Black Stag staat klaar als jouw tijdelijke collega.",
    },
  ];
  return (
    <section className="container my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:w-2/3">
          <h3 className="text-yellow-400 uppercase text-lg mb-2 md:text-xl">
            {dienstenIntro.title}
          </h3>
          <h4 className="text-2xl md:text-4xl mb-2">
            {dienstenIntro.subtitle}
          </h4>
          <p className="text-sm md:text-base mb-8">
            {dienstenIntro.description}
          </p>
          <Link
            href={dienstenIntro.link}
            className="border-b leading-relaxed hover:bg-linear-to-t hover:from-50% hover:to-50% hover:from-tbsgreen hover:border-b-0"
          >
            {dienstenIntro.linktext}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dienstenContent.map((item, index) => (
            <div className="" key={index}>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
              <h4 className="text-2xl my-2">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
