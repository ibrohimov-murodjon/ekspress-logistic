import { useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { logo, callLogo, emailLogo, timeLogo, close, burger } from "../assets";

const navLinks = [
  {
    name: "Home",
    to: "",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Why Us?",
    to: "advantages",
  },
  {
    name: "Our Team",
    to: "team",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

function Header() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleMenu = (name) => {
    setActive(name);
    setToggle(false);
  };

  return (
    <div className="bg-[#091242] maxSm:shadow-2xl z-[999] w-full pt-11 pb-7 max-desktop:pt-6 maxSm:pt-2 maxSm:pb-0 maxSm:sticky maxSm:top-0 ">
      <div className="myContainer flex justify-between flex-wrap items-center desktop:justify-center maxSm:h-[100px]">
        <Slide direction="left" duration={3000}>
          <Link to="/" className="pr-4">
            <img
              src={logo}
              alt="logo"
              className="w-[260px] h-[80px] inline-block maxSm:flex mobileSm:w-[200px]"
            />
          </Link>
        </Slide>
        <Slide direction="right" duration={3000} className="maxSm:hidden">
          <div className="flex items-center justify-center flex-wrap gap-[39px] desktop:pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#111C55] w-16 h-16 rounded-full flex items-center justify-center">
                <img src={callLogo} className="w-7 h-7" alt="" />
              </div>
              <p className="w-[176px] text-white font-krub font-medium">
                Mon - Sat 9.00 - 20.00 Sunday Closed
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#111C55] w-16 h-16 rounded-full flex items-center justify-center">
                <img src={emailLogo} className="w-10 h-10" alt="" />
              </div>
              <a
                href="mailto:contact@logistics.com"
                className="w-[176px] text-white font-krub font-medium hover:underline underline-offset-2"
              >
                Email contact@logistics.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#111C55] w-16 h-16 rounded-full flex items-center justify-center">
                <img src={timeLogo} className="w-10 h-10" alt="" />
              </div>
              <a
                href="tel:(00) 112 365 489"
                className="w-[176px] text-white font-krub font-medium hover:underline underline-offset-2"
              >
                Call Us <br /> (00) 112 365 489
              </a>
            </div>
          </div>
        </Slide>
        <div className="sm:hidden flex flex-1 justify-end items-center z-[999]">
          <img
            src={toggle ? close : burger}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-[#522db8] to-[#111C55] absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.name ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => handleMenu(nav.name)}
                >
                  <a href={`#${nav.to}`}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
