import Accordion from "@/components/Accordion";
import Image from "next/image";

type DesignStepsProps = {
  content: {
    title: string;
    subtitle: string;
    image: string;
    steps: { title: string; description: string }[];
  };
};

export default function DesignSteps({ content }: DesignStepsProps) {
  return (
    <section className="relative mt-16">
      <div className="container flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[800px] flex items-center">
          <div>
            <h2 className="text-tbsorange text-2xl pb-8">{content.title}</h2>
            <h3 className="text-4xl font-medium md:w-1/2 pb-8">
              {content.subtitle}
            </h3>
            <Accordion content={content.steps} />
          </div>
        </div>
        <div className="md:absolute top-0 right-0 md:w-1/2 h-[800px] overflow-hidden">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
