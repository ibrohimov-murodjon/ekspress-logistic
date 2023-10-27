//react-reveral for animation
import { Slide, Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
//images
import {
  BelarusFlag,
  FranceFlag,
  GeorgeFlag,
  GermayFlag,
  GreeceFlag,
  ItalyFlag,
  KazakhstanFlag,
  LatviaFlag,
  PartnersTextImg,
  PortugalFlag,
  SpainFlag,
  TurkeyFlag,
  UzbekistanFlag,
  EuropeanUnion,
  RussiaFlag,
} from "../assets";
//components
import Button from "./Button";
import SubText from "./SubText";

//file-dataBase
const countriesData = [
  { id: 1, name: "russia", img: RussiaFlag },
  { id: 2, name: "kazakhstan", img: KazakhstanFlag },
  { id: 3, name: "uzbekistan", img: UzbekistanFlag },
  { id: 4, name: "george", img: GeorgeFlag },
  { id: 5, name: "belarus", img: BelarusFlag },
  { id: 6, name: "latvia", img: LatviaFlag },
  { id: 7, name: "turkey", img: TurkeyFlag },
  { id: 8, name: "spain", img: SpainFlag },
  { id: 9, name: "france", img: FranceFlag },
  { id: 10, name: "greece", img: GreeceFlag },
  { id: 11, name: "portugal", img: PortugalFlag },
  { id: 12, name: "europeanUnion", img: EuropeanUnion },
  { id: 13, name: "germany", img: GermayFlag },
  { id: 14, name: "italy", img: ItalyFlag },
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
        <div className="marquee">
          <div className="marquee__group ">
            {countriesData.map((item) => (
              <div key={item.id}>
                <img
                  src={item.img}
                  className="w-20 h-20 inline-block mr-5 object-cover maxSm:mr-0"
                />
                <span className="w-fit mr-[120px] maxSm:mr-[80px]">
                  {t(item.name)}
                </span>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="marquee__group">
            {countriesData.map((item) => (
              <div key={item.id}>
                <img
                  key={item.id}
                  src={item.img}
                  className="w-20 h-20 inline-block object-cover mr-5 maxSm:mr-0"
                />
                <span className="w-fit mr-[120px] maxSm:mr-[80px]">
                  {t(item.name)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesSlider;
