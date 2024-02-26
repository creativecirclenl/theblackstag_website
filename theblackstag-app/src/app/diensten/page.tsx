import Intro from "@/components/Home/Intro";
import Cases from "@/components/Home/Cases";
import IntroText from "@/components/Diensten/IntroText";
import DienstenTable from "@/components/Diensten/DienstenTable";
import DesignSteps from "@/components/Diensten/DesignSteps";

export default function DienstenPage() {
  const content = {
    Intro: {
      title: "Groot Denken",
      subtitle: "& oplossingen maken",
      colors: "from-tbsorange to-tbsyellow",
      size: "w-fit md:w-1/2 text-7xl md:text-[166.5px]",
      subsize: "text-lg md:text-[67px]",
      description: "",
    },
    IntroText: {
      title: "Ik ben niet bang om uitdagingen aan te gaan!",
      paragraphs: [
        "Met samenwerking als de kern, sta ik klaar om met jou samen te werken om winnende oplossingen te creëren. Ik blink uit in luisteren en vervolgens handelen naar jouw behoeften om een succesvol projectresultaat te leveren. Uitgerust met kennis en ervaring die nodig is om de klus te klaren, sta ik klaar om een breed scala aan diensten te leveren, zoals hieronder beschreven.",
      ],
    },
    dienstentable: {
      title: "Waarmee kan ik je helpen?",
      diensten: [
        {
          title: "Visuele identiteit",
          slug: "visuele-identiteit",
          description:
            "Wat beweegt jou? En wat is de missie van je organisatie? De antwoorden op dit soort vragen vormen de basis van het creatieve proces om jouw visuele identiteit succesvol te positioneren. Laten we samen een merk opbouwen, verstevigen en uitbouwen, klaar voor wat er ook aan de horizon verschijnt.",
        },
        {
          title: "Kaarten en uitnodigingen",
          slug: "kaarten-en-uitnodigingen",
          description:
            "Niet kiezen uit standaard ontwerpen, maar altijd 100% een eigen en unieke kaart. Persoonlijkheid staat bij The Black Stag op nummer één. Bij het creëren van jullie kaart kijken we verder dan alleen een leuk ontwerp. Samen kijken we naar papier, vorm, formaat en natuurlijk ook niet te vergeten de envelop. Daarnaast kunnen we de kaart nog extra opfleuren met bijvoorbeeld een lintje, tags of bijpassende sluitzegel. Benieuwd geworden naar de mogelijkheden? Maak dan snel, vrijblijvend een afspraak voor een oriëntatiegesprek.",
        },
        {
          title: "Promotie/ uitingen",
          slug: "promotie-uitingen",
          description:
            "Creativiteit moet gestuurd worden. Alles draait omtrent de strategie van jouw merk/ of bedrijf. Ik ben zowel op de zakelijke markt als de consument gerichte markt actief. Met passie werk ik aan het juiste, verleidelijke communicatiemiddel voor jouw bedrijf, product of project. Een goede campagne begint met een goed verhaal. Samen gaan we aan de slag om een sterk en onderscheidend campagne concept op te zetten. Het is de basis voor alle middelen die worden ingezet.",
        },
        {
          title: "Foto/ videografie",
          slug: "foto-videografie",
          description:
            "Een sterke foto zegt meer dan duizend woorden maar sterke beelden komen in veel verschillende vormen. The Black Stag begrijpt dat elk merk uniek is. Daarom staat een persoonlijke aanpak altijd centraal. Het doel is om je merk te versterken en waarde toe te voegen. Van packshots tot social assets, The Black Stag vertaald jouw idee in een werkende creatieve productie. Benieuwd naar het verhaal dat The Black Stag via de lens voor jou kan vertellen? Dat komt goed uit want ik kan niet wachten om het met je te delen.",
        },
        {
          title: "Hulp op de werkvloer",
          slug: "hulp-op-de-werkvloer",
          description:
            "Gaat je collega met zwangerschapsverlof of heeft je hardwerkende DTP’er besloten die lang verwachte wereldreis te gaan maken? Dan is The Black Stag je nieuwe tijdelijke collega. Veel bedrijven lopen er tegenaan, er valt (langdurig) een collega weg door ziekte, zwangerschap of een lange reis. Maar je grafische afdeling kan de afwezigheid van je collega eigenlijk niet missen. Hoe fijn is het dan om tijdelijk een ervaren zzp’er in te huren.",
        },
      ],
    },
    designsteps: {
      title: "Hoe werkt The Black Stag?",
      subtitle: "Het ontwerpproces in vier stappen",
      steps: [
        {
          title: "01.	Intake",
          description:
            "Gezamenlijk brainstormen we om de wensen en de doelgroep in kaart te brengen. Met een visuele instelling en veel creativiteit vertaal ik de kernwaarden naar een (nieuwe) merkidentiteit, zo ontstaat er een krachtig fundament.",
        },
        {
          title: "02. Analyse en eerste ontwerpfase",
          description:
            "Ik ga nu beginnen met ontwerpen van meerdere concept ontwerpen. Om dit zo goed mogelijk te kunnen doen doe ik eerst onderzoek. Dit onderzoek begint met de imagobepaling. Daarna ga ik brainstormen en maak ik schetsen op papier en ga ik aan de slag met digitale concepten.",
        },
        {
          title: "03. Design",
          description:
            "Het gehele concept werkt The Black Stag in deze fase volledig uit. Aan de hand van de concept ontwerpen kunnen we samen bepalen of het ontwerp al goed is, of dat we nog wat wijzigingen aan moeten brengen. We gaan door tot dat het ontwerp volledig naar wens is! Vervolgens werk ik het gekozen ontwerp verder voor je uit. Verschillende lettertypes, kleuren en beelden worden getest op helderheid en overkomen en worden specifiek aangepast op het ontwerp.",
        },
        {
          title: "04. Oplevering en ondersteuning",
          description:
            "Het gehele concept werkt The Black Stag in deze fase volledig uit. Aan de hand van de concept ontwerpen kunnen we samen bepalen of het ontwerp al goed is, of dat we nog wat wijzigingen aan moeten brengen. We gaan door tot dat het ontwerp volledig naar wens is! Vervolgens werk ik het gekozen ontwerp verder voor je uit. Verschillende lettertypes, kleuren en beelden worden getest op helderheid en overkomen en worden specifiek aangepast op het ontwerp.",
        },
      ],
    },
  };
  return (
    <main>
      <Intro content={content.Intro} />
      <IntroText content={content.IntroText} />
      <DienstenTable content={content.dienstentable} />
      <DesignSteps content={content.designsteps} />
      <Cases />
    </main>
  );
}

DienstenPage;
