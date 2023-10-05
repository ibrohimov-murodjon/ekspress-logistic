import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import logo from "../assets/logo.svg";
import callLogo from "../assets/call-logo.svg";
import emailLogo from "../assets/email.png";
import timeLogo from "../assets/time-logo.svg";

function Header() {
  return (
    <div className="bg-[#091242] pt-11 pb-7 max-desktop:pt-6">
      <div className="myContainer flex justify-between flex-wrap items-center desktop:justify-center">
        <Slide direction="left" duration={3000}>
          <Link to="/" className="pr-4">
            <img
              src={logo}
              alt="logo"
              className="w-[260px] h-[80px] inline-block"
            />
          </Link>
        </Slide>
        <Slide direction="right" duration={3000}>
          <div className="flex items-center justify-center flex-wrap gap-[39px] desktop:pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#111C55] w-16 h-16 rounded-full flex items-center justify-center">
                <img src={callLogo} className="w-7 h-7" alt="" />
              </div>
              <p className="w-[176px] text-white font-krub font-medium">
                Mon - Sat 9.00 - 20.00 Sunday Closed
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#111C55] w-16 h-16 rounded-full flex items-center justify-center">
                <img src={emailLogo} className="w-10 h-10" alt="" />
              </div>
              <a
                href="mailto:contact@logistics.com"
                className="w-[176px] text-white font-krub font-medium hover:underline underline-offset-2"
              >
                Email contact@logistics.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#111C55] w-16 h-16 rounded-full flex items-center justify-center">
                <img src={timeLogo} className="w-10 h-10" alt="" />
              </div>
              <a
                href="tel:(00) 112 365 489"
                className="w-[176px] text-white font-krub font-medium hover:underline underline-offset-2"
              >
                Call Us <br /> (00) 112 365 489
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Header;
