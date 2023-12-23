"use client";
import Image from "next/image";
import pijl from "@/../public/images/pijl.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CaseItemProps {
  title: string;
  description: string;
  image: string;
}

const CaseItem: React.FC<CaseItemProps> = ({ title, description, image }) => {
  const pathname = usePathname();
  const color =
    pathname === "/"
      ? "hover:bg-tbsgreen"
      : pathname === "/diensten"
      ? "hover:bg-tbsorange"
      : "";
  return (
    <Link href="/cases">
      <div className={`group relative h-[560px] bg-tbsgray ${color} p-8`}>
        <h3 className="invisible group-hover:visible text-2xl font-bold">
          {title}
        </h3>
        <h4 className="invisible group-hover:visible text-base">
          {description}
        </h4>
        <div className="flex m-2 p-2 bg-tbsgray items-center justify-center h-3/4">
          <p className="text-2xl">[FOTO]</p>
        </div>
        <Image
          className="invisible group-hover:visible absolute bottom-4 right-4"
          src={pijl}
          alt="pijl"
          width={50}
          height={50}
        />
      </div>
    </Link>
  );
};

export default CaseItem;
