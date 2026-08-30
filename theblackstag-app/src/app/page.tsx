import Carrousel from "@/components/Carrousel";
import Cases from "@/components/Home/Cases";
import Diensten from "@/components/Home/Diensten";
import Dtpblock from "@/components/Home/Dtpblock";
import Foto from "@/components/Home/Foto";
import Klanten from "@/components/Home/Klanten";
import PromoTekst from "@/components/Home/PromoTekst";
import HomeIntro from "@/components/Home/Intro";

export default function Home() {
  const content = {
    Intro: {
      title: "Hallo",
      subtitle: "Welkom bij The Black Stag",
      description: "",
      colors: "from-tbsgreen to-tbsblue",
      size: "w-fit text-8xl md:text-[333px]",
      subsize: "text-xl md:text-[87px]",
    },
    DTP: {
      title: "Extra DTP-capaciteit nodig in de drukke periodes?",
      subtitle: "Ik schuif aan.",
      description:
        "Door snel in te stappen en direct mee te draaien, blijft het team ontlast en kunnen deadlines gehaald worden. Het werk stroomt door, ook wanneer alles tegelijk binnenkomt",
      colors: "from-tbsorange to-tbsyellow",
      image: "/images/ik-schuif-aan.svg",
    },
  };
  return (
    <main>
      <HomeIntro content={content.Intro} />
      {/* <Foto /> */}
      <Diensten />
      <PromoTekst />
      <Dtpblock content={content.DTP} />
      <Klanten />
      <Carrousel />
      <Cases />
    </main>
  );
}
