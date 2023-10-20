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
    <nav className="navbar sticky-header bg-white bg-opacity-30 backdrop-filter backdrop-blur-md pt-3 tabletLgMd:pt-0">
      <div className="myContainer">
        <div className="flex items-center justify-between pt-[18px] pb-[18px] flex-wrap tabletLgMd:justify-center tabletLgMd:pt-[25px] mobileLg:flex-col maxSm:justify-center mobileLg:pt-[16px]">
          <Slide direction="down" duration={2500} className="maxSm:hidden">
            <div className="flex space-x-4  items-center">
              {navLinks.map((link, index) => (
                <>
                  <a
                    href={`#${link.to}`}
                    className={`nav relative text-white ${
                      language === "ru"
                        ? "font-rubik font-regular"
                        : "font-krub"
                    } font-bold`}
                  >
                    {t(link.name)}
                  </a>
                  <div className="w-[1px] h-[19px] [&:not(:last-child)]:bg-darkGray"></div>
                </>
              ))}
            </div>
          </Slide>
          <div className="flex gap-4 items-center maxSm:w-full maxSm:justify-between tabletLgMd:mt-4 maxSm:mt-0">
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

                <a href="tel:+998770016060" target={"_blank"}>
                  <img
                    src={callLogoWhite}
                    alt="telegram logo"
                    className="w-[32px]"
                  />
                </a>
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
