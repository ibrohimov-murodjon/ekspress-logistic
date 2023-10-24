//react-reveral for animtion
import { Slide } from "react-awesome-reveal";
//images
import { instaLogo, tgLogo, callLogoWhite, emailLogoNavbar } from "../assets";
import { Language } from "./";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

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

// const language = localStorage.getItem("i18nextLng");

function Navbar() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <nav className="navbar relative sticky-header bg-white bg-opacity-30 backdrop-filter backdrop-blur-md pt-3 tabletLgMd:pt-0">
      <div className="myContainer">
        <div className="flex items-center justify-between gap-x-3 pt-[18px] pb-[18px] flex-wrap desktopMid:justify-center tabletLgMd:pt-[25px] mobileLg:flex-col maxSm:justify-center mobileLg:pt-[16px]">
          <Slide direction="down" duration={2500} className="maxSm:hidden">
            <div className="flex space-x-4  items-center">
              {navLinks.map((link, index) => (
                <a
                  href={`/#${link.to}`}
                  key={index}
                  className={`nav relative text-white ${
                    language === "ru" ? "font-rubik font-regular" : "font-krub"
                  } font-bold`}
                >
                  {t(link.name)}
                </a>
              ))}
            </div>
          </Slide>
          <div className="flex gap-4 items-center desktopMid:mt-3 maxSm:w-full maxSm:justify-between  maxSm:mt-0">
            <Slide direction="down" duration={2500}>
              <div className="flex items-center gap-x-6 ">
                <a
                  href="https://www.instagram.com/t.eks.logistic/"
                  target={"_blank"}
                >
                  <img
                    src={instaLogo}
                    alt="instagram logo"
                    className="w-[28px]"
                  />
                </a>
                <a href="https://t.me/ekspress_logistics" target={"_blank"}>
                  <img src={tgLogo} alt="telegram logo" className="w-[32px]" />
                </a>
                <div className="dropdown">
                  <span>
                    <img
                      src={callLogoWhite}
                      alt="telegram logo"
                      className="w-[32px]"
                    />
                  </span>
                  <div className="dropdown-content">
                    <div className="triangle-up"></div>
                    <div className="drop-cont-elements">
                      <a
                        href="tel:+998910500144"
                        className="text-center hover:underline hover:underline-offset-4"
                      >
                        +998910500144
                      </a>
                      <a
                        href="tel:+998903515042"
                        className="text-center inline-block mt-2 hover:underline hover:underline-offset-4"
                      >
                        +998903515042
                      </a>
                    </div>
                  </div>
                </div>
                <a href="mailto:t.eks.logistic@gmail.com" target={"_blank"}>
                  <img
                    src={emailLogoNavbar}
                    alt="telegram logo"
                    className="w-[32px]"
                  />
                </a>
              </div>
            </Slide>
            <Language />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
