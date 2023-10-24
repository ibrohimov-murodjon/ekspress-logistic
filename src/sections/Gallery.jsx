import { useTranslation } from "react-i18next";
//images
import {
  galery1,
  galery2,
  galery3,
  galery4,
  galery5,
  galery6,
  galery7,
  galery8,
  galery9,
  galery10,
} from "../assets";
//components
import { SubText } from "../components";

//file-dataBase
const countriesData = [
  { id: 0, img: galery1 },
  { id: 1, img: galery2 },
  { id: 2, img: galery3 },
  { id: 3, img: galery4 },
  { id: 4, img: galery5 },
  { id: 5, img: galery6 },
  { id: 6, img: galery7 },
  { id: 7, img: galery8 },
  { id: 8, img: galery9 },
  { id: 9, img: galery10 },
];
function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#091242]   relative h-[400px] tabletLgMd:h-[600px]">
      <div className="myContainer flex items-center gap-x-[350px] w-full tabletLgMd:flex-col tabletLgMd:justify-center tabletLgMd:items-center  desktopSm:gap-y-8 ">
        <div className="pt-[60px] tabletLgMd:flex tabletLgMd:flex-col tabletLgMd:items-center tabletLgMd:justify-center max-w-[460px]">
          <SubText title="gallery" bgclr="#F3F3F3" />
          <h1 className="text-4xl text-white font-rubik font-bold maxSm:text-3xl">
            {t("our_gallery")}
          </h1>
        </div>
        <div className="vertical-slider">
          {countriesData.map((item) => (
            <span key={item.id} style={{ "--i": item.id + 1 }}>
              <img src={item.img} alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
