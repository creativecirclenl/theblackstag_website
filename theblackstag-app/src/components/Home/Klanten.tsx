export default function Klanten() {
  const content = {
    title: "Grote en klein bedrijven helpen",
    description:
      "The Black Stag staat klaar voor iedereen. Het maakt niet uit hoe groot of klein je bent. Samen kijken we naar je doelen en wensen en op basis daarvan komen we met een passend plan.",
  };
  return (
    <section className="container md:pb-32 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h3 className="w-fit text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-none bg-gradient-to-r from-tbsblue to-tbsgreen bg-clip-text text-transparent font-bold pb-2 md:pb-0">
          {content.title}
        </h3>
        <div className="flex justify-center items-end">
          <p className="text-sm text-left md:w-1/2">{content.description}</p>
        </div>
      </div>
    </section>
  );
}
