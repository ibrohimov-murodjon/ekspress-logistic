import React from "react";

function SubText({ title, bgclr, white }) {
  return (
    <div
      className="inline-block py-[3px] px-[9px] font-rubik text-[14px] border-l-4 border-l-[#ffd200] mb-4"
      style={{
        background: `${bgclr}`,
        color: `${white ? "#fff" : "#1C1F35"}`,
      }}
    >
      {title}
    </div>
  );
}

export default SubText;
