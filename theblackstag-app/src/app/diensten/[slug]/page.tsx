import DesignSteps from "@/components/Diensten/DesignSteps";
import DienstenTable from "@/components/Diensten/DienstenTable";
import IntroText from "@/components/Diensten/IntroText";
import Cases from "@/components/Home/Cases";
import Intro from "@/components/Home/Intro";

export function generateStaticParams() {
  return [
    { slug: "visuele-identiteit" },
    { slug: "kaarten-en-uitnodigingen" },
    { slug: "promotie-uitingen" },
    { slug: "foto-videografie" },
    { slug: "hulp-op-de-werkvloer" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const content = {
    Intro:
      slug === "visuele-identiteit"
        ? {
            title: "Visuele identiteit",
            subtitle: "",
            description: "",
            colors: "from-tbsyellow to-tbsred",
            size: "w-fit md:w-1/2 text-7xl md:text-[166.5px]",
            subsize: "text-lg md:text-[67px]",
          }
        : slug === "kaarten-en-uitnodigingen"
        ? {
            title: "Kaarten en uitnodigingen",
            subtitle: "",
            description: "",
            colors: "from-tbsyellow to-tbsred",
            size: "w-fit md:w-1/2 text-7xl md:text-[100px]",
            subsize: "text-lg md:text-[67px]",
          }
        : slug === "promotie-uitingen"
        ? {
            title: "Promotie/ uitingen",
            subtitle: "",
            description: "",
            colors: "from-tbsyellow to-tbsred",
            size: "w-fit md:w-1/2 text-7xl md:text-[166.5px]",
            subsize: "text-lg md:text-[67px]",
          }
        : slug === "foto-videografie"
        ? {
            title: "Foto/ videografie",
            subtitle: "",
            description: "",
            colors: "from-tbsyellow to-tbsred",
            size: "w-fit md:w-1/2 text-7xl md:text-[125px]",
            subsize: "text-lg md:text-[67px]",
          }
        : {
            title: "Hulp op de werkvloer",
            subtitle: "",
            description: "",
            colors: "from-tbsyellow to-tbsred",
            size: "w-fit md:w-1/2 text-7xl md:text-[125px]",
            subsize: "text-lg md:text-[67px]",
          },
    IntroText:
      slug === "visuele-identiteit"
        ? {
            title: "Breng de reis in kaart voordat je de reis maakt.",
            paragraphs: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna. Nullam feugiat metus sit amet augue vehicula, non ultrices dui hendrerit. Vivamus vitae quam sed tellus hendrerit sodales nec non ipsum.",
            ],
          }
        : slug === "kaarten-en-uitnodigingen"
        ? {
            title: "Breng de reis in kaart voordat je de reis maakt.",
            paragraphs: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. ",
            ],
          }
        : slug === "promotie-uitingen"
        ? {
            title: "Breng de reis in kaart voordat je de reis maakt.",
            paragraphs: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. ",
            ],
          }
        : slug === "foto-videografie"
        ? {
            title: "Breng de reis in kaart voordat je de reis maakt.",
            paragraphs: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. ",
            ],
          }
        : {
            title: "Breng de reis in kaart voordat je de reis maakt.",
            paragraphs: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. ",
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
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Signing",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Autobelettering",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Rebranding",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
            ],
          }
        : slug === "kaarten-en-uitnodigingen"
        ? {
            title: "",
            diensten: [
              {
                title: "Logo & huisstijl",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Signing",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Autobelettering",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Rebranding",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
            ],
          }
        : slug === "promotie-uitingen"
        ? {
            title: "",
            diensten: [
              {
                title: "Logo & huisstijl",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Signing",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Autobelettering",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Rebranding",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
            ],
          }
        : slug === "foto-videografie"
        ? {
            title: "",
            diensten: [
              {
                title: "Logo & huisstijl",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Signing",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Autobelettering",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Rebranding",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
            ],
          }
        : {
            title: "",
            diensten: [
              {
                title: "Logo & huisstijl",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Signing",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Autobelettering",
                slug: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
              },
              {
                title: "Rebranding",
                slug: "",
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
}
