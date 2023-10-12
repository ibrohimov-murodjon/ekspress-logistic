import React from "react";
import { Link } from "react-router-dom";
import { SubText, PremiumContact } from '../components'
import HomeIcon from '../assets/home-icon.svg'
import RightIcon from '../assets/right-icon.svg'

function Premium() {
  return (
    <>
      <div className="premiumBac select-none w-full mt-[-80px] pt-[162px]">
        <div className="myContainer pb-[87px]">
          <ul className="flex gap-x-3 mb-8">
          <li>
            <Link className="flex items-center gap-x-1" to="/">
            <img src={HomeIcon} width={20} height={20} alt="" />
            <h3 className="text-white">Home</h3>
            <img src={RightIcon} width={20} height={20} alt="" />
            </Link>
          </li>
          <li>
            <h3 className="text-white">Premium</h3>
          </li>
          </ul>
          <SubText title="Premium" bgclr="#03244b" white/>
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