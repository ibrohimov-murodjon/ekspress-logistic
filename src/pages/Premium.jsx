import React from "react";
import { SubText, PremiumContact } from "../components";
import {useTranslation} from 'react-i18next'

function Premium() {
  const {t} = useTranslation()
  return (
    <>
      <div className="premiumBac select-none w-full mt-[-80px] pt-[162px]">
        <div className="myContainer pb-[87px]">
          <SubText title="premium" bgclr="#03244b" white />
          <h1 className="mt-2 w-full max-w-[672px] text-white text-5xl font-rubik font-bold maxSm:text-4xl maxSm:max-w-[450px]">
            {t("join_premium")}
          </h1>
        </div>
      </div>
      <div className="bg-[#091242]">
        <PremiumContact />
      </div>
    </>
  );
}

export default Premium;
