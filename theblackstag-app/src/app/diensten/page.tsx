import Intro from "@/components/Home/Intro";
import Cases from "@/components/Home/Cases";
import IntroText from "@/components/Diensten/IntroText";
import DienstenTable from "@/components/Diensten/DienstenTable";
import DesignSteps from "@/components/Diensten/DesignSteps";

const DienstenPage: React.FC = () => {
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
        "Cras dictum sit amet risus id tempor. Sed fringilla egestas dui, sit amet consequat diam rutrum nec. Suspendisse ullamcorper rutrum lectus ut ornare. Quisque tortor urna, dignissim vel rutrum in, varius sed tortor. Integer et urna eu justo pretium luctus. Praesent consequat, tellus quis lobortis auctor, eros lacus laoreet massa, feugiat mollis ex purus at ligula. Nulla justo lacus, vulputate sit amet libero quis, gravida aliquam sem. In dignissim quam ipsum, at sollicitudin neque molestie pulvinar. Donec sodales nulla vel condimentum efficitur.",
      ],
    },
    dienstentable: {
      title: "Waarmee kan ik je helpen?",
      diensten: [
        {
          title: "Visuele identiteit",
          slug: "visuele-identiteit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "Kaarten en uitnodigingen",
          slug: "kaarten-en-uitnodigingen",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "Promotie/ uitingen",
          slug: "promotie-uitingen",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "Foto/ videografie",
          slug: "foto-videografie",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "Hulp op de werkvloer",
          slug: "hulp-op-de-werkvloer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
      ],
    },
    designsteps: {
      title: "Hoe werkt The Black Stag?",
      subtitle: "Het ontwerpproces in vier stappen",
      steps: [
        {
          title: "01. Contact en briefing",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "02. Analyse en eerste ontwerpfase",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "03. Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "04. Oplevering en ondersteuning",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
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
};

export default DienstenPage;
