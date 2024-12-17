import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary z-10">
      <div className="container mx-auto">
        {/* Display logo and copyright information */}
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo />
          <div className="flex flex-row items-center">
            <div className="text-white">
              Copyright &copy; 2024. All rights reserved.
            </div>
            <Image
              src="/logos/BlackBoxStudiosLogo.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
