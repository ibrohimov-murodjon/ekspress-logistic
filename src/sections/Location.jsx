import { Slide, Fade } from "react-awesome-reveal";
import { SubText } from "../components";
import locationImg from "../assets/location.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Location() {
  const [location, setLocation] = useState("tashkent");
  const { t } = useTranslation();
  const Locations = {
    tashkent: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6001.123222981831!2d69.331237!3d41.231323!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEzJzUyLjgiTiA2OcKwMTknNTIuNSJF!5e0!3m2!1sen!2s!4v1697884259149!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    namangan: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.941837624795!2d71.78528987521445!3d40.38798165738985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1696436152648!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  };

  return (
    <div className="pt-[120px] pb-[78px] bg-[#111C55]">
      <div className="myContainer">
        <Slide
          direction="down"
          duration={2000}
          className="flex flex-col items-center justify-center"
        >
          <SubText title="our_location" bgclr="#F3F3F3" />
          <h1 className="text-4xl text-white font-rubik font-bold">
            {t("we_are_here")}
          </h1>
        </Slide>
        <Fade duration={3000}>
          <div className="mb-4 border-b border-gray-200 mt-10">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
              <li className="mr-2" role="presentation">
                <button
                  className={`flex items-center gap-5 p-4 ${
                    location !== "namangan"
                      ? "text-gray-400"
                      : "border-b-2 border-blue-600 text-white bg-white bg-opacity-30 backdrop-filter backdrop-blur-md"
                  } rounded-t-lg font-rubik`}
                  onClick={() => setLocation("namangan")}
                >
                  <img src={locationImg} className="w-[25px]" alt="" />
                  {t("namangan")}
                </button>
              </li>
              <li className="mr-2 ">
                <button
                  className={`flex items-center gap-5 p-4 ${
                    location !== "tashkent"
                      ? "text-gray-400"
                      : "border-b-2 border-blue-600 text-white bg-white bg-opacity-30 backdrop-filter backdrop-blur-md"
                  } rounded-t-lg  font-rubik`}
                  onClick={() => setLocation("tashkent")}
                >
                  <img src={locationImg} className="w-[25px]" alt="" />
                  {t("tashkent")}
                </button>
              </li>
            </ul>
          </div>
          <div>{Locations[location]}</div>
        </Fade>
      </div>
    </div>
  );
}

export default Location;
