import { useTranslation } from "react-i18next";

const ContactElement = ({ img, title, text, href }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-x-[14px] mobileSm:ml-[10%]">
      <span className="w-[63px] h-[63px] bg-[#111C55] rounded-full flex items-center justify-center mobileMd:w-[50px] mobileMd:h-[50px]">
        <img
          src={img}
          className="w-[35px] h-[35px] mobileMd:w-[30px] mobileMd:h-[30px]"
        />
      </span>
      <span>
        <h4 className="text-[14px] font-krub leading-[18.9px] font-medium text-white">
          {t(title)}
        </h4>
        {href ? (
          <a
            href={`${href}:${text}`}
            className="text-[14px] font-krub leading-[18.9px] font-medium text-white hover:underline hover:underline-offset-4"
          >
            {t(text)}
          </a>
        ) : (
          <p className="text-[14px] font-krub leading-[18.9px] font-medium text-white">
            {t(text)}
          </p>
        )}
      </span>
    </div>
  );
};

export default ContactElement;
