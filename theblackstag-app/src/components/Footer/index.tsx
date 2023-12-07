import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logo-wit.svg";
import instaLogo from "@/../public/images/insta.svg";
import instaLogoHover from "@/../public/images/insta-hover.svg";
import mailLogo from "@/../public/images/mail.svg";
import mailLogoHover from "@/../public/images/mail-hover.svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex items-end justify-between">
        <div className="w-full md:w-2/3">
          <h3 className="w-fit text-7xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-none bg-gradient-to-r from-tbsblue to-tbsgreen bg-clip-text text-transparent font-bold">
            Laten we samenwerken
          </h3>
        </div>
        <div className="w-full md:w-1/3">
          <a href="mailto:katja@theblackstag.nl" className="text-3xl">
            katja@theblackstag.nl
          </a>
          <br />
          <a href="tel:0615202440" className="text-3xl">
            06 15 202 440
          </a>
          <p className="text-base mt-4">
            The Black Stag
            <br />
            Dwarsstraat 1
            <br />
            3361 EC Sliedrecht
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
              className="text-2xl"
            >
              <Image
                src={instaLogo}
                width={50}
                height={50}
                alt="Instagram logo"
              />
            </a>
            <a href="mailto:katja@theblackstag.nl" className="text-2xl">
              <Image src={mailLogo} width={50} height={50} alt="Mail logo" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3>Diensten</h3>
          <ul>
            <li>Visuele identiteit</li>
            <li>Kaarten en uitnodigingen</li>
            <li>Promotie/ uitingen</li>
            <li>Foto/ videografie</li>
            <li>Hulp op de werkvloer</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3>Succesverhalen</h3>
          <ul>
            <li>Hulp op de werkvloer</li>
            <li>Rebranding</li>
            <li>Een persoonlijk kaartje</li>
            <li>Huisstijl design</li>
          </ul>
        </div>
      </div>
      <div className="container flex items-center justify-between mt-12 border-t">
        <div className="w-full md:w-1/2 py-4">
          <p className="text-base">
            © {new Date().getFullYear()} The Black Stag. All Rights Reserved.
          </p>
        </div>
        <ul className="w-full md:w-1/2 flex items-center justify-end gap-8">
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/cookies">Cookies</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
