const promoTeksthtmlContent =
  "<p>Fusce sagittis leo tortor, et ornare nunc molestie et. <span style='text-decoration:underline'>Praesent at aliquam eros</span>. Morbi <span style='text-decoration:underline'>maximus</span> ipsum fermentum feugiat lacinia. Morbi non aliquam urna, sit amet elementum nunc. Quisque a nulla aliquam lorem hendrerit <span style='text-decoration:underline'>posuere vel sit</span> amet mauris.</p>";
const PromoTekst: React.FC = () => {
  return (
    <section className="container flex items-center justify-center py-8 md:py-32 md:w-1/2">
      <div
        className="text-center text-2xl md:text-4xl"
        dangerouslySetInnerHTML={{ __html: promoTeksthtmlContent }}
      />
    </section>
  );
};

export default PromoTekst;
