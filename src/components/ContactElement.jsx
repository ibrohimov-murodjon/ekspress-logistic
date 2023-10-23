import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

const ContactElement = ({ img, title, text, href }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <div className="flex items-center gap-x-[14px] mobileSm:ml-[10%]">
      <span className="w-[63px] h-[63px] bg-[#273270] rounded-full flex items-center justify-center mobileMd:w-[50px] mobileMd:h-[50px]">
        <img
          src={img}
          className="w-[35px] h-[35px] mobileMd:w-[30px] mobileMd:h-[30px]"
        />
      </span>
      <span>
        <h4
          className={`text-[14px] font-${
            language === "ru" ? "rubik" : "krub"
          } leading-[18.9px] font-medium text-white`}
        >
          {t(title)}
        </h4>
        {href ? (
          <a
            href={`${href}:${t(text)}`}
            className={`text-[14px] ${
              language === "ru" ? "font-rubik font-regular" : "font-krub"
            } leading-[18.9px] font-medium text-white hover:underline hover:underline-offset-4`}
          >
            {t(text)}
          </a>
        ) : (
          <p
            className={`text-[14px] ${
              language === "ru" ? "font-rubik font-regular" : "font-krub"
            } leading-[18.9px] font-medium text-white`}
          >
            {t(text)}
          </p>
        )}
      </span>
    </div>
  );
};

export default ContactElement;
