import React from "react";
import Link from "next/link";
interface DienstenTableProps {
  content: {
    title: string;
    diensten: {
      title: string;
      slug: string;
      description: string | JSX.Element;
    }[];
  };
}

const DienstenTable: React.FC<DienstenTableProps> = ({ content }) => {
  return (
    <section className="container mt-16">
      <div>
        <h2 className="font-medium text-xl">{content.title}</h2>
        {content.diensten.map((dienst, index) => (
          <div
            key={index}
            className="md:flex items-start justify-start border-t min-h-40 py-16"
          >
            <div className="md:w-1/3">
              <div className="max-w-xs">
                <Link
                  href={`/diensten/${dienst.slug ? dienst.slug : ""}`}
                  className="w-fit max-w-xs font-medium text-3xl border-b leading-relaxed hover:bg-gradient-to-t hover:from-50% hover:to-50% hover:from-tbsgreen hover:border-b-0"
                >
                  {dienst.title}
                </Link>
              </div>
            </div>
            <p className="md:w-2/3 flex flex-col gap-4 ">
              {dienst.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DienstenTable;
