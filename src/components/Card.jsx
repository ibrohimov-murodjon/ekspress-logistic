//images
import tgLogo from "../assets/tg_logo.svg";
import phoneLogo from "../assets/call_logo.svg";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

function Card({ img, name, role, bgDark, tglink, number, borderNone }) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <div
      className={`relative max-w-sm  border border-gray-200 rounded-lg shadow ${
        borderNone ? "border-none" : ""
      }`}
      style={{ background: `${bgDark ? "#1C1F35" : "#fff"}` }}
    >
      <img
        src={img}
        alt="director logo"
        className="w-full object-cover rounded-tl-lg rounded-tr-lg maxSm:max-w-[300px]"
      />
      <div className="p-5">
        <h5
          className="text-xl font-rubik font-medium maxSm:text-base"
          style={{ color: `${bgDark ? "#fff" : "#141414"}` }}
        >
          {t(name)}
        </h5>
        <p
          className={`text-base ${
            language === "ru" ? "font-rubik font-regular" : "font-krub"
          } font-medium maxSm:text-sm`}
          style={{ color: `${bgDark ? "#fff" : "#141414"}` }}
        >
          {t(role)}
        </p>
      </div>
      <div className="flex items-center justify-center gap-[25px] bg-gradient-to-r  from-[#f7971e] to-[#ffd200] w-[104px] h-[61px] absolute bottom-16 right-0">
        <a href={`${tglink}`} target={"_blank"}>
          <img src={tgLogo} alt="telegram logo" />
        </a>
        <a href={`tel:${number}`}>
          <img src={phoneLogo} alt="phone logo" />
        </a>
      </div>
    </div>
  );
}

export default Card;
