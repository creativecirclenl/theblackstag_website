"use client";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Nav from "./nav";

const Header: React.FC = () => {
  const color = usePathname() !== "/" ? true : false;
  return (
    <header>
      <div className="container h-28 flex items-end justify-between">
        <Logo color={color} />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
