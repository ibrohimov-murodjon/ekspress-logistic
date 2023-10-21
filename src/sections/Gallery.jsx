//images
import {
  galery1,
  galery2,
  galery3,
  galery4,
  galery5,
  galery6,
} from "../assets";
import { SubText } from "../components";
import { useTranslation } from "react-i18next";
//components

//file-dataBase
const countriesData = [
  { id: 1, name: "George", img: galery1 },
  { id: 2, name: "Kazakhstan", img: galery2 },
  { id: 3, name: "Kyrgyzstan", img: galery3 },
  { id: 4, name: "Tajikistan", img: galery4 },
  { id: 5, name: "Turkey", img: galery5 },
  { id: 6, name: "Germany", img: galery6 },
];
function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#091242]  h-[80vh]  relative desktopSm:h-[800px] maxSm:h-[700px] ">
      <div className="myContainer flex items-center justify-between  w-full desktopSm:flex-col   desktopSm:gap-y-8 mobileLg:h-[900px] mobileLg:gap-y-8">
        <div className="pt-8   max-w-[460px]  desktopSm:flex desktopSm:items-center desktopSm:justify-center desktopSm:flex-col ">
          <SubText title="gallery" bgclr="#F3F3F3" />
          <h1 className=" text-4xl text-white font-rubik font-bold maxSm:text-3xl">
            {t("our_gallery")}
          </h1>
          <p className="max-w-[451px] text-white font-krub text-[16px] font-medium leading-8 desktop:text-base desktop:max-w-[531px] desktopSm:text-center desktopSm:max-w-[100%] desktopSm:pt-8 desktopSm:text-[18px] maxSm:text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            illum, est tempore aspernatur ratione libero ipsa impedit. Molestiae
            cumque eveniet, pariatur dolore nihil officia accusantium quasi,
            nemo earum esse similique.
          </p>
        </div>
        <div className="  flex h-[100%] items-center  w-full desktopSm:justify-center ">
          <div className="rotate-90 w-full max-w-fit desktopSm:flex">
            <marquee
              className="h-[80vh] desktopSm:flex desktopSm:items-center desktopSm:justify-center "
              behavior="scroll"
              direction="right"
              scrollamount="5"
            >
              {countriesData.map((item) => (
                  <img
                    src={item.img}
                    className="w-[400px] h-[350px] rotate-[-90deg]  inline-block desktopMd:w-[300px] desktopMd:h-[250px] mobileMax:w-[250px] mobileMax:h-[200px] mobileLg:w-[500px] mobileLg:h-[300px]"
                  />
              ))}
            </marquee>
          </div>
          <div className="rotate-90 w-full max-w-fit mobileLg:hidden">
            <marquee
              className="h-[80vh] desktopSm:flex desktopSm:items-center desktopSm:justify-center"
              behavior="scroll"
              direction="left"
              scrollamount="5"
            >
              {countriesData.map((item) => (
                  <img
                    src={item.img}
                    className="w-[400px] h-[350px] object-cover rotate-[-90deg]   inline-block desktopMd:w-[300px] desktopMd:h-[250px] mobileMax:w-[250px] mobileMax:h-[200px]"
                  />
              ))}
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
