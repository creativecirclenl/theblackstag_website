const Klanten: React.FC = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h3 className="w-fit text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.8] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-bold">
          Grote en klein bedrijven helpen
        </h3>
        <div className="flex justify-center items-end">
          <p className="text-sm text-left md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            blandit mauris. Phasellus eget pellentesque est. Sed vitae sapien
            quam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Klanten;
