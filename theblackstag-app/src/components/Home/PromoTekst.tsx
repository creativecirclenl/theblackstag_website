export default function PromoTekst() {
  const promoTeksthtmlContent =
    "<p>The Black stag creëert <a href='#'>communicatiemiddelen</a> om jouw bedrijf beter op de kaart te zetten. Van <a href='#'>huisstijl ontwikkeling</a> tot de volledige <a href='#'>signing</a> van je pand. Naast de B2B en B2C is The Black Stag ook actief voor particulieren. Zo kun je hier terecht voor unieke <a href='#'>geboorte-/ en trouwkaarten</a>.</p>";
  return (
    <section className="promotekst container flex items-center justify-center py-8 md:py-32 md:w-1/2">
      <div
        className="text-center text-2xl md:text-4xl"
        dangerouslySetInnerHTML={{ __html: promoTeksthtmlContent }}
      />
    </section>
  );
}
