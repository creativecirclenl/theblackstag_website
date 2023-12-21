"use client";
import { usePathname } from "next/navigation";
const Intro: React.FC = () => {
  const pathname = usePathname();

  const content =
    pathname === "/"
      ? {
          title: "Hallo",
          subtitle: "Welkom bij The Black Stag",
          colors: "from-tbsgreen to-tbsblue",
          size: "w-fit text-8xl md:text-[333px]",
          subsize: "text-xl md:text-[87px]",
        }
      : pathname === "/diensten"
      ? {
          title: "Groot Denken",
          subtitle: "& oplossingen maken",
          colors: "from-tbsorange to-tbsyellow",
          size: "w-1/2 text-4xl md:text-[166.5px]",
          subsize: "text-lg md:text-[67px]",
        }
      : pathname === "/cases"
      ? {
          title: "Cases",
          subtitle: "Wat hebben wij gedaan?",
          colors: "from-tbsorange to-tbsyellow",
        }
      : pathname === "/over-ons"
      ? {
          title: "Over ons",
          subtitle: "Wie zijn wij?",
          colors: "from-tbsyellow to-tbsorange",
        }
      : pathname === "/contact"
      ? {
          title: "Contact",
          subtitle: "Hoe kunnen wij u helpen?",
          colors: "from-tbsorange to-tbsyellow",
        }
      : {
          title: "404",
          subtitle: "Pagina niet gevonden",
          colors: "from-tbsyellow to-tbsorange",
        };
  return (
    <section className="container h-[60vh] md:h-[70vh] flex flex-col items-start justify-end mb-8">
      <h2
        className={`${content.size} leading-none bg-gradient-to-r ${content.colors} bg-clip-text text-transparent font-bold`}
      >
        {content.title}
      </h2>
      <h2 className={`${content.subsize} leading-none font-medium`}>
        {content.subtitle}
      </h2>
    </section>
  );
};

export default Intro;
