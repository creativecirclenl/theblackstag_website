import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logo-wit.svg";
import instaLogo from "@/../public/images/insta.svg";
import instaLogoHover from "@/../public/images/insta-hover.svg";
import mailLogo from "@/../public/images/mail.svg";
import mailLogoHover from "@/../public/images/mail-hover.svg";

const footerContent = {
  title: "Laten we samenwerken",
  email: "katja@theblackstag.nl",
  phoneNumber: "06 15 202 440",
  address: {
    title: "The Black Stag",
    street: "Dwarsstraat 1",
    city: "3361 EC Sliedrecht",
  },
  services: [
    { name: "Visuele identiteit", link: "/visuele-identiteit" },
    { name: "Kaarten en uitnodigingen", link: "/kaarten-en-uitnodigingen" },
    { name: "Promotie/ uitingen", link: "/promotie-uitingen" },
    { name: "Foto/ videografie", link: "/foto-videografie" },
    { name: "Hulp op de werkvloer", link: "/hulp-op-de-werkvloer" },
  ],
  successStories: [
    { name: "Hulp op de werkvloer", link: "/hulp-op-de-werkvloer" },
    { name: "Rebranding", link: "/rebranding" },
    { name: "Een persoonlijk kaartje", link: "/een-persoonlijk-kaartje" },
  ],
  footerLinks: [
    { name: "Privacy", link: "/privacy" },
    { name: "Cookies", link: "/cookies" },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex items-end justify-between">
        <div className="w-full md:w-2/3">
          <h3 className="w-fit text-7xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-none bg-gradient-to-r from-tbsblue to-tbsgreen bg-clip-text text-transparent font-bold">
            {footerContent.title}
          </h3>
        </div>
        <div className="w-full md:w-1/3">
          <a href={`mailto:${footerContent.email}`} className="text-3xl">
            {footerContent.email}
          </a>
          <br />
          <a
            href={`tel:${footerContent.phoneNumber.replace(/\s/g, "")}`}
            className="text-3xl"
          >
            {footerContent.phoneNumber}
          </a>
          <p className="text-base mt-4">
            {footerContent.address.title}
            <br />
            {footerContent.address.street}
            <br />
            {footerContent.address.city}
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-between mt-12">
        <div className="w-full flex flex-col md:w-1/2">
          <Image
            src={logo}
            width={400}
            height={400}
            alt="The Black Stag logo"
          />
          <div className="flex gap-4 pt-4">
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
              href={`mailto:${footerContent.email}`}
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
        <div className="w-full md:w-1/4">
          <h3 className="text-xl">Diensten</h3>
          <ul>
            {footerContent.services.map((service, index) => (
              <li key={index}>
                <Link href={service.link}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3>Succesverhalen</h3>
          <ul>
            {footerContent.successStories.map((story, index) => (
              <li key={index}>
                <Link href={story.link} className="">
                  {story.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container flex items-center justify-between mt-12 border-t">
        <div className="w-full md:w-1/2 py-4">
          <p className="text-base">
            © {new Date().getFullYear()} {footerContent.address.title}. All
            Rights Reserved.
          </p>
        </div>
        <ul className="w-full md:w-1/2 flex items-center justify-end gap-8">
          {footerContent.footerLinks.map((footerLink, index) => (
            <li key={index}>
              <Link href={footerLink.link} className="hover:text-tbsred">
                {footerLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
