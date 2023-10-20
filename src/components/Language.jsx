import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useLanguage } from "../context/LanguageContext";

const langs = [
  {
    key: 0,
    name: "EN",
    code: "en",
    img: (
      <svg
        className="w-5 h-5 mr-2 rounded-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 3900 3900"
      >
        <path fill="#b22234" d="M0 0h7410v3900H0z" />
        <path
          d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
          stroke="#fff"
          strokeWidth="300"
        />
        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
        <g fill="#fff">
          <g id="d">
            <g id="c">
              <g id="e">
                <g id="b">
                  <path
                    id="a"
                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                  />
                  <use xlinkHref="#a" y="420" />
                  <use xlinkHref="#a" y="840" />
                  <use xlinkHref="#a" y="1260" />
                </g>
                <use xlinkHref="#a" y="1680" />
              </g>
              <use xlinkHref="#b" x="247" y="210" />
            </g>
            <use xlinkHref="#c" x="494" />
          </g>
          <use xlinkHref="#d" x="988" />
          <use xlinkHref="#c" x="1976" />
          <use xlinkHref="#e" x="2470" />
        </g>
      </svg>
    ),
  },
  {
    key: 1,
    code: "ru",
    name: "RU",
    img: (
      <svg
        className="iconify iconify--emojione w-[20px] mr-2 rounded-full"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M31.9 2c-13 0-24.1 8.4-28.2 20h56.6C56.1 10.4 45 2 31.9 2z"
          fill="#f9f9f9"
        ></path>
        <path
          d="M31.9 62c13.1 0 24.2-8.4 28.3-20H3.7c4.1 11.7 15.2 20 28.2 20z"
          fill="#ed4c5c"
        ></path>
        <path
          d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7"
          fill="#428bc1"
        ></path>
      </svg>
    ),
  },
  {
    key: 2,
    name: "UZ",
    code: "uz",
    img: (
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="iconify iconify--emojione w-[20px] mr-2 rounded-full"
        preserveAspectRatio="xMidYMid meet"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M32 2C19.3 2 8.5 9.9 4.1 21h55.8C55.5 9.9 44.7 2 32 2z"
            fill="#42ade2"
          >
            {" "}
          </path>{" "}
          <path
            d="M32 62c12.7 0 23.5-7.9 27.9-19H4.1C8.5 54.1 19.3 62 32 62z"
            fill="#83bf4f"
          >
            {" "}
          </path>{" "}
          <path
            d="M62 32c0-3.1-.5-6.2-1.4-9H3.4C2.5 25.8 2 28.9 2 32s.5 6.2 1.4 9h57.2c.9-2.8 1.4-5.9 1.4-9"
            fill="#ffffff"
          >
            {" "}
          </path>{" "}
          <g fill="#c94747">
            {" "}
            <path d="M59.9 21c.1.3.3.7.4 1c.1.3.2.7.3 1"> </path>{" "}
            <path d="M60.3 22c-.1-.3-.3-.7-.4-1H4.1c-.1.3-.3.7-.4 1c-.1.3-.2.7-.3 1h57.2c-.1-.3-.2-.7-.3-1">
              {" "}
            </path>{" "}
            <path d="M3.7 42c.1.3.3.7.4 1h55.8c.1-.3.3-.7.4-1c.1-.3.2-.7.3-1H3.4c.1.3.2.7.3 1">
              {" "}
            </path>{" "}
          </g>{" "}
          <g fill="#ffffff">
            {" "}
            <path d="M20.4 17.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3c.6 0 1.1.1 1.6.3c-.8-.6-1.9-1-3-1c-2.8 0-5 2.2-5 5s2.2 5 5 5c1.1 0 2.2-.4 3-1c-.5.2-1 .3-1.6.3">
              {" "}
            </path>{" "}
            <path d="M24.7 15.2l.4 1.1h1.1l-.9.6l.3 1.1l-.9-.7l-.9.7l.4-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
            <path d="M29 15.2l.3 1.1h1.2l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
            <path d="M33.3 15.2l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
            <path d="M37.5 15.2l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z">
              {" "}
            </path>{" "}
            <path d="M41.8 15.2l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
            <path d="M29 11.6l.3 1.1h1.2l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
            <path d="M33.3 11.6l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
            <path d="M37.5 11.6l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z">
              {" "}
            </path>{" "}
            <path d="M41.8 11.6l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
            <path d="M33.3 8l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
            <path d="M37.5 8l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z">
              {" "}
            </path>{" "}
            <path d="M41.8 8l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
              {" "}
            </path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
];

const Language = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    changeLanguage(newLang);
  };

  return (
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
  );
};

export default Language;
