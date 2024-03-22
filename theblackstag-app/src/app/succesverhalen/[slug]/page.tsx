import Cases from "@/components/Home/Cases";
import AchterDeSchermen from "@/components/SuccesVerhalen/achterdeschermen";
import Intro from "@/components/SuccesVerhalen/intro";
import Slider from "@/components/SuccesVerhalen/slider";
import Video from "@/components/Video";

export function generateStaticParams() {
  return [
    { slug: "fortune-factory" },
    { slug: "casper" },
    { slug: "anna-wesley" },
    { slug: "femur-beheer" },
    { slug: "lindi" },
    { slug: "kookboek-ggd-zhz" },
    { slug: "pt-its-personal" },
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
      slug: "casper",
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
        title: "",
        description: "",
        image: "",
      },
    },
    {
      slug: "anna-wesley",
      type: "trouwkaarten",
      title: "Anna & Wesley",
      description: "Een kaartje in meerdere talen voor de hele familie.",
      colors: "from-tbsgreen to-tbsblue",
      image: "/images/anna-wesleytop.webp",
      slider: {
        images: [
          "/images/anna-wesley1.webp",
          "/images/anna-wesley2.webp",
          "/images/anna-wesley3.webp",
        ],
        title: "Unieke trouwkaarten",
        subtitle: "Speciaal voor Anna & Wesley",
        description:
          "<p>Het kaartje voor Anna & Wesley was bijzonder om te ontwerpen. Aangezien haar familie uit Polen komt en zijn familie uit Nederland, was het belangrijk dat het kaartje voor iedereen leesbaar was. Daarom hebben we ervoor gekozen om de kaart in twee talen uit te brengen.</p><p>In plaats van de gebruikelijke dag- en avondkaart, moesten we nu ook rekening houden met een andere taal. Dit kleine gebaar heeft een grote betekenis voor de familie. Prachtig toch!</p><p>De kaarten zijn gedrukt op metallic papier en voorzien van bijpassende glimmende enveloppen.</p>",
      },
      achterdeschermen: {
        title: "",
        description: "",
        image: "",
        video: "/videos/anne-en-wesley.mp4",
      },
    },
    {
      slug: "femur-beheer",
      type: "rebranding",
      title: "Fémur Beheer",
      description: "VvE saai? Nee juist helemaal hip!",
      colors: "from-tbsgreen to-tbsblue",
      image: "/images/femur-beheertop.webp",
      slider: {
        images: [
          "/images/femur-beheer1.webp",
          "/images/femur-beheer2.webp",
          "/images/femur-beheer3.webp",
        ],
        title: "femur-beheer",
        subtitle: "Af van een saai imago.",
        description:
          "<p>Fémur Beheer houdt zich bezig met het beheren van Verenigingen van Eigenaars (VvE) in de breedste zin van het woord. Ze nemen alle zorg uit handen door de kwaliteit van het gebouw te waarborgen en ervoor te zorgen dat de financiën goed geregeld zijn.</p><p>Ze bieden de volgende diensten aan:<ul><li>Brainstormen</li><li>Ontwerpen</li><li>Presenteren</li><li>Productie</li></ul></p><p>Omdat de oude website aan vervanging toe was, wilde Fémur Beheer ook de complete huisstijl een opfrisbeurt geven. De nieuwe stijl moest fris en hip zijn, alles wat je vooral niet verwacht bij VvE beheer. De passie die deze mensen voor hun vak hebben, moest in de rebranding naar voren komen.</p><p>Naast het logo mocht ik ook de styling verzorgen van al het drukwerk, zoals de visitekaartjes, brochures en offertes, maar ook de buitenkant van het pand is aangepakt.</p>",
      },
      achterdeschermen: {
        title: "",
        description: "",
        image: "",
      },
    },
    {
      slug: "lindi",
      type: "rebranding",
      title: "Lindi",
      description: "Ontwikkelingspsycholoog en Speltherapeut",
      colors: "from-tbsgreen to-tbsblue",
      image: "/images/linditop.webp",
      slider: {
        images: [
          "/images/lindi1.webp",
          "/images/lindi2.webp",
          "/images/lindi3.webp",
        ],
        title: "Rebranding van Lindi",
        subtitle: "Speels en professioneel ",
        description:
          "<p>Lindi benaderde mij met de vraag of ik haar logo een nieuwe look en feel kon geven. Het oude logo sloot niet meer helemaal aan bij haar wensen en haar website.</p><p>Na een goed gesprek ben ik voor haar aan de slag gegaan en heb ik iets moois voor haar kunnen neerleggen. De restyling van het logo resulteerde vervolgens in een complete herziening van de huisstijl, die nu aansluit bij de stijl van de website</p>",
      },
      achterdeschermen: {
        title: "",
        description: "",
        image: "",
      },
    },
    {
      slug: "kookboek-ggd-zhz",
      type: "kookboek",
      title: "GGD ZHZ",
      description: "Een kookboek om Nieuw-Lekkerland gezonder te laten eten.",
      colors: "from-tbsgreen to-tbsblue",
      image: "/images/kookboek-ggd-zhztop.webp",
      slider: {
        images: [
          "/images/kookboek-ggd-zhz1.webp",
          "/images/kookboek-ggd-zhz2.webp",
          "/images/kookboek-ggd-zhz3.webp",
        ],
        title: "Van A tot Z",
        subtitle: "Een kookboek voor Gezond Nieuw-Lekkerland",
        description:
          "<p>GGD ZHZ heeft samen met een groep moeders uit Nieuw-Lekkerland een project opgezet om alle kinderen in het dorp gezonder te laten eten en meer te laten bewegen. Samen hebben ze verschillende recepten ontwikkeld en gedurende twee maanden leuke activiteiten ondernomen met alle basisschoolleerlingen.</p><p>Na afloop van het project leek het de GGD een leuk idee om alle recepten te bundelen in een kookboek, dat vervolgens wordt uitgedeeld aan alle basisschoolkinderen. In dit proces kwam ik om de hoek kijken.</p><p>Na een inspirerende brainstormsessie waren de ideeën duidelijk. Het kookboek moet kinderen aanmoedigen om samen thuis te koken en gezond te eten.</p><p>Van fotografie tot drukwerk verzorgt The Black Stag het complete pakket om jou te ontzorgen.</p>",
      },
      achterdeschermen: {
        title: "Achter de schermen",
        description:
          "Met grote dank aan het inwonerspanel Gezond Nieuw-Lekkerland voor het bereiden van alle recepten, Pand 83 voor het beschikbaar stellen van hun (kook)ruimte en natuurlijk de GGD voor dit project.",
        image: "/images/kookboek-ggd-zhzachterdeschermen.webp",
      },
    },
    {
      slug: "pt-its-personal",
      type: "huisstijl",
      title: "PT I’ts Personal",
      description:
        "It's Personal streeft ernaar bij te dragen aan de gezondheid en behoeften van de klant.",
      colors: "from-tbsgreen to-tbsblue",
      image: "/images/pt-its-personaltop.webp",
      slider: {
        images: [
          "/images/pt-its-personal1.webp",
          "/images/pt-its-personal2.webp",
          "/images/pt-its-personal3.webp",
        ],
        title: "Een persoonlijke huisstijl voor ",
        subtitle: "PT It's Personal ",
        description:
          "<p>It's Personal inspireert mensen om een goede balans te vinden tussen doelgerichte lichaamsbeweging, werk en welverdiende ontspanning, alles binnen een verfrissende en motiverende omgeving. Dit is hun unieke benadering van fitheid, en het was daarom van belang dat de huisstijl hierop aansluit.</p><p>Het gebruik van felle en levendige kleuren geeft een gevoel van energie, terwijl contrasterende kleuren helpen om de aandacht te trekken en een dynamische uitstraling te geven.</p><p>Door te experimenteren met kleuren, typografie en grafische elementen kan een huisstijl gecreëerd worden die jong en hip aanvoelt en je merk onderscheidt van de rest.</p>",
      },
      achterdeschermen: {
        title: "",
        description: "",
        image: "",
      },
    },
  ].find((item) => item.slug === slug);

  return !content ? null : (
    <main>
      <Intro content={content} slug={slug} />
      <Slider slider={content.slider} />
      {content.achterdeschermen.title && <AchterDeSchermen content={content} />}
      {content.achterdeschermen.video && (
        <Video video={content.achterdeschermen.video} />
      )}
      <Cases />
    </main>
  );
}
