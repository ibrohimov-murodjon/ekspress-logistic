import { useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import {
  logo,
  callLogo,
  emailLogo,
  timeLogo,
  close,
  burger,
  newLogo,
} from "../assets";
import { ContactElement } from "../components";
import { useTranslation } from "react-i18next";

const navLinks = [
  {
    name: "home",
    to: "",
  },
  {
    name: "about",
    to: "about",
  },
  {
    name: "advantages",
    to: "advantages",
  },
  {
    name: "our_team",
    to: "team",
  },
  {
    name: "contact",
    to: "contact",
  },
];

const contactData = [
  {
    id: 1,
    img: emailLogo,
    title: "email_text",
    text: "email",
    href: "mailto",
  },
  {
    id: 2,
    img: callLogo,
    title: "call_us",
    text: "phone",
    href: "tel",
  },
  {
    id: 3,
    img: timeLogo,
    title: "opening_day",
    text: "closing_day",
  },
];

function Header() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const handleMenu = (name) => {
    setActive(name);
    setToggle(false);
  };

  return (
    <div className="header__container bg-[#091242] maxSm:shadow-2xl z-[999] w-full pt-11 pb-7 max-desktop:pt-6 maxSm:pt-2 maxSm:pb-0">
      <div className="myContainer  flex justify-between flex-wrap items-center desktopMin:justify-center maxSm:h-[100px]">
        <Slide direction="left" duration={3000}>
          <Link to="/" className="pr-4">
            <img
              src={newLogo}
              alt="logo"
              className="w-[80px] inline-block maxSm:flex"
            />
          </Link>
        </Slide>
        <Slide direction="right" duration={3000} className="maxSm:hidden">
          <div className="flex items-center justify-center flex-wrap gap-[39px] desktop:pt-6">
            {contactData.map((item) => {
              return (
                <Slide direction="left" duration={2500} key={item.id}>
                  <ContactElement
                    img={item.img}
                    title={item.title}
                    text={item.text}
                    href={item.href}
                  />
                </Slide>
              );
            })}
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
                  <a href={`#${nav.to}`}>{t(nav.name)}</a>
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
