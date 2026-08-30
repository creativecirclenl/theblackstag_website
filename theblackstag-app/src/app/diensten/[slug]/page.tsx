import DesignSteps from "@/components/Diensten/DesignSteps";
import DienstenTable from "@/components/Diensten/DienstenTable";
import IntroText from "@/components/Diensten/IntroText";
import Cases from "@/components/Home/Cases";
import Intro from "@/components/Intro";
import Link from "next/link";

type IntroContent = {
  title: string | React.ReactNode;
  subtitle: string;
  description: string;
  colors: string;
  size: string;
  subsize: string;
};

export function generateStaticParams() {
  return [
    { slug: "visuele-identiteit" },
    { slug: "kaarten-en-uitnodigingen" },
    { slug: "promotie-uitingen" },
    { slug: "foto-videografie" },
    { slug: "hulp-op-de-werkvloer" },
  ];
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const content: {
    Intro: IntroContent;
    [key: string]: any;
  } = {
    Intro:
      slug === "visuele-identiteit"
        ? {
            title: "Visuele identiteit",
            subtitle: "",
            description: "",
            colors: "from-tbsyellow to-tbsred",
            size: "w-fit xl:w-2/3 text-7xl md:text-[166.5px]",
            subsize: "text-lg md:text-[67px]",
          }
        : slug === "kaarten-en-uitnodigingen"
          ? {
              title: "Kaarten en uitnodigingen",
              subtitle: "",
              description: "",
              colors: "from-tbsyellow to-tbsred",
              size: "w-fit h-fit py-4 xl:w-2/3 text-7xl md:text-[100px]",
              subsize: "text-lg md:text-[67px]",
            }
          : slug === "promotie-uitingen"
            ? {
                title: "Promotie/ uitingen",
                subtitle: "",
                description: "",
                colors: "from-tbsyellow to-tbsred",
                size: "w-fit xl:w-2/3 pb-6 text-7xl md:text-[150px]",
                subsize: "text-lg md:text-[67px]",
              }
            : slug === "foto-videografie"
              ? {
                  title: "Foto/ videografie",
                  subtitle: "",
                  description: "",
                  colors: "from-tbsyellow to-tbsred",
                  size: "w-fit xl:w-2/3 pb-6 text-7xl md:text-[125px]",
                  subsize: "text-lg md:text-[67px]",
                }
              : {
                  title: "Ik schuif aan.",
                  subtitle: "",
                  description: "",
                  colors: "from-tbsyellow to-tbsred",
                  size: "w-fit xl:w-2/3 text-7xl md:text-[125px]",
                  subsize: "text-lg md:text-[67px]",
                },
    IntroText:
      slug === "visuele-identiteit"
        ? {
            title: "Breng de reis in kaart voordat je de reis maakt.",
            paragraphs: [
              "Saaie producten of diensten bestaan niet. Een merk dat gefocust is weet precies wat het is, waarom het anders is dan anderen en waarom mensen het willen hebben.",
              "Een visuele identiteit is de grafische uitdrukking van een merk, die bestaat uit elementen zoals het logo, kleurenpalet, typografie en grafische stijl. Het vormt de visuele representatie van de waarden, persoonlijkheid en boodschap van een merk. Door een consistente en herkenbare visuele identiteit te creëren, kan een merk een sterke en blijvende indruk achterlaten bij zijn doelgroep en een samenhangende ervaring bieden over verschillende communicatiekanalen. Dit is essentieel voor het opbouwen van merkherkenning en het aantrekken van de juiste doelgroep.",
            ],
          }
        : slug === "kaarten-en-uitnodigingen"
          ? {
              title: "Altijd een persoonlijk kaartje",
              paragraphs: [
                "Het ontvangen van een kaartje is leuk, maar het ontwerpen en versturen van je eigen unieke kaart is natuurlijk nog veel leuker!",
                "Niet kiezen uit standaard ontwerpen maar altijd 100% een eigen unieke kaart. Persoonlijkheid staat bij The Black Stag centraal. Bij het ontwerpen van jullie kaart kijken we verder dan alleen het uiterlijk — we denken mee over papier, vorm én de envelop. Daarnaast kunnen kaarten nog extra opgefleurd worden met bijvoorbeeld een lintje, tag of bijpassende sluitzegel. Benieuwd geworden naar de mogelijkheden? Maak dan snel, vrijblijvend een afspraak voor een oriëntatiegesprek.",
              ],
            }
          : slug === "promotie-uitingen"
            ? {
                title: "Van ontwerp tot druk",
                paragraphs: [
                  "Marketinguitingen kan je op vele manieren inzetten. Bijvoorbeeld om een beeld van je onderneming te schetsen, of om informatie over een specifiek merk of dienst te verstekken. De visuele kracht van een marketinguiting is veel groter door vooraf goed na te denken over de boodschap en de doelgroep en doelstellingen. Alles moet samenkomen op de juiste plek om de boodschap zo krachtig mogelijk over te laten komen.",
                  "Met een vaste drukkerij in de regio leveren wij consequent de beste kwaliteit. Wil je speciale papiersoorten, of juist hele gebruikelijke? Ik help je graag bij al je vragen over drukwerk. Samen met de drukkerij leveren we top kwaliteit drukwerk voor een eerlijke, betaalbare prijs.",
                ],
              }
            : slug === "foto-videografie"
              ? {
                  title:
                    "Vertellen van verhalen en creëren van digitale belevenissen.",
                  paragraphs: [
                    "Laten zien waar je voor staat. Als creatief bureau ondersteun ik merken bij het creëren van campagnes, inhoud en creatief werk. Wist je dat 90% van de shoppers een goede productfoto van essentieel belang vindt bij het doen van een aankoop? Daar help ik je om samen de juiste keuzes te maken. Zodat er altijd een gebalanceerde mix ontstaat om jouw identiteit optimaal te laden.",
                  ],
                }
              : {
                  title: (
                    <>
                      <span className="font-lora-italic bg-tbsyellow bg-clip-text text-transparent">
                        Meer
                      </span>
                      , meer, meer
                    </>
                  ),
                  paragraphs: [
                    "De planning loopt vol, deadlines komen dichterbij en het dagelijkse werk gaat gewoon door. Dan is tijdelijke, ervaren DTP‑ondersteuning precies wat lucht geeft. Ik schuif aan waar het druk is — zodat het werk blijft doorstromen.",
                  ],
                },
    dienstentable:
      slug === "visuele-identiteit"
        ? {
            title: "",
            diensten: [
              {
                title: "Logo & huisstijl",
                slug: "",
                description:
                  "Je hebt een idee voor een nieuw bedrijf, product of dienst. Al snel daarna is de naam hiervoor een feit, maar dan? Een logo is de belangrijkste uiting van je bedrijf (product of dienst). Je hebt tenslotte maar één kans om een eerste indruk te maken! Een goed logo heeft een hoge herkenbaarheidsfactor, is uniek en is flexibel inzetbaar. Naast een sterk logo is de huisstijl een groot onderdeel van je zakelijke identiteit, die consequent doorgevoerd moet worden naar een website, visitekaartjes, et cetera.",
              },
              {
                title: "Signing",
                slug: "",
                description:
                  "Het wordt steeds belangrijker om je te laten zien als bedrijf. De uitstraling van je bedrijfspand of winkel is daarbij essentieel. Je kan signing op verschillende manieren inzetten. Denk bijvoorbeeld aan verlichte gevelreclame of kleed je pand aan door middel van vlaggen of banieren. Maar ook een logozuil met huisnummer of bewegwijzering is een mooie en vaak waardevolle toevoeging voor bezoekers en klanten. Signing is meer dan alleen buiten reclame. Ook binnen kan je je kantoor meer beleving geven. Denk bijvoorbeeld aan de aankleding van wanden door middel van viusals of het bestickeren van glas.",
              },
              {
                title: "Autobelettering",
                slug: "",
                description:
                  "Een auto of bedrijfsbus beletteren is een effectieve manier om op te vallen en de aandacht op je diensten te vestigen. The Black Stag zorgt voor een trendsettende reclameboodschap zodat je ook onderweg je naamsbekendheid vergroot. De kracht van een autoreclame zit niet per definitie in het formaat ervan, een autobelettering kan uitgevoerd worden van subtiel of discreet tot heel opvallend met grote full color afbeeldingen. The Black Stag helpt je van idee tot realisatie om je bedrijfsidentiteit te vertalen naar een passende of opvallende autobelettering.",
              },
              {
                title: "Rebranding",
                slug: "",
                description:
                  "Rebranding is een grondige herziening van je merkidentiteit. Dit kan variëren van een simpele naamswijziging tot een volledige revisie van je merk, waarbij de visie, missie, merkwaarden en de uitstraling opnieuw vormgegeven worden. Doe anders eens een stap achteruit en kijk eens kritisch naar je huidige merkidentiteit. Past deze nog bij wie jij bent als ondernemer? Met rebranding kan een merk weer relevant worden, een nieuwe doelgroep aanspreken, of het bedrijf een nieuwe richting te geven.",
              },
            ],
          }
        : slug === "kaarten-en-uitnodigingen"
          ? {
              title: "",
              diensten: [
                {
                  title: "Geboortekaarten",
                  slug: `${slug}/geboortekaarten`,
                  description:
                    "De eerste keer lachen, de eerste stapjes, de eerste keer papa en mama. Al deze eerste momenten zijn bijzonder. Dus ook de eerste kennismaking verdient een speciaal geboortekaartje. The Black Stag ontwerpt geboortekaartjes op maat. Een mooi aandenken voor later, een bijzondere herinnering om te bewaren en te delen met jullie dierbaren. Omdat de papiersoort een grote rol speelt in het uiteindelijke resultaat van jullie geboortekaartje kunnen jullie kiezen uit verschillende papiersoorten. En met enveloppen in meer dan 65 kleuren en in meer dan 33 formaten is The Black Stag het adres voor kwaliteitsenveloppen. Ik help jullie graag bij het creëren van een uniek, spetterende en persoonlijke geboortekaart.",
                },
                {
                  title: "Trouwkaarten",
                  slug: `${slug}/trouwkaarten`,
                  description:
                    "De voorpret van jullie bruiloft begint met het ontwerpen en versturen van de trouwkaarten. Maak jullie bruiloft bekend op een wijze die volledig aansluit op jullie persoonlijkheid. The Black Stag ontwerp trouwkaarten op maat, elk kaartje is uniek. Houden jullie het klein met een enkel kaartje of pakken jullie het groots aan met een complete trouwhuisstijl? Van Save the date kaarten tot aan de menukaarten die op tafel liggen. Mag het wat meer zijn? Geen probleem! Niks is te veel bij The Black Stag. Alle kaarten zijn extra op te fleuren met bijvoorbeeld lint, jute, tags of een bijpassende sluitzegel.",
                },
                {
                  title: "Uitnodigingen",
                  slug: "",
                  description:
                    "Op zoek naar een uitnodiging voor een feestelijke gelegenheid? Een jubileum, verjaardag of misschien wel een housewarming? Het feest begint bij een mooie uitnodigingskaart.",
                },
                {
                  title: "Scheidingskaarten",
                  slug: "",
                  description:
                    "Het verbreken van een relatie is een ingrijpende gebeurtenis, je denkt er wellicht niet direct aan om actief over de situatie te communiceren. Maar hoe vertel je dat jullie gaan scheiden? Door juist zelf de boodschap naar je sociale kring te sturen doorbreek je het taboe. Het samen opstellen van jullie kaart kan jou en je partner helpen bij het waardig afsluiten van jullie relatie en het verwerkingsproces.",
                },
              ],
            }
          : slug === "promotie-uitingen"
            ? {
                title: "",
                diensten: [
                  {
                    title: "Flyer en folder",
                    slug: "",
                    description:
                      "Papier ouderwets… alles behalve! Of je nu een flyer wilt ter promotie van je bedrijf, met een informatieve insteek over je organisatie of bekendmaking van een actie, met een flyer ben je verzekerd van een voordelige manier van reclame. Een uniek ontwerp dat is ontworpen in stijl van je huisstijl, zodat het herkenbaar is als jouw bedrijf. Er zijn diverse formaten en papiersoorten beschikbaar, maar welke past het beste bij jou? Want de keuze hiervoor is bepalend voor het succes van je flyer actie.",
                  },
                  {
                    title: "Brochure & catalogus",
                    slug: "",
                    description:
                      "Op zoek naar een professionele partij die je kan helpen met het ontwerpen van een brochure of productcatalogus? The Black Stag heeft jaren ervaring in het ontwerpen van brochures. Ik maak niet alleen een leuk uitziende brochure of catalogus, maar kijk verder naar je bedrijf, de doelgroep en de onderliggende boodschap. Daarbij hou ik rekening met budget en deadlines.",
                  },
                  {
                    title: "Magazine",
                    slug: "",
                    description:
                      "Het ontwerpen en produceren van een magazine is een creatief proces dat begint met het definiëren van het doel en de doelgroep van het magazine. Daarna volgt het ontwerpen van de lay-out, het kiezen van de juiste typografie, beeldmateriaal en grafische elementen die de inhoud versterken. Het is belangrijk om een goede balans te vinden tussen tekst en visuele elementen om de lezers te boeien en te informeren. Vervolgens komt het productieproces, waarbij het drukwerk en de distributie worden geregeld. Het uiteindelijke resultaat is een tastbaar magazine dat de visie en boodschap van de uitgever overbrengt en de lezers inspireert.",
                  },
                ],
              }
            : slug === "foto-videografie"
              ? {
                  title: "",
                  diensten: [
                    {
                      title: "Packshot",
                      slug: "",
                      description:
                        "Packshot-fotografie vertakt zich van productfotografie en stelt richtlijnen vast voor het maken van foto's van een product, meestal met zijn verpakking en etikettering. Met professionele foto’s komt een webshop betrouwbaarder over waardoor het voor de consumenten sneller als een vertrouwde omgeving zal aanvoelen. Dit is cruciaal voor de aankoopintentie.",
                    },
                  ],
                }
              : {
                  title: "",
                  diensten: [
                    {
                      title: "De planning loopt vol",
                      slug: "",
                      description: [
                        "Wanneer de planning overloopt, deadlines dichterbij komen en het team simpelweg handen tekortkomt, zorg ik dat het werk blijft doorstromen. Ik werk sinds 2014 in het vak en heb ervaring binnen verschillende bedrijven, branches en soorten productiewerk.",
                        "Van het eerste ontwerp tot een correct en productieklaar bestand: ik weet waar ik op moet letten voordat het de werkplaats in gaat.",
                        "Geen lange inwerkperiode, geen uitgebreide uitleg. Ik ben gewend om snel systemen, huisstijlen en productieprocessen eigen te maken, zodat ik snel kan meedraaien in lopende projecten.",
                        "Mijn belangrijkste doel?",
                        "Zorgen dat het werk blijft doorstromen.",
                      ],
                    },
                    {
                      title: "Tijdelijk een stoel vrij?",
                      slug: "",
                      description: [
                        "Soms is één extra dag hulp precies wat lucht geeft. Soms zijn een paar weken extra capaciteit nodig om de planning weer haalbaar te maken.",
                        "En soms is het fijn om voor een langere periode iemand te hebben die direct meedraait.",
                        "Ik ben flexibel inzetbaar — vanaf 8 uur per week tot maximaal 2,5 dag — en het hele jaar door beschikbaar wanneer het druk wordt.",
                        "Loopt jullie planning vol? Bel me.",
                        "Dan schuif ik aan.",
                      ],
                    },
                  ],
                },
    designsteps: {
      title: "Hoe werkt The Black Stag?",
      subtitle:
        slug === "hulp-op-de-werkvloer"
          ? "FAQ Tijdelijke DTP-ondersteuning"
          : "Het ontwerpproces in vier stappen",
      image:
        slug === "visuele-identiteit"
          ? "/images/visuele-identiteit.webp"
          : slug === "kaarten-en-uitnodigingen"
            ? "/images/kaarten-en-uitnodigingen.webp"
            : slug === "promotie-uitingen"
              ? "/images/promotie-uitingen.webp"
              : slug === "foto-videografie"
                ? "/images/foto-videografie.webp"
                : slug === "hulp-op-de-werkvloer"
                  ? "/images/hulp-op-de-werkvloer.webp"
                  : "/images/main-service.webp",
      steps:
        slug === "hulp-op-de-werkvloer"
          ? [
              {
                title: "01. Hoe snel kun je starten?",
                description:
                  "Soms is één dag hulp precies wat lucht geeft. Bel me gerust — dan kijken we samen wat ik direct kan oppakken. Wanneer de drukte wat langer aanhoudt, plannen we vaste uren per week in zodat deadlines weer haalbaar worden. En bij een langere periode, vanaf drie maanden, spreken we vaste dagen of momenten af en werken we met een tijdelijke werkovereenkomst voor rust en continuïteit. Loopt jullie planning vol? Bel me. Dan schuif ik aan.",
              },
              {
                title: "02. Wat kost tijdelijke DTP‑ondersteuning? ",
                description:
                  "De kosten zijn afhankelijk van de duur en intensiteit van de samenwerking. Voor losse dagen of korte inzet werk ik met een tarief van €65 per uur. Wanneer ik meerdere weken vaste uren per week meedraai, geldt een tarief van €60 per uur. Bij langdurige samenwerking — vanaf 3 maanden met vaste dagen of vaste uren — werk ik met €55 per uur. Zo blijft tijdelijke ondersteuning flexibel, en langdurige inzet overzichtelijk en goed in te plannen.",
              },
              {
                title: "03. Wat te doen bij langdurige samenwerking?",
                description:
                  "Bij een langere samenwerking — vanaf 3 maanden — werk ik met een tijdelijke samenwerkingsovereenkomst. Niet om het ingewikkeld te maken, maar juist om het duidelijk en overzichtelijk te houden. Met vaste dagen of vaste momenten in de week weten we allebei precies waar we aan toe zijn, en blijft de planning rustig en voorspelbaar. Wil je zien hoe zo’n overeenkomst eruitziet? Download hem hier.",
              },
              {
                title: "04. Wat kun je precies uit handen nemen?",
                description:
                  "Ik neem het werk uit handen dat blijft liggen wanneer het druk wordt. Ik werk concepten uit tot sterke ontwerpen en ontwerpen tot technisch correcte, productieklare bestanden. Van de eerste schets of aanvraag tot het moment dat het naar productie gaat: ik zorg dat alles klopt, aansluit op jullie huisstijl en klaarstaat voor drukwerk, printproductie of digitale toepassingen. Omdat ik systemen en workflows snel oppak, kan ik direct meedraaien in lopende projecten en het werk soepel laten doorstromen.",
              },
            ]
          : [
              {
                title: "01. Afspraak (op locatie of online)",
                description:
                  "Samen gaan we kijken naar de mogelijkheden voor jullie kaart. Welk type papier en envelop hebben jullie in gedachten? Een fysieke afspraak biedt de mogelijkheid om verschillende papier- en envelopsoorten te bekijken en te voelen, zodat jullie het materiaal kunnen ervaren.",
              },
              {
                title: "02. Eerste ontwerpfase",
                description:
                  "Na onze bespreking van jullie wensen, ga ik aan de slag met drie verschillende ontwerpen. Jullie kunnen een van deze ontwerpen kiezen, of we kunnen elementen van alle drie de kaarten combineren tot een nieuw ontwerp.",
              },
              {
                title: "03. Definitief ontwerp",
                description:
                  "Zodra het ontwerp volledig naar wens is, maken we de kaart definitief. Jullie leveren de juiste teksten en gegevens aan, en we werken het ontwerp tot in de puntjes uit. Jullie moeten natuurlijk wel 100% tevreden zijn met het resultaat.",
              },
              {
                title: "04. Betaling en productie",
                description:
                  "Na goedkeuring van het definitieve ontwerp volgt de betaling. Zodra de betaling is voldaan, start de productie van de kaarten. Trouwkaarten worden doorgaans binnen 5 tot 8 werkdagen gedrukt, en geboortekaarten kunnen in de meeste gevallen binnen 24 uur worden geleverd!",
              },
            ],
    },
  };
  return (
    <main>
      <div className="container pt-24">
        <Link
          className={`leading-[1.1] bg-linear-to-r from-white to-white bg-clip-text text-transparent font-bold`}
          href="/diensten"
        >
          Diensten
        </Link>{" "}
        / {slug.replace(/-/g, " ")}
      </div>
      <Intro content={content.Intro} />
      <IntroText content={content.IntroText} />
      <DienstenTable content={content.dienstentable} />
      <DesignSteps content={content.designsteps} />
      <Cases />
    </main>
  );
}
