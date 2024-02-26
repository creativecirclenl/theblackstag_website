import Cases from "@/components/Home/Cases";
import AchterDeSchermen from "@/components/SuccesVerhalen/achterdeschermen";
import Intro from "@/components/SuccesVerhalen/intro";
import Slider from "@/components/SuccesVerhalen/slider";

export function generateStaticParams() {
  return [
    { slug: "fortune-factory" },
    { slug: "paspoort-van-casper" },
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
        "Nieuw pand, nieuwe look. Aan alles is gedacht, van logo tot geluktruck.",
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
          "<p>Na vele jaren was de huisstijl van Fortune Factory toe aan een nieuwe uitstraling. De verhuizing naar het nieuwe pand in Papendrecht zorgde niet alleen voor vernieuwde energie in het bedrijf, maar ook voor de noodzaak van een frisse uitstraling van de huisstijl.</p><p>Bij de nieuwe huisstijl is aan alle details gedacht, van verlichte doosletters en een LED-lijn langs het pand tot de belettering van de geluktruck. De nieuwe huisstijl is strak en modern, maar de gespiegelde 'e' geeft er een eigenzinnig tintje aan.</p>",
      },
      achterdeschermen: {
        title: "Achter de schermen",
        description:
          "Er is hard gewerkt om alles tot in de puntjes te verzorgen. Het vaste montageteam heeft tot in de late uurtjes doorgewerkt om ervoor te zorgen dat de gevelreclame dezelfde avond nog verlicht was.",
        image: "/images/ff-achterdeschermen.jpg",
      },
    },
    {
      slug: "paspoort-van-casper",
      type: "Geboortekaartje",
      title: "Paspoort van Casper",
      description: "Hallo kleine spruit, welkom op deze wereld",
      colors: "from-tbsgreen to-tbsblue",
      image: "/images/caspertop.webp",
      slider: {
        images: [
          "/images/casper1.webp",
          "/images/casper2.webp",
          "/images/casper3.webp",
        ],
        title: "Geboorte kaartje voor Casper",
        subtitle: "Een persoonlijk en uniek kaartje",
        description:
          "<p>Voor Kitty en Kenneth heb ik het geboortekaartje van Casper mogen ontwerpen. Het is niet zomaar een kaartje, want het is zijn eerste eigen geboortepaspoort. De kaart bestaat uit drie delen: een omslag van kraftpapier met een 3D-element (het vosje) en een binnenwerk van biotop papier. Dit maakt het paspoort net een echt boekje. Het geheel is afgewerkt met een bijpassend satijnen lintje</p>",
      },
      achterdeschermen: {
        title: "Achter de schermen",
        description: "Lorem ipsum dolor sit amet",
        image: "/images/ff-achterdeschermen.jpg",
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
      achterdeschermen: {
        title: "Achter de schermen",
        description: "Lorem ipsum dolor sit amet",
        image: "/images/ff-achterdeschermen.jpg",
      },
    },
  ].find((item) => item.slug === slug);

  return (
    <main>
      <Intro content={content} slug={slug} />
      <Slider content={content} />
      <AchterDeSchermen content={content} />
      <Cases />
    </main>
  );
}
