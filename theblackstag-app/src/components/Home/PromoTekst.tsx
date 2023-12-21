const promoTeksthtmlContent =
  "<p>Fusce sagittis leo tortor, et ornare nunc molestie et. <a href='#'>Praesent at aliquam eros</a>. Morbi <a href='#'>maximus</a> ipsum fermentum feugiat lacinia. Morbi non aliquam urna, sit amet elementum nunc. Quisque a nulla aliquam lorem hendrerit <a href='#'>posuere vel sit</a> amet mauris.</p>";
const PromoTekst: React.FC = () => {
  return (
    <section className="promotekst container flex items-center justify-center py-8 md:py-32 md:w-1/2">
      <div
        className="text-center text-2xl md:text-4xl"
        dangerouslySetInnerHTML={{ __html: promoTeksthtmlContent }}
      />
    </section>
  );
};

export default PromoTekst;
