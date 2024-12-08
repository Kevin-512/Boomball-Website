import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    // Text logo declaration
    <Link href="/">
      <Image
        src="/header/boomballLogo.png"
        width={150}
        height={150}
        alt="Logo of Boomball"
      />
    </Link>
  );
};

export default Logo;
