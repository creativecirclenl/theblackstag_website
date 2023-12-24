interface IntroProps {
  content: {
    size: string;
    colors: string;
    title: string;
    subsize: string;
    subtitle: string;
    description: string;
  };
}

const Intro: React.FC<IntroProps> = ({ content }) => {
  return (
    <section className="container h-[60vh] md:h-[70vh] flex flex-col items-start justify-end mb-8">
      <h2
        className={`${content.size} leading-none bg-gradient-to-r ${content.colors} bg-clip-text text-transparent font-bold`}
      >
        {content.title}
      </h2>
      <div className="flex items-center">
        <h2 className={`${content.subsize} leading-none font-medium`}>
          {content.subtitle}
        </h2>
        <p className="md:w-1/3">{content.description}</p>
      </div>
    </section>
  );
};

export default Intro;
