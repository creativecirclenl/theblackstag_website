import Link from "next/link";
import CaseItem from "../CaseItem";

const Cases: React.FC = () => {
  const casesContent = [
    {
      title: "Case 1",
      description: "Lorem ipsum",
      image: "",
    },
    {
      title: "Case 2",
      description: "Lorem ipsum",
      image: "",
    },
    {
      title: "Case 3",
      description: "Lorem ipsum",
      image: "",
    },
  ];
  return (
    <section className="my-48">
      <div className="container md:flex justify-between items-end">
        <div>
          <h3 className="text-[#68beec] text-2xl uppercase">Cases</h3>
          <h4 className="text-4xl font-bold">Succesverhalen</h4>
        </div>
        <Link
          href="/cases"
          className="border-b leading-relaxed hover:bg-gradient-to-t hover:from-50% hover:to-50% hover:from-tbsgreen hover:border-b-0"
        >
          Bekijk meer werk
        </Link>
      </div>
      <div className="relative mt-8 flex overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {casesContent.map((caseItem, index) => (
            <CaseItem
              key={index}
              title={caseItem.title}
              description={caseItem.description}
              image={caseItem.image}
            />
          ))}
        </div>
        <div className="bg-gray-200 h-48"></div>
      </div>
    </section>
  );
};

export default Cases;
