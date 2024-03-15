import DienstenTable from "@/components/Diensten/DienstenTable";
import Intro from "@/components/Home/Intro";
import Team from "@/components/Team";

export default function OverPage() {
  const content = {
    Intro: {
      title: "Ik ben",
      subtitle: "Creatief ontwerper, fotograaf en je tijdelijke collega",
      description:
        "Grafisch vormgeven is een groot woord, maar wat betekent het eigenlijk? Als grafisch vormgever zet ik informatie om in een visuele vorm, met als doel mensen te verrassen, informeren, amuseren of zelfs aan te sporen tot actie.",
      colors: "from-tbsblue to-tbsgreen",
      size: "w-fit md:w-2/3 text-7xl md:text-[166.5px]",
      subsize: "text-lg md:w-2/3 md:text-[67px] lg:pr-24",
    },
    Dienstentable: {
      title: "Wat maakt de The Black Stag anders dan andere",
      diensten: [
        {
          title: "Even voorstellen",
          slug: "",
          description: (
            <>
              <p>
                Hallo, ik ben Katja, de eigenaar van The Black Stag. In 2014 heb
                ik mijn droom nagejaagd en ben ik mijn eigen reclamebureau
                gestart. Met jarenlange ervaring ben ik uitgegroeid tot een
                veelzijdige professional in de branche.
              </p>
              <p>
                Met mijn passie voor het vak en een creatieve geest, verzorg ik
                inspirerende opdrachten voor zowel bedrijven als particulieren.
                Ben je op zoek naar een opvallend concept en een spetterend
                design? Aarzel dan niet om mij een e-mail te sturen om kennis te
                maken!
              </p>
            </>
          ),
        },
        {
          title: "Multifunctioneel",
          slug: "",
          description: (
            <>
              <p>
                Dankzij mijn jarenlange ervaring in diverse branches, zowel B2B
                als B2C, ben ik breed inzetbaar. Of je nu een verpakking nodig
                hebt die in winkels door heel Nederland komt te liggen, je pand
                en wagenpark wilt voorzien van je bedrijfsidentiteit, of als je
                op zoek bent naar iemand die jullie trouwkaarten kan ontwerpen.
                Ik kan je bij het gehele proces helpen.
              </p>
              <p>
                Gedurende mijn loopbaan heb ik een uitgebreid netwerk opgebouwd,
                waardoor ik je van begin tot eind kan ondersteunen bij het
                ontwerpen en realiseren van signage en drukwerk, het verzorgen
                van diverse foto- en videografie uitingen en meer. Geen opdracht
                is te uitdagend. Samen met een team van enthousiaste
                professionals kunnen we elk project aan!
              </p>
              <p>Welk project wil je samen met mij starten?</p>
            </>
          ),
        },
      ],
    },
  };
  return (
    <main>
      <Intro content={content.Intro} />
      <DienstenTable content={content.Dienstentable} />
      <Team />
    </main>
  );
}
