import Intro from "@/components/Home/Intro";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import restyleLindi from "@/../public/images/logo-restyling-lindi.png";
import Image from "next/image";
import Cases from "@/components/Home/Cases";

const DienstenPage: React.FC = () => {
  const content = {
    categories: [
      {
        title: "Visuele identiteit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
      },
      {
        title: "Kaarten en uitnodigingen",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
      },
      {
        title: "Promotie/ uitingen",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
      },
      {
        title: "Foto/ videografie",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
      },
      {
        title: "Hulp op de werkvloer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien quam. Ut ut neque hendrerit, sollicitudin nisi sed, tincidunt mauris. Donec orci odio, tempus vel fermentum eget, blandit non lacus. Nullam commodo quam nec tempus ornare. Proin ex elit, facilisis et orci eget, euismod sodales lectus. In non tellus est. Aliquam et tellus magna.",
      },
    ],
  };

  const designstepscontent = [
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
  ];
  return (
    <main>
      <Intro />
      <section className="container mt-16">
        <div className="md:w-2/3">
          <h2 className="font-medium text-2xl">
            Ik ben niet bang om uitdagingen aan te gaan!
          </h2>

          <p className="py-4">
            Met samenwerking als de kern, sta ik klaar om met jou samen te
            werken om winnende oplossingen te creëren. Ik blink uit in luisteren
            en vervolgens handelen naar jouw behoeften om een succesvol
            projectresultaat te leveren. Uitgerust met kennis en ervaring die
            nodig is om de klus te klaren, sta ik klaar om een breed scala aan
            diensten te leveren, zoals hieronder beschreven.
          </p>

          <p className="py-4">
            Cras dictum sit amet risus id tempor. Sed fringilla egestas dui, sit
            amet consequat diam rutrum nec. Suspendisse ullamcorper rutrum
            lectus ut ornare. Quisque tortor urna, dignissim vel rutrum in,
            varius sed tortor. Integer et urna eu justo pretium luctus. Praesent
            consequat, tellus quis lobortis auctor, eros lacus laoreet massa,
            feugiat mollis ex purus at ligula. Nulla justo lacus, vulputate sit
            amet libero quis, gravida aliquam sem. In dignissim quam ipsum, at
            sollicitudin neque molestie pulvinar. Donec sodales nulla vel
            condimentum efficitur.
          </p>
        </div>
      </section>
      <section className="container mt-16">
        <div>
          <h2 className="font-medium text-xl">Waarmeen kan ik je helpen?</h2>
          {content.categories.map((category, index) => (
            <div
              key={index}
              className="md:flex items-start justify-start border-t min-h-40 py-16"
            >
              <div className="md:w-1/3">
                <div className="max-w-xs">
                  <Link
                    href={"/diensten/"}
                    className="w-fit max-w-xs font-medium text-3xl border-b leading-relaxed hover:bg-gradient-to-t hover:from-50% hover:to-50% hover:from-tbsgreen hover:border-b-0"
                  >
                    {category.title}
                  </Link>
                </div>
              </div>
              <p className="md:w-2/3 ">{category.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative mt-16">
        <div className="container flex flex-col md:flex-row">
          <div className="md:w-1/2 h-[800px] flex items-center">
            <div>
              <h2 className="text-tbsorange text-2xl pb-8">
                HOE WERKT THE BLACK STAG?
              </h2>
              <h3 className="text-4xl font-medium md:w-1/2 pb-8">
                Het ontwerpproces in vier stappen
              </h3>
              <Accordion content={designstepscontent} />
            </div>
          </div>
          <div className="md:absolute top-0 right-0">
            <Image
              src={restyleLindi}
              width={640}
              height={800}
              alt="restyle lindi"
            />
          </div>
        </div>
      </section>
      <Cases />
    </main>
  );
};

export default DienstenPage;
