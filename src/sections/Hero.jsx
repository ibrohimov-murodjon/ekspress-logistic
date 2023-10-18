import React, { useState } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { SubText, Button } from "../components";
import video from "../assets/bg-video.mp4";
import { bgHero } from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="relative flex flex-col justify-center h-[840px] overflow-hidden mt-[-70px] tabletLgMd:mt-[-100px]">
      <div className="absolute w-full h-[840px] z-[10] bg-bgVideo"></div>
      <img
        src={bgHero}
        alt="Background Image"
        className={`absolute z-0 w-auto min-w-full min-h-full max-w-none ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        src={video}
        autoPlay={true}
        loop
        muted
        className={`absolute z-0 w-auto min-w-full min-h-full max-w-none ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={handleVideoLoad}
      ></video>
      <div className="z-[99] myContainer">
        <Slide direction="left" duration={3500}>
          <SubText title="hero_text" bgclr="#043265" white />
          <h1 className="text-white text-5xl max-w-2xl font-bold font-rubik maxSm:text-4xl">
            {t("hero_title")}
          </h1>
          <p className="text-white max-w-lg font-regular font-rubik text-[16px] pt-4 ">
            {t("hero_desc")}
          </p>
        </Slide>
        <Fade duration={3500}>
          <Link to="premium">
            <Button title="premium_class" path={"/premium"} />
          </Link>
        </Fade>
      </div>
      <a href="#about">
        <svg className="arrows z-[99]">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </a>
    </div>
  );
}

export default Hero;
