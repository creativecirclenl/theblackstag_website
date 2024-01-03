import Cases from "@/components/Home/Cases";
import Intro from "@/components/SuccesVerhalen/intro";
import Slider from "@/components/SuccesVerhalen/slider";
import Image from "next/image";

export function generateStaticParams() {
  return [
    { slug: "fortune-factory" },
    { slug: "adverts" },
    { slug: "lorem-ipsum-dolor" },
  ];
}

export default function SuccessStoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const content = [
    {
      slug: "fortune-factory",
      type: "rebranding",
      title: "Fortune Factory",
      description:
        "Utvariustelus diam,achendrerit eliteficiturnec. Praesentdictum dapibusdiam vitae lacinia.",
      colors: "from-tbsorange to-tbsyellow",
      image: "/images/fortunefactory.jpg",
      slider: {
        images: [
          "/images/fortunefactory1.jpg",
          "/images/fortunefactory2.jpg",
          "/images/fortunefactory3.jpg",
        ],
        title: "REBRANDING FORTUNE FACTORY",
        subtitle: "Van logo tot signing",
        description:
          "<p>Cras commodo a dolor vels agitis. Aliquam interdum suscipit neque none ficitur. Quisque sit amet erat placerat, lacinia quam a, pharetra libero.</p><p>idplaceratnulafacilisisauctor.Nulaeuleoeunequeplaceratsolicitudineteuelit.Vivamus placeratexenim.Crassitametipsum utipsum luctussagitisvestibulum etnisl.Nam telusdolor, ornareutdolorut,scelerisquemolismi.</p>",
      },
    },
    {
      slug: "adverts",
      type: "adverts",
      title: "Adverts",
      description: "Lorem ipsum dolor sit amet",
      colors: "from-tbsgreen to-tbsblue",
      image: "/images/adverts.svg",
      slider: {
        images: [
          "/images/fortunefactory1.jpg",
          "/images/fortunefactory2.jpg",
          "/images/fortunefactory3.jpg",
        ],
        title: "REBRANDING FORTUNE FACTORY",
        subtitle: "Van logo tot signing",
        description:
          "<p>Cras commodo a dolor vels agitis. Aliquam interdum suscipit neque none ficitur. Quisque sit amet erat placerat, lacinia quam a, pharetra libero.</p><p>idplaceratnulafacilisisauctor.Nulaeuleoeunequeplaceratsolicitudineteuelit.Vivamus placeratexenim.Crassitametipsum utipsum luctussagitisvestibulum etnisl.Nam telusdolor, ornareutdolorut,scelerisquemolismi.</p>",
      },
    },
    {
      slug: "lorem-ipsum-dolor",
      type: "rebranding",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet",
      colors: "from-tbsgreen to-tbsblue",
      image: "/images/placeholder.svg",
      slider: {
        images: [
          "/images/fortunefactory1.jpg",
          "/images/fortunefactory2.jpg",
          "/images/fortunefactory3.jpg",
        ],
        title: "REBRANDING FORTUNE FACTORY",
        subtitle: "Van logo tot signing",
        description:
          "<p>Cras commodo a dolor vels agitis. Aliquam interdum suscipit neque none ficitur. Quisque sit amet erat placerat, lacinia quam a, pharetra libero.</p><p>idplaceratnulafacilisisauctor.Nulaeuleoeunequeplaceratsolicitudineteuelit.Vivamus placeratexenim.Crassitametipsum utipsum luctussagitisvestibulum etnisl.Nam telusdolor, ornareutdolorut,scelerisquemolismi.</p>",
      },
    },
  ].find((item) => item.slug === slug);

  return (
    <main>
      <Intro content={content} slug={slug} />
      <Slider content={content} />
      <section className="container my-24 flex h-[800px]">
        <div className="md:w-1/4 flex flex-col justify-end">
          <h2
            className={`relative w-[200%] block text-8xl font-bold mb-4 bg-gradient-to-r ${content?.colors} bg-clip-text text-transparent`}
          >
            Achter de schermen
          </h2>
          <p className="ps-0 p-12">
            Cras commodo a dolor vels agitis. Aliquam interdum suscipit neque
            non egestas ficitur. Quisque sit amet erat placerat, lacinia quam.
          </p>
        </div>
        <div className="md:w-3/4">
          <Image
            src="/images/ff-achterdeschermen.jpg"
            width={690}
            height={1040}
            alt="achterdeschermen"
            className="w-full h-full object-cover -z-10"
          />
        </div>
      </section>
      <Cases />
    </main>
  );
}
