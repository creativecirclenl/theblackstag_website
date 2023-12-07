import visueleIdentiteit from "@/../public/images/visuele-identiteit.svg";
import promotieEnUitingen from "@/../public/images/promotie-en-uitingen.svg";
import fotografie from "@/../public/images/fotografie.svg";
import hulpOpDeWerkvloer from "@/../public/images/hulp-op-de-werkvloer.svg";
import Image from "next/image";
import Link from "next/link";

const dienstenIntro = {
  title: " The Black Stag Maakt",
  subtitle: "Frisse en creatieve ontwerpoplossingen",
  description:
    "Het team van experts zal de volledige ontwikkelingscyclus van je product afhandelen, van idee tot uitwerking.",
  link: "/diensten",
};
const dienstenContent = [
  {
    image: visueleIdentiteit,
    title: "Visuele identiteit",
    description: "Natus error sit voluptatem accus auntim doloremque lautan.",
  },
  {
    image: promotieEnUitingen,
    title: "Promotie en uitingen",
    description: "Natus error sit voluptatem accus auntim doloremque lautan.",
  },
  {
    image: fotografie,
    title: "Fotografie",
    description: "Natus error sit voluptatem accus auntim doloremque lautan.",
  },
  {
    image: hulpOpDeWerkvloer,
    title: "Hulp op de werkvloer",
    description: "Natus error sit voluptatem accus auntim doloremque lautan.",
  },
];

const Diensten: React.FC = () => {
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
          <Link href={dienstenIntro.link}>Ondek meer</Link>
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
};

export default Diensten;
