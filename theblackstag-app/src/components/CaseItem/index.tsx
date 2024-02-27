"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CaseItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CaseItem: React.FC<CaseItemProps> = ({
  title,
  description,
  image,
  link,
}) => {
  const pathname = usePathname();
  const color =
    pathname === "/" || pathname === "/succesverhalen/fortune-factory"
      ? "hover:bg-tbsgreen/80"
      : pathname === "/diensten"
      ? "hover:bg-tbsorange/80"
      : "hover:bg-tbsred/80";
  return (
    <Link href={link} className="w-1/3">
      <div className={`group relative h-[560px] ${color} p-8`}>
        <h3 className="invisible group-hover:visible text-2xl font-bold">
          {title}
        </h3>
        <h4 className="invisible group-hover:visible text-base">
          {description}
        </h4>
        <Image src={image} fill className="object-cover -z-10" alt={title} />
        <Image
          className="invisible group-hover:visible absolute bottom-4 right-4"
          src="/images/pijl.svg"
          alt="pijl"
          width={50}
          height={50}
        />
      </div>
    </Link>
  );
};

export default CaseItem;
