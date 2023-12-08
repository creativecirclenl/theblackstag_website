import Image from "next/image";
import logoWit from "@/../public/images/logo-wit.svg";
import logoKleur from "@/../public/images/logo-kleur.svg";
import Link from "next/link";

const Logo: React.FC<{ color: boolean }> = ({ color }) => {
  return (
    <Link href="/">
      {color ? (
        <Image
          src={logoKleur}
          alt="The Black Stag logo"
          width={245}
          height={63}
        />
      ) : (
        <Image
          src={logoWit}
          alt="The Black Stag logo"
          width={245}
          height={63}
        />
      )}
    </Link>
  );
};

export default Logo;
