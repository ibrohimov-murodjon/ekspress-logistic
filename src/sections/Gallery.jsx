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
import { SubText } from "../components";
import { useTranslation } from "react-i18next";
//components

//file-dataBase
const countriesData = [
  { id: 1, img: galery1 },
  { id: 2, img: galery2 },
  { id: 3, img: galery3 },
  { id: 4, img: galery4 },
  { id: 5, img: galery5 },
  { id: 6, img: galery6 },
  { id: 7, img: galery7 },
  { id: 8, img: galery8 },
  { id: 9, img: galery9 },
  { id: 10, img: galery10 },
];
function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#091242] h-[80vh]  relative desktopMd:h-[60vh] desktopSm:h-[100vh]">
      <div className="myContainer flex justify-between w-full desktopSm:flex-col  ">
        <div className="pt-8  max-w-[460px]">
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
        <div className="  flex h-[100%]  w-full">
          <div className="rotate-90 w-full max-w-fit"></div>
          <div className="rotate-90 w-full max-w-fit">
            <marquee
              className="h-[80vh] desktopMd:h-[60vh]"
              behavior="scroll"
              direction="right"
              scrollamount="5"
            >
              {countriesData.map((item) => (
                <>
                  <img
                    key={item.id}
                    src={item.img}
                    className="w-[400px] h-[350px] rotate-[-90deg] object-cover inline-block desktopMd:w-[300px] desktopMd:h-[250px] "
                  />
                </>
              ))}
            </marquee>
          </div>
          <div className="rotate-90 w-full max-w-fit">
            <marquee
              className="h-[80vh] desktopMd:h-[60vh]"
              behavior="scroll"
              direction="left"
              scrollamount="5"
            >
              {countriesData.map((item) => (
                <>
                  <img
                    key={item.id}
                    src={item.img}
                    className="w-[400px] h-[350px] object-cover rotate-[-90deg] inline-block desktopMd:w-[300px] desktopMd:h-[250px]  "
                  />
                </>
              ))}
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
