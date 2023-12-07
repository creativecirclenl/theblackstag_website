import Image from "next/image";
import logoWit from "@/../public/images/logo-wit.svg";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src={logoWit} alt="The Black Stag logo" width={245} height={63} />
    </Link>
  );
};

export default Logo;
