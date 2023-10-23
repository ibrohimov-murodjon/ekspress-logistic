//react--router-dom
import { useRouteError, Link } from "react-router-dom";
import { Button } from "../components";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import {
  newLogo,
  instaLogo,
  tgLogo,
  callLogoWhite,
  emailLogoNavbar,
} from "../assets";

function Error() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="bgHero relative flex justify-center items-center min-h-[100vh]">
        <div className="absolute w-full  min-h-[100vh] z-[1] bg-bgVideo"></div>
        <div className="text-center z-[2]">
          <p className="text-9xl font-semibold text-white font-krub">404</p>
          <h1 className="mt-4 font-rubik text-3xl text-white font-bold tracking-tighter sm:text-5xl">
            {t("page_not_found")}
          </h1>
          <p
            className={`mt-6 text-lg text-white leading-7 font-${
              language === "ru" ? "rubik" : "krub"
            }`}
          >
            {t("sorry_text")}
          </p>
          <Link to="/" className="flex justify-center items-center">
            <Button title="back_home" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bgHero flex flex-col justify-center items-center  min-h-[100vh]">
      <div className="absolute w-full  min-h-[100vh] z-[1] bg-bgVideo"></div>
      <div className="z-[2] flex flex-col justify-center items-center">
        <h1 className="mt-4 font-rubik text-3xl text-white font-bold tracking-tighter sm:text-5xl">
          {t("soon_launch")}
        </h1>
        <p
          className={`mt-6 text-lg  max-w-[547px] text-center text-white leading-7 font-${
            language === "ru" ? "rubik" : "krub "
          }`}
        >
          {t("current_working")}
        </p>
        <div className="flex absolute bottom-4 items-center space-x-6 desktopSm:mt-4 desktopSm:space-x-10 mobileLg:space-x-3">
          <a href="https://www.instagram.com/t.eks.logistic/" target={"_blank"}>
            <img src={instaLogo} alt="instagram logo" className="w-[28px]" />
          </a>
          <a href="https://t.me/ekspress_logistics" target={"_blank"}>
            <img src={tgLogo} alt="telegram logo" className="w-[32px]" />
          </a>
          <a href="tel:+998770016060" target={"_blank"}>
            <img src={callLogoWhite} alt="telegram logo" className="w-[32px]" />
          </a>
          <a href="mailto:t.eks.logistic@gmail.com" target={"_blank"}>
            <img
              src={emailLogoNavbar}
              alt="telegram logo"
              className="w-[32px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;
