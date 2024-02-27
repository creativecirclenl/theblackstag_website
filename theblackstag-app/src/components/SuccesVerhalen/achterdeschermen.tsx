import Image from "next/image";

export default function AchterDeSchermen({
  content,
}: {
  content:
    | {
        colors: string;
        achterdeschermen: { title: string; description: string; image: string };
      }
    | undefined;
}) {
  return content ? (
    <section className="container my-24 flex h-[800px]">
      <div className="md:w-1/4 flex flex-col justify-end">
        <h2
          className={`relative w-[200%] block text-8xl font-bold mb-4 bg-gradient-to-r ${content.colors} bg-clip-text text-transparent`}
        >
          {content.achterdeschermen.title}
        </h2>
        <p className="ps-0 p-12">{content.achterdeschermen.description}</p>
      </div>
      <div className="md:w-3/4">
        <Image
          src={content.achterdeschermen.image}
          fill
          alt={content.achterdeschermen.title}
          className="object-cover -z-10"
        />
      </div>
    </section>
  ) : null;
}
