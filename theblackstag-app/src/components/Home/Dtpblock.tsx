import Image from "next/image";
import Link from "next/link";

const Dtpblock = ({ content }: { content: any }) => {
  return (
    <section className="container max-w-[1424px] py-12 md:py-16">
      <div className="relative min-h-[760px] md:min-h-[760px]">
        <div className="relative z-0 w-full max-w-[408px] overflow-hidden md:absolute md:left-0 md:top-0 md:h-[408px] md:w-[408px] md:max-w-none">
          <Image
            src={content?.image || "/images/placeholder.svg"}
            height={408}
            width={408}
            alt={content?.title || "DTP image"}
            className="block h-auto w-full"
          />
        </div>
        <div className="relative z-10 pt-8 md:absolute md:left-[343px] md:top-[153px] md:w-[calc(100%-343px)] md:pt-0">
          <h2
            className={`max-w-[960px] text-[clamp(2.75rem,4.1vw,4rem)] font-medium leading-[1.2] ${content?.colors ? `bg-linear-to-r ${content.colors} bg-clip-text text-transparent` : ""}`}
          >
            {content?.title}
          </h2>
          <h3 className="pt-4 text-[clamp(2.75rem,4.1vw,4rem)] font-medium leading-none md:pt-2">
            {content?.subtitle}
          </h3>
          <p className="max-w-[900px] py-12 text-lg leading-[1.15] md:py-16 md:text-[1.45rem]">
            {content?.description}
          </p>
          <Link
            href={content?.href || "/diensten/hulp-op-de-werkvloer"}
            className="inline-block bg-tbsgreen px-8 py-5 text-lg uppercase leading-none text-white transition-colors hover:bg-tbsblue"
          >
            {content?.cta || "Bekijk hoe ik kan helpen"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dtpblock;
