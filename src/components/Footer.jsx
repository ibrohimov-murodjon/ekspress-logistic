import {
  newLogo,
  instaLogo,
  tgLogo,
  callLogoWhite,
  emailLogoNavbar,
} from "../assets";
import { useTranslation } from "react-i18next";

const navLinks = [
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

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="pt-[170px] bg-[#091242] tabletLgMax:pt-[140px] desktopSm:pt-[0]">
      <section className="myContainer relative flex justify-center flex-col py-[23px]">
        <img
          className="w-[150px] mx-auto absolute left-[545px] bottom-[50px] tabletLgMax:left-[445px] desktopSm:relative desktopSm:left-0 desktopSm:bottom-0 mobileLg:w-[120px]"
          src={newLogo}
          alt=""
        />
        <div className="flex items-end justify-between desktopSm:flex-col desktopSm:items-center desktopSm:justify-center desktopSm:pt-5">
          <div className="flex items-center mobileLg:justify-center">
            <div className="space-x-4 items-center desktopSm:space-x-10 mobileLg:space-x-3 mobileLg:flex mobileLg:flex-wrap mobileLg:justify-center">
              {navLinks.map((link, index) => (
                <>
                  <a
                    href={`#${link.to}`}
                    className="footer__link relative text-white font-krub font-bold mobileLg:mb-2"
                  >
                    {t(link.name)}
                  </a>
                </>
              ))}
            </div>
            <a
              href="https://t.me/heismurad"
              className="absolute left-[335px] bottom-[23px] text-white underline underline-offset-4 opacity-[0.8] font-krub font-regular ml-[220px] hover:opacity-[1] tabletLgMax:left-[235px] desktopSm:hidden"
              target={"_blank"}
            >
              {t("created_by")}
            </a>
          </div>
          <div className="flex items-center space-x-6 desktopSm:mt-4 desktopSm:space-x-10 mobileLg:space-x-3">
            <a
              href="https://www.instagram.com/t.eks.logistic/"
              target={"_blank"}
            >
              <img src={instaLogo} alt="instagram logo" className="w-[28px]" />
            </a>
            <a href="https://t.me/ekspress_logistics" target={"_blank"}>
              <img src={tgLogo} alt="telegram logo" className="w-[32px]" />
            </a>
            <a href="tel:+998941213399" target={"_blank"}>
              <img
                src={callLogoWhite}
                alt="telegram logo"
                className="w-[32px]"
              />
            </a>
            <a href="#" target={"_blank"}>
              <img
                src={emailLogoNavbar}
                alt="telegram logo"
                className="w-[32px]"
              />
            </a>
          </div>
          <a
            href="https://t.me/heismurad"
            className="hidden text-white underline underline-offset-4 opacity-[0.8] font-krub font-regular hover:opacity-[1] desktopSm:flex desktopSm:mt-4"
            target={"_blank"}
          >
            {t("created_by")}
          </a>
        </div>
        {/* <div className="w-full h-[2px] bg-[#D6D6D6]"></div> */}
      </section>
    </footer>
  );
}

export default Footer;
