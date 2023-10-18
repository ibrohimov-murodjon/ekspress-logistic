import React from "react";
import { useTranslation } from "react-i18next";

function SubText({ title, bgclr, white }) {
  const { t } = useTranslation();
  return (
    <div
      className="inline-block py-[3px] px-[9px] font-rubik text-[14px] border-l-4 border-l-[#ffd200] mb-4 z-[10]"
      style={{
        background: `${bgclr}`,
        color: `${white ? "#fff" : "#1C1F35"}`,
      }}
    >
      {t(title)}
    </div>
  );
}

export default SubText;
