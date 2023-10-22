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
import { useState, useEffect } from "react";
//components

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
  // const marqueeHeight = 540; // Adjust the marquee height as needed
  // const itemHeight = 100; // Adjust the image height as needed

  // // Set the speed and interval for marquee
  // const scrollSpeed = 2; // Adjust the speed as needed
  // const scrollInterval = 30; // Adjust the interval as needed

  // const [top, setTop] = useState(0);

  // useEffect(() => {
  //   const marqueeInterval = setInterval(() => {
  //     setTop((prevTop) => (prevTop - scrollSpeed) % itemHeight);
  //   }, scrollInterval);

  //   return () => {
  //     clearInterval(marqueeInterval);
  //   };
  // }, []);
  // const totalHeight = countriesData.length * itemHeight;
  return (
    <div className="bg-[#091242]   relative h-[400px] tabletLgMd:h-[600px]">
      <div className="myContainer flex items-center gap-x-[350px] w-full tabletLgMd:flex-col tabletLgMd:justify-center tabletLgMd:items-center  desktopSm:gap-y-8 ">
        <div className="pt-[60px] tabletLgMd:flex tabletLgMd:flex-col tabletLgMd:items-center tabletLgMd:justify-center max-w-[460px]">
          <SubText title="gallery" bgclr="#F3F3F3" />
          <h1 className="text-4xl text-white font-rubik font-bold maxSm:text-3xl">
            {t("our_gallery")}
          </h1>
        </div>
        {/* <div
          className="vertical-marquee-container"
          style={{ height: marqueeHeight }}
        >
          <div
            className="vertical-marquee"
            style={{
              position: "absolute",
              top: top,
              height: totalHeight, // Set the total height
              transition: `top ${scrollInterval / 1000}s linear`,
            }}
          >
            {countriesData.map((item, index) => (
              <div
                key={item.id}
                style={{
                  height: itemHeight,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.img}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100px", // Adjust image width as needed
                    height: "100px", // Adjust image height as needed
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10px", color: "white" }}>
                  This is some text about image {index + 1}.
                </p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="vertical-slider">
          {countriesData.map((item) => (
            <span style={{ "--i": item.id + 1 }}>
              <img src={item.img} alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

{
  /* <div className="flex h-[480px] overflow-hidden relative w-full desktopSm:justify-center">

          <div className="rotate-90 w-full desktopSm:flex">
            <marquee
              className="h-[80vh] desktopLg:flex desktopLg:items-center desktopLg:justify-center"
              behavior="scroll"
              direction="right"
              scrollamount="5"
            >
              {countriesData.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  className="w-[400px] h-[350px] rotate-[-90deg] object-cover inline-block desktopMd:w-[300px] desktopMd:h-[250px] mobileMax:w-[250px] mobileMax:h-[200px] mobileLg:w-[500px] mobileLg:h-[300px]"
                />
              ))}
            </marquee>
          </div>
          <div className="rotate-90 w-full max-w-fit mobileLg:hidden">
            <marquee
              className="h-[80vh] desktopLg:flex desktopLg:items-center desktopLg:justify-center"
              behavior="scroll"
              direction="left"
              scrollamount="5"
            >
              {countriesData.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  className="w-[400px] h-[350px] object-cover rotate-[-90deg]   inline-block desktopMd:w-[300px] desktopMd:h-[250px] mobileMax:w-[250px] mobileMax:h-[200px]"
                />
              ))}
            </marquee>
          </div>
        </div> */
}
