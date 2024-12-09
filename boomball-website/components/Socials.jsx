import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@BoomBallExtreme",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/boomballExtreme/",
  },
  {
    icon: <FaTiktok />,
    path: "https://www.tiktok.com/@boomballextreme",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {/* Loops through socials data to display them as a collection */}
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={iconStyles}
            target="_blank"
          >
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
