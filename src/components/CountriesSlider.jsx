//react-reveral for animation
import { Slide, Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
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
//components
import Button from "./Button";
import SubText from "./SubText";

//file-dataBase
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
  const { t } = useTranslation();
  return (
    <div className="h-[400px] countries relative flex flex-col items-center">
      <div className="absolute w-full h-[400px] z-[0] bg-bgVideo"></div>
      <Slide direction="down">
        <div className="pt-[30px] z-[10]">
          <SubText title="our_partners" bgclr="#f3f3f3" />
        </div>
        <div className="myContainer z-[10] w-full items-center flex font-medium text-[35px] text-white leading-[47px] font-rubik maxSm:text-[24px] maxSm:justify-center">
          <span className="mobileLg:hidden">{t("m_char")}</span>
          <img src={PartnersTextImg} className="mobileLg:hidden" />
          <span className="mobileLg:hidden">
            {t("our_partners_desc_short")}
          </span>
          <span className="hidden mobileLg:flex max-w-[450px] text-center">
            {t("our_partners_desc")}
          </span>
        </div>
      </Slide>
      <Zoom>
        <a href="#contact">
          <Button title="be_partner" path={"/"} />
        </a>
      </Zoom>
      <div className="flex items-center w-full absolute bottom-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md backdrop-opacity-10 text-white font-bold font-rubik  text-[40px] maxSm:text-[30px]">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          {countriesData.map((item) => (
            <>
              <img
                src={item.img}
                className="w-20 h-20 inline-block mr-5 maxSm:w-14"
              />
              <span className="w-fit mr-[120px] ">{item.name}</span>
            </>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default CountriesSlider;
