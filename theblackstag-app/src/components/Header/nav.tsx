"use client";
import { useState } from "react";
import Menu from "../Menu";
import Image from "next/image";
import menuIconOpen from "@/../public/images/menu-open.svg";
import menuIconClose from "@/../public/images/menu-sluiten.svg";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <button
        onClick={toggleMenu}
        className={isMenuOpen ? "fixed z-50 top-24 -mt-2 -ms-6" : ""}
      >
        {isMenuOpen ? (
          <Image src={menuIconClose} alt="Close" width={24} height={24} />
        ) : (
          <Image src={menuIconOpen} alt="Menu" width={24} height={24} />
        )}
      </button>
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
    </nav>
  );
};

export default Nav;
