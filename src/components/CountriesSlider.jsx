import React from "react";
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
    <div className="h-[400px] countries relative pt-[30px] flex flex-col items-center">
      <SubText title="Our Partners" bgclr="#f3f3f3" />
      <div className="flex font-medium text-[35px] text-white leading-[47px] font-rubik">M <small> <img src={PartnersTextImg} /></small> st of our trusted customers are from</div>
      <Button title='Integratsiya'/>
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
