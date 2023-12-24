import DienstenTable from "@/components/Diensten/DienstenTable";
import Intro from "@/components/Home/Intro";

const OverPage: React.FC = () => {
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
          title: "Eigenzinnig",
          slug: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "Je tijdelijke collega",
          slug: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
        {
          title: "Multifunctioneel",
          slug: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
        },
      ],
    },
  };
  return (
    <main>
      <Intro content={content.Intro} />
      <DienstenTable content={content.Dienstentable} />
    </main>
  );
};

export default OverPage;
