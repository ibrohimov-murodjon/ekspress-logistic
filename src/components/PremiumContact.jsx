import React from "react";
import { callLogoWhite, emailLogoWhite, timeLogoWhite } from "../assets";
import { Input, Button } from "../components";

const premiumData = [
  {
    id: 1,
    name: "Contact@logistics.com",
    img: emailLogoWhite,
    to: "mailto",
  },
  {
    id: 2,
    name: "(00) 112 365 489",
    img: callLogoWhite,
    to: "tel",
  },
  {
    id: 3,
    name: "Mon - Sat 9.00 - 20.00 Sunday Closed",
    img: timeLogoWhite,
    to: "",
  },
];

const clientsGet = [
  {
    id: 1,
    text: "Latest bonuses",
  },
  {
    id: 2,
    text: "Extra advices",
  },
  {
    id: 3,
    text: "Individual attention",
  },
  {
    id: 4,
    text: "Cheapest prices",
  },
];

const PremiumContact = () => {
  return (
    <div className="myContainer flex items-center flex-col pt-[74px] pb-[100px]">
      <h1 className="max-w-[532px] w-full text-center text-white text-[35px] font-rubik  font-semibold leading-normal mb-5 maxSm:text-[25px]">
        Premium class clients will get:
      </h1>
      <ul>
        {clientsGet.map((item) => (
          <li className="flex items-center  gap-x-[6px]" key={item.id}>
            <span className="w-[6px] h-[6px] bg-[#FFB629] rounded-full"></span>
            <p className="font-medium leading-[24px] font-krub text-white">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
      {/* <ul className="flex items-center flex-wrap justify-center gap-x-[131px] mt-[40px] mb-3 mobileLg:gap-y-[40px]">
        {premiumData.map((element) => {
          return (
            <div
              key={element.id}
              className="flex flex-col items-center justify-center gap-y-[11px] w-[158px]"
            >
              <span className="w-[63px] h-[63px] rounded-full bg-[#273270] flex items-center justify-center">
                <img className="w-[35px] h-[35px]" src={element.img} />
              </span>
              <a
                href={`${element.to}:${element.name}`}
                className="text-[14px] font-krub font-medium text-white text-center hover:underline hover:underline-offset-4"
              >
                {element.name}
              </a>
            </div>
          );
        })}
      </ul> */}
      <form className="flex items-center justify-center flex-col mt-6">
        <div className="flex flex-wrap gap-6 justify-center items-center gap-x-[28px] tabletLg:flex-col tabletLg:gap-0">
          <Input type="text" placeholder="Your name*" premium required={true} />{" "}
          <br />
          <Input type="text" placeholder="Surname" premium /> <br />
          <Input
            type="tel"
            placeholder="Phone number*"
            premium
            required={true}
          />{" "}
          <br />
          <Input
            type="email"
            placeholder="Email*"
            premium
            required={true}
          />{" "}
          <br />
          <Input type="text" placeholder="Company name*" premium /> <br />
          <Input type="text" placeholder="City*" premium required={true} />{" "}
          <br />
        </div>
        <div className="w-full max-w-[778px]">
          <textarea
            id="input-warning"
            className="outline-none mt-8 bg-transparent text-[#fff] font-rubik font-regular w-full placeholder:pl-3 placeholder:text-[#fff] px-3 border-[2px] border-[#4E5683] tabletLg:mt-2 mobileLg:w-[350px] mobileMd:h-[100px] mobileSm:max-w-[250px] mobileMd:max-w-[300px]"
            cols="30"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <Button title="Submit Message" />
      </form>
    </div>
  );
};

export default PremiumContact;
