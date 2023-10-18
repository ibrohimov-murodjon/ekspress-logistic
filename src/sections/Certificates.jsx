// carusel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
//component
import { SubText } from "../components";
//images
import {Certificated,  Director, emailLogoWhite} from '../assets/index'

const certificatedData = [
  {
    id: 1,
    img: Certificated,
  },
  {
    id: 2,
    img: Director,
  },
  {
    id: 3,
    img: emailLogoWhite,
  },
  {
    id: 4,
    img: Certificated,
  }
]
function Certificates() {
  const { t } = useTranslation();
  //carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 746 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 746, min: 0 },
      items: 1
    }
  };
  return (
    <div className="  w-full h-fit pt-[40px] bg-[#091242] pb-[120px]">
      {/* <div className="absolute w-full h-[560px] z-[10] bg-bgVideo"></div> */}
      <div className="myContainer">
        <Slide direction="left" duration={1500}>
          <SubText bgclr="#F3F3F3" title="certificates" />
          <h1 className="text-4xl font-rubik font-bold text-white max-w-[300px] maxSm:text-3xl">
            {t("our_certificates")}
          </h1>
        </Slide>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          responsive={responsive}
          className="pt-[50px] w-full "
        >
          {certificatedData.map((item) => {
            return (
              <div
                className="bg-slate-200 h-[441px]  w-full max-w-[337px] "
                key={item.id}
              >
                <img
                  src={item.img}
                  alt="certificated img"
                  className="transition-opacity w-full "
                />
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
    </div>
  );
}

export default Certificates