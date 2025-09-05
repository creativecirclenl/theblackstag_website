import DesignSteps from "@/components/Diensten/DesignSteps";
import DienstenTable from "@/components/Diensten/DienstenTable";
import IntroText from "@/components/Diensten/IntroText";
import Cases from "@/components/Home/Cases";
import Intro from "@/components/Home/Intro";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { slug: "visuele-identiteit" },
    { slug: "kaarten-en-uitnodigingen" },
    { slug: "promotie-uitingen" },
    { slug: "foto-videografie" },
    { slug: "hulp-op-de-werkvloer" },
  ];
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;

  const content = {
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
            title: "Hulp op de werkvloer",
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
              "Niet kiezen uit standaard ontwerpen maar altijd 100% een eigen unieke kaart. Persoonlijkheid staat bij The Black Stag centraal. Bij het creëren van jullie kaart kijken we verder dan alleen een leuk ontwerp. Samen kijken we naar de vorm en formaat van jullie kaart, papiersoorten en natuurlijk niet te vergeten de envelop. Daarnaast kunnen kaarten nog extra opgefleurd worden met bijvoorbeeld een lintje, tag of bijpassende sluitzegel. Benieuwd geworden naar de mogelijkheden? Maak dan snel, vrijblijvend een afspraak voor een oriëntatiegesprek.",
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
            title: "Ben ik je tijdelijke nieuwe collega?",
            paragraphs: [
              "Heb jij een tijdelijk capaciteitsprobleem binnen jouw team vanwege een zwangere collega, sterke groei van de organisatie of langdurig ziekteverzuim? Of heb je gedurende een bepaalde periode extra kennis nodig voor een specifiek project? Dan kan het tijdelijk inhuren van een interim-professional interessant zijn.",
              "Soms weet je ruim van tevoren wat er komen gaat, maar het komt ook voor dat een onverwachte wending vraagt om extra mankracht tijdens seizoenspieken.Ik ben snel en flexibel inzetbaar. Met mijn ervaringen in de B2B en B2C ben ik breed inzetbaar.",
              "Wordt ik je nieuwe tijdelijke collega?",
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
                slug: "",
                description:
                  "De eerste keer lachen, de eerste stapjes, de eerste keer papa en mama. Al deze eerste momenten zijn bijzonder. Dus ook de eerste kennismaking verdient een speciaal geboortekaartje. The Black Stag ontwerpt geboortekaartjes op maat. Een mooi aandenken voor later, een bijzondere herinnering om te bewaren en te delen met jullie dierbaren. Omdat de papiersoort een grote rol speelt in het uiteindelijke resultaat van jullie geboortekaartje kunnen jullie kiezen uit verschillende papiersoorten. En met enveloppen in meer dan 65 kleuren en in meer dan 33 formaten is The Black Stag het adres voor kwaliteitsenveloppen. Ik help jullie graag bij het creëren van een uniek, spetterende en persoonlijke geboortekaart.",
              },
              {
                title: "Trouwkaarten",
                slug: "",
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
                title: "Op kantoor",
                slug: "",
                description:
                  "Het inzetten van een tijdelijke interim-professional op de werkvloer biedt diverse voordelen voor organisaties. Allereerst kan een interim-professional snel specifieke expertise en ervaring inbrengen om projecten aan te pakken of uitdagingen op te lossen zonder dat er langdurige wervingsprocessen nodig zijn. Dit kan de efficiëntie en productiviteit van het team verhogen. Bovendien brengt een interim-professional vaak een frisse kijk en nieuwe ideeën met zich mee, wat kan leiden tot innovatie en verbeterde bedrijfsprocessen. Daarnaast biedt het inzetten van een interim-professional flexibiliteit, zodat organisaties snel kunnen inspelen op veranderende behoeften en marktomstandigheden. Hebben jullie een flexplek? Dan kon ik graag bij je op kantoor zitten. Het voordeel hiervan is dat we snel en gemakkelijk kunnen schakelen.",
              },
            ],
          },
    designsteps: {
      title: "Hoe werkt The Black Stag?",
      subtitle: "Het ontwerpproces in vier stappen",
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
      steps: [
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
      <Intro content={content.Intro} />
      <div className="container"><Link className={`leading-[1.1] bg-gradient-to-r ${content.Intro.colors} bg-clip-text text-transparent font-bold`} href="/diensten">Diensten</Link> / {content.Intro.title}</div>
      <IntroText content={content.IntroText} />
      <DienstenTable content={content.dienstentable} />
      <DesignSteps content={content.designsteps} />
      <Cases />
    </main>
  );
}
