import Carrousel from "@/components/Carrousel";
import Cases from "@/components/Home/Cases";
import Diensten from "@/components/Home/Diensten";
import Foto from "@/components/Home/Foto";
import Intro from "@/components/Home/Intro";
import Klanten from "@/components/Home/Klanten";
import PromoTekst from "@/components/Home/PromoTekst";

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
  };
  return (
    <main>
      <Intro content={content.Intro} />
      {/* <Foto /> */}
      <Diensten />
      <PromoTekst />
      <Klanten />
      <Carrousel />
      <Cases />
    </main>
  );
}
