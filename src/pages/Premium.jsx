import React from "react";
import { SubText, PremiumContact } from "../components";

function Premium() {
  return (
    <>
    <div className="premiumBac select-none">
      <div className="myContainer pt-[162px] pb-[87px] ">
    <SubText title="Premium" bgclr="#03244b" white />
    <h1 className="mt-2 w-full max-w-[672px] text-white text-[60px] font-normal font-bold leading-normal">
    Join to our premium class client list
    </h1>
    </div>
    </div>
    <div className="bg-[#091242]">
    <PremiumContact/>
    </div>
    </>
  )
}

export default Premium;
