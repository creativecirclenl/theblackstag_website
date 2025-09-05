import IntroText from "@/components/Diensten/IntroText";
import Intro from "@/components/Home/Intro";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { subslug: "geboortekaarten" },
    { subslug: "trouwkaarten" },
  ];
}

export default async function Page(props: { params: Promise<{ slug: string, subslug: string }> }) {
  const params = await props.params;
  const { slug, subslug } = params;

  const content = {
    Intro:
      subslug === "geboortekaarten"
        ? {
            title: "Geboorte-kaarten",
            subtitle: "",
            description: "",
            colors: "from-tbsyellow to-tbsred",
            size: "w-fit xl:w-2/3 text-7xl md:text-[166.5px]",
            subsize: "text-lg md:text-[67px]",
          }
        : {
            title: "Trouwkaarten",
            subtitle: "",
            description: "",
            colors: "from-tbsyellow to-tbsred",
            size: "w-fit h-fit py-4 xl:w-2/3 text-7xl md:text-[100px]",
            subsize: "text-lg md:text-[67px]",
          },
    IntroText:
      subslug === "geboortekaarten"
        ? {
            title: "Een nieuw leven verdient een uniek welkom.",
            paragraphs: [
              "De eerste kennismaking met jullie kleintje is bijzonder — en dat moment verdient een geboortekaartje dat helemaal bij jullie past. Geen standaard ontwerp, maar een kaart die jullie verhaal vertelt. Bij The Black Stag ontwerpen we geboortekaartjes die méér zijn dan een aankondiging. Ze zijn een tastbare herinnering aan een magisch moment. Elk ontwerp is uniek — net als jullie kindje.",
              "✔️ Een uniek ontwerp, afgestemd op jullie stijl",
              "✔️ Keuze uit luxe papiersoorten en bijpassende enveloppen",
              "✔️ Voor ieder budget een passende kaart",
              "✔️ Persoonlijk advies over papier, druktechniek en afwerking",
              "Nog geen idee wat jullie stijl is? Scroll door onze Pinterest-feed hieronder en laat je inspireren door kleuren, vormen en afwerkingen. Van minimalistisch tot speels — alles is mogelijk.",
              "Klaar om jullie geboortekaartje te laten ontwerpen? Plan vrijblijvend een kennismakingsgesprek — ik denk graag met jullie mee.",
            ],
          }
        : {
            title: "Jullie liefde verdient een kaart die raakt.",
            paragraphs: [
              "De voorpret van jullie bruiloft begint met het versturen van een trouwkaart die jullie persoonlijkheid weerspiegelt. Van save the date tot bedankkaartjes: bij The Black Stag creëren we trouwkaarten die jullie verhaal vertellen. Geen standaard templates, maar een ontwerp dat past bij jullie dag, stijl en persoonlijkheid.",
              "✔️ Een uniek ontwerp, afgestemd op jullie stijl",
              "✔️ Keuze uit luxe papiersoorten en bijpassende enveloppen",
              "✔️ Voor ieder budget een passende kaart",
              "✔️ Persoonlijk advies over papier, druktechniek en afwerking",
              "Op zoek naar ideeën? Laat je inspireren door onze Pinterest-feed vol trouwkaarten in alle stijlen: romantisch, modern, botanisch, vintage en meer.",
              "Willen jullie samen aan de slag met jullie trouwkaart? Neem contact op voor een vrijblijvend ontwerpgesprek — ik help jullie graag.",
            ],
          },
        }
    
  return (
    <main>
      <Intro content={content.Intro} />
      <div className="container"><Link className={`leading-[1.1] bg-linear-to-r ${content.Intro.colors} bg-clip-text text-transparent font-bold`} href="/diensten">Diensten</Link> / <Link className={`leading-[1.1] bg-linear-to-r ${content.Intro.colors} bg-clip-text text-transparent font-bold`} href={`/diensten/${slug}`}>{slug.replace(/-/g, ' ')}</Link> / {subslug.replace(/-/g, ' ')}</div>
      <IntroText content={content.IntroText} />
    </main>
  );
}
