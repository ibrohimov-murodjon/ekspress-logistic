import React from "react";
import { useTranslation } from "react-i18next";
//react-router-dom
import { Link } from "react-router-dom";
//components
import { SubText, PremiumContact } from "../components";
//images
import HomeIcon from "../assets/home-icon.svg";
import RightIcon from "../assets/right-icon.svg";
import DropTopBtn from "../components/DropTopBtn";

function Premium() {
  const { t } = useTranslation();
  return (
    <>
      <div className="premiumBac select-none w-full mt-[-80px] pt-[162px]">
        <div className="myContainer pb-[87px]">
          <SubText title="premium" bgclr="#03244b" white />
          <ul className="flex gap-x-3 mb-8">
            <li>
              <Link className="flex items-center gap-x-1" to="/">
                <img src={HomeIcon} width={20} height={20} alt="" />
                <h3 className="text-white">{t("home")}</h3>
                <img src={RightIcon} width={20} height={20} alt="" />
              </Link>
            </li>
            <li>
              <h3 className="text-white">{t("premium")}</h3>
            </li>
          </ul>

          <h1 className="mt-2 w-full max-w-[672px] text-white text-5xl font-rubik font-bold maxSm:text-4xl maxSm:max-w-[450px]">
            {t("join_premium")}
          </h1>
        </div>
      </div>
      <div className="bg-[#111C55]">
        <PremiumContact />
      </div>
      <DropTopBtn />
    </>
  );
}

export default Premium;
