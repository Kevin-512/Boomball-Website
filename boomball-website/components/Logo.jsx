import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    // Text logo declaration
    <Link href="/" className="flex flex-row items-center">
      <Image
        src="/header/boomballLogo.png"
        width={150}
        height={150}
        alt="Logo of Boomball"
      />
      <div className="lg:hidden">
        <h1 className="text-5xl outline-text text-white ">
        BoomBall <span className="text-[#cf5113]">Extreme</span>
      </h1>
      </div>
      
    </Link>
  );
};

export default Logo;
