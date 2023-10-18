import { useTranslation } from "react-i18next";

function Button({ title }) {
  const { t } = useTranslation();
  return (
    <button className="btn-grad max-w-full font-krub tracking-wide font-medium z-[10]">
      {t(title)}
    </button>
  );
}

export default Button;
