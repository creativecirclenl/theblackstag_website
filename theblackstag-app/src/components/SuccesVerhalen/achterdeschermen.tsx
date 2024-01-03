import Image from "next/image";

const AchterDeSchermen: React.FC<{ content: any }> = ({ content }) => {
  return (
    <section className="container my-24 flex h-[800px]">
      <div className="md:w-1/4 flex flex-col justify-end">
        <h2
          className={`relative w-[200%] block text-8xl font-bold mb-4 bg-gradient-to-r ${content?.colors} bg-clip-text text-transparent`}
        >
          Achter de schermen
        </h2>
        <p className="ps-0 p-12">
          Cras commodo a dolor vels agitis. Aliquam interdum suscipit neque non
          egestas ficitur. Quisque sit amet erat placerat, lacinia quam.
        </p>
      </div>
      <div className="md:w-3/4">
        <Image
          src="/images/ff-achterdeschermen.jpg"
          width={690}
          height={1040}
          alt="achterdeschermen"
          className="w-full h-full object-cover -z-10"
        />
      </div>
    </section>
  );
};

export default AchterDeSchermen;
