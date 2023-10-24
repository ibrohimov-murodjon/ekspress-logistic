import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

//component
function Button({ title, type, onClose }) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <button
      className={`btn-grad max-w-full modalEl ${
        language === "ru" ? "font-rubik font-regular" : "font-krub"
      } tracking-wide font-medium z-[10]`}
      type={type}
      onClick={onClose}
    >
      {t(title)}
    </button>
  );
}

export default Button;
