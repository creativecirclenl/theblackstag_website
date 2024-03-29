import Image from "next/image";

const Intro = ({ content, slug }: { content: any; slug: any }) => {
  return (
    <section className="container">
      <div className="relative md:h-[900px] md:flex">
        <div className="md:w-1/2 overflow-hidden my-8">
          <Image
            src={content?.image || "/images/placeholder.svg"}
            height={750}
            width={900}
            alt={slug}
            className="relative -z-10 h-full"
          />
        </div>
        <div className="md:w-1/2 h-full flex flex-col justify-around md:float-end">
          <div>
            <h3 className="text-3xl md:text-5xl md:ps-12 md:pt-12 md:-ms-32 uppercase">
              {content?.type}
            </h3>
            <h2
              className={`w-fit text-6xl md:text-9xl leading-none bg-gradient-to-r ${content?.colors} bg-clip-text text-transparent font-bold md:ps-12 md:-ms-32 uppercase`}
            >
              {content?.title}
            </h2>
          </div>
          <p className="py-8 md:px-12 md:w-1/2">{content?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
