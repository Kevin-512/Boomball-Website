"use client";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "blog",
  },
  {
    name: "our team",
  },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  return (
    // Declares template for navigation bar
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return (
            <ScrollLink
              spy={spy}
              key={index}
              activeClass="active"
              to={link.name}
              smooth
              className={linkStyles}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
