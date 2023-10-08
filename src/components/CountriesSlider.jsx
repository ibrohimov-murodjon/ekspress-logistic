import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
//images
import {
  GeorgeFlag,
  GermayFlag,
  KazakhstanFlag,
  KyrgyzstanFlag,
  PartnersTextImg,
  TajikistanFlag,
  TurkeyFlag,
} from "../assets";
import Button from "./Button";
import SubText from "./SubText";

const countriesData = [
  { id: 1, name: "George", img: GeorgeFlag },
  { id: 2, name: "Kazakhstan", img: KazakhstanFlag },
  { id: 3, name: "Kyrgyzstan", img: KyrgyzstanFlag },
  { id: 4, name: "Tajikistan", img: TajikistanFlag },
  { id: 5, name: "Turkey", img: TurkeyFlag },
  { id: 6, name: "Germany", img: GermayFlag },
  { id: 7, name: "Kyrgyzstan", img: KyrgyzstanFlag },
  { id: 8, name: "Turkey", img: TurkeyFlag },
  { id: 9, name: "Kyrgyzstan", img: KyrgyzstanFlag },
  { id: 10, name: "Germany", img: GermayFlag },
];

const CountriesSlider = () => {
  return (
    <div className="h-[400px] countries relative flex flex-col items-center">
      <div className="absolute w-full h-[400px] z-[0] bg-bgVideo"></div>
      <Slide direction="down">
        <div className="pt-[30px] z-[10]">
          <SubText title="Our Partners" bgclr="#f3f3f3" />
        </div>
        <div className="myContainer z-[10] w-full items-center flex font-medium text-[35px] text-white leading-[47px] font-rubik maxSm:text-[24px] maxSm:justify-center">
          <span className="mobileLg:hidden">M</span>
          <img src={PartnersTextImg} className="mobileLg:hidden" />
          <span className="mobileLg:hidden">
            st of our trusted customers are from
          </span>
          <span className="hidden mobileLg:flex max-w-[450px] text-center">
            Most of our trusted customers are from
          </span>
        </div>
      </Slide>
      <Zoom>
        <a href="#contact">
          <Button title="Be Our Partner" path={"/"} />
        </a>
      </Zoom>
      <div class="ticker-container  absolute bottom-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md backdrop-opacity-10">
        <div class="ticker-tape">
          <div class="slide-track gap-x-14 ">
            {countriesData.map((item) => {
              return (
                <div class="slide" key={item.id}>
                  <li className="flex items-center gap-x-5 ">
                    <img src={item.img} className="w-20 h-20" />
                    <span className="w-fit text-white font-bold font-rubik leading-[35.5px] text-[40px]">
                      {item.name}
                    </span>
                  </li>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesSlider;
