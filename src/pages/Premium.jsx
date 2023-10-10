import React from "react";
import { SubText, PremiumContact } from "../components";

function Premium() {
  return (
    <>
      <div className="premiumBac select-none w-full mt-[-80px] pt-[162px]">
        <div className="myContainer pb-[87px]">
          <SubText title="Premium" bgclr="#03244b" white />
          <h1 className="mt-2 w-full max-w-[672px] text-white text-5xl font-rubik font-bold maxSm:text-4xl maxSm:max-w-[450px]">
            Join to our premium class client list
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
