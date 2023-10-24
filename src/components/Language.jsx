import { Slide } from "react-awesome-reveal";
import { useLanguage } from "../context/LanguageContext";

const langs = [
  {
    key: 0,
    name: "EN",
    code: "en",
  },
  {
    key: 1,
    code: "ru",
    name: "RU",
  },
  {
    key: 2,
    name: "UZ",
    code: "uz",
  },
];

const Language = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    changeLanguage(newLang);
  };

  return (
    <Slide direction="right" duration={2500}>
      <select
        className="styled-select bg-transparent border-none text-white"
        value={language}
        onChange={handleLanguageChange}
      >
        {langs.map((lan) => (
          <option value={lan.code} key={lan.key}>
            {lan.name}
          </option>
        ))}
      </select>
    </Slide>
  );
};

export default Language;
