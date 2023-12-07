import Carrousel from "@/components/Carrousel";
import Cases from "@/components/Home/Cases";
import Diensten from "@/components/Home/Diensten";
import Foto from "@/components/Home/Foto";
import Intro from "@/components/Home/Intro";
import Klanten from "@/components/Home/Klanten";
import PromoTekst from "@/components/Home/PromoTekst";

export default function Home() {
  return (
    <main>
      <Intro />
      <Foto />
      <Diensten />
      <PromoTekst />
      <Klanten />
      <Carrousel />
      <Cases />
    </main>
  );
}
