import tgLogo from "../assets/tg_logo.svg";
import phoneLogo from "../assets/call_logo.svg";

function Card({ img, name, role, bgDark, tglink, number, borderNone }) {
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
        className="w-full object-cover rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-5">
        <h5
          className="text-xl font-rubik font-medium"
          style={{ color: `${bgDark ? "#fff" : "#141414"}` }}
        >
          {name}
        </h5>
        <p
          className="text-base font-krub font-medium"
          style={{ color: `${bgDark ? "#fff" : "#141414"}` }}
        >
          {role}
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
