import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/logo";
import instaLogo from "@/../public/images/insta.svg";
import instaLogoHover from "@/../public/images/insta-hover.svg";
import mailLogo from "@/../public/images/mail.svg";
import mailLogoHover from "@/../public/images/mail-hover.svg";

const Menu: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  const menuContent = {
    email: "katja@theblackstag.nl",
    phoneNumber: "06 15 202 440",
    address: {
      title: "The Black Stag",
      street: "Dwarsstraat 1",
      city: "3361 EC Sliedrecht",
    },
    items: [
      {
        title: "Welkom",
        link: "/",
        description: "Ontwerpbureau in Sliedrecht",
      },
      {
        title: "Service",
        link: "/diensten",
        description: "Van alle markten thuis",
      },
      {
        title: "Over The Black Stag",
        link: "/over-the-black-stag",
        description: "Ontmoet het team",
      },
      {
        title: "Succesverhalen",
        link: "/succesverhalen",
        description: "Van particulieren tot bedrijven",
      },
    ],
  };

  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 h-screen w-screen">
      <div className="bg-black h-full w-full">
        <div className="container h-28 flex flex-col justify-end md:flex-row md:justify-between md:items-end ">
          <Logo color={true} />
          <p className="text-sm md:text-base md:w-1/3">Laten we samenwerken</p>
        </div>
        <div className="container h-[calc(100vh-7rem)] flex flex-col justify-end">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <ul className="w-full pb-6 md:pb-0 md:w-2/3">
              {menuContent.items.map((item, index) => (
                <li key={index} className="py-3 md:py-6">
                  <Link
                    href={item.link}
                    onClick={toggleMenu}
                    className="text-2xl md:text-4xl border-b md:leading-relaxed hover:bg-gradient-to-t hover:from-tbsgreen"
                  >
                    {item.title}
                  </Link>
                  <p className="text-tbsgray text-sm md:text-base">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <div className="w-full md:w-1/3">
              <a
                href={`mailto:${menuContent.email}`}
                className="text-xl md:text-3xl"
              >
                {menuContent.email}
              </a>
              <br />
              <a
                href={`tel:${menuContent.phoneNumber.replace(/\s/g, "")}`}
                className="text-xl md:text-3xl"
              >
                {menuContent.phoneNumber}
              </a>
              <p className="text-base mt-4">
                {menuContent.address.title}
                <br />
                {menuContent.address.street}
                <br />
                {menuContent.address.city}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end h-28">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/theblackstagvormgeving/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-2xl"
              >
                <Image
                  src={instaLogo}
                  width={50}
                  height={50}
                  alt="Instagram logo"
                  className="group-hover:hidden"
                />
                <Image
                  src={instaLogoHover}
                  width={50}
                  height={50}
                  alt="Instagram logo"
                  className="hidden group-hover:block"
                />
              </a>
              <a
                href={`mailto:${menuContent.email}`}
                className="group text-2xl"
              >
                <Image
                  src={mailLogo}
                  width={50}
                  height={50}
                  alt="Mail logo"
                  className="group-hover:hidden"
                />
                <Image
                  src={mailLogoHover}
                  width={50}
                  height={50}
                  alt="Mail logo"
                  className="hidden group-hover:block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
