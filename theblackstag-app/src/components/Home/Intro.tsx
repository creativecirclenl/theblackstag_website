export default function Intro({
  content,
}: {
  content: {
    size: string;
    colors: string;
    title: string;
    subsize: string;
    subtitle: string;
    description: string;
  };
}) {
  return (
    <section className="container flex flex-col items-start justify-center pt-12 mb-8">
      <h2
        className={`${content.size} leading-[1.1] bg-linear-to-r ${content.colors} bg-clip-text text-transparent font-bold`}
      >
        {content.title}
      </h2>
      <div className="md:flex items-center py-4">
        <h2 className={`${content.subsize} leading-none font-medium`}>
          {content.subtitle}
        </h2>
        <p className="w-full md:w-1/3 py-4">{content.description}</p>
      </div>
    </section>
  );
}
