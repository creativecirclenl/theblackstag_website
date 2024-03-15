import Link from "next/link";

export default function PromoTekst() {
  const promoTeksthtmlContent = (
    <>
      <p>
        The Black stag creëert{" "}
        <Link href="/diensten">communicatiemiddelen</Link> om jouw bedrijf beter
        op de kaart te zetten. Van{" "}
        <Link href="/diensten/visuele-identiteit">huisstijl ontwikkeling</Link>{" "}
        tot de volledige{" "}
        <Link href="/diensten/visuele-identiteit">signing</Link> van je pand.
        Naast de B2B en B2C is The Black Stag ook actief voor particulieren. Zo
        kun je hier terecht voor unieke{" "}
        <Link href="/diensten/kaarten-en-uitnodigingen">
          geboorte-/ en trouwkaarten
        </Link>
        .
      </p>
    </>
  );
  return (
    <section className="promotekst container flex items-center justify-center py-8 md:py-32 md:w-1/2">
      <div className="text-center text-2xl md:text-4xl">
        {promoTeksthtmlContent}
      </div>
    </section>
  );
}
