const Intro: React.FC = () => {
  return (
    <section className="container h-[60vh] md:h-[70vh] flex flex-col items-start justify-end mb-8">
      <h2 className="w-fit text-8xl md:text-[333px] leading-none bg-gradient-to-r from-tbsblue to-tbsgreen bg-clip-text text-transparent font-bold ">
        Hallo
      </h2>
      <h2 className="text-xl md:text-[87px] leading-none font-medium ">
        Welkom bij The Black Stag
      </h2>
    </section>
  );
};

export default Intro;
