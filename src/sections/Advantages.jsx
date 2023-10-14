//react-multi-carousel for carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//react-reveal for animation
import { Slide, Fade } from "react-awesome-reveal";
//components
import { SubText } from "../components";
//images
import arrowLeft from "../assets/arrow-left.png";
//flowbite library
import { Card } from "flowbite-react";

//file-dataBase
const data = [
  {
    id: 1,
    title: "Reliability",
    desc: "Our warranty secures timely inventory arrival, providing peace of mind. We surpass expectations, ensuring your agreed-upon schedule is met. Our steadfast dedication ensures your satisfaction and business continuity.",
  },
  {
    id: 2,
    title: "Affordable Prices",
    desc: "Experience unmatched value with our budget-friendly prices. We redefine market affordability, ensuring quality without compromise. Your satisfaction meets unbeatable prices at our destination.",
  },
  {
    id: 3,
    title: "Expert Support",
    desc: "Always ready to assist you. Count on our round-the-clock experts for immediate assistance and invaluable advice. Your needs are our priority, ensuring you have constant support whenever required.",
  },
  {
    id: 4,
    title: "Transportation management",
    desc: "Our dedicated approach ensures seamless transport from origin to destination with strategic route optimization. Trust us for end-to-end support in navigating logistics for a successful distribution process.",
  },
  {
    id: 5,
    title: "Responsible Drivers",
    desc: "Rely on us for a team of trustworthy, educated, and expert drivers, ensuring responsible and secure transportation. Our dedicated workforce prioritizes safety, reliability, and professionalism in every journey.",
  },
];

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group absolute top-0 right-4 flex gap-4">
      <button className="bg-[#ffd200] p-3" onClick={() => previous()}>
        <img src={arrowLeft} alt="arrow left" className="w-[25px]" />
      </button>
      <button onClick={() => next()} className="bg-[#ffd200] p-3">
        <img
          src={arrowLeft}
          alt="arrow right"
          className="w-[25px] rotate-[180deg]"
        />
      </button>
    </div>
  );
};

function Advantages() {
  return (
    <div className="pt-[120px] pb-[78px] bg-[#091242]" id="advantages">
      <div className="myContainer">
        <Slide direction="left" duration={1500}>
          <SubText bgclr="#F3F3F3" title="Why us?" />
          <h1 className="text-4xl font-rubik font-bold text-white max-w-[300px] maxSm:text-3xl">
            Our Comperetive Advantages
          </h1>
        </Slide>
        <div className="relative mt-6 ">
          <Fade duration={3000}>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-padding-bottom"
              customButtonGroup={<ButtonGroup />}
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },

                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
                mobile: {
                  breakpoint: {
                    max: 700,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {data.map((item, index) => (
                <Card
                  key={index}
                  className="max-w-sm mr-2 border-amber-300 bg-[#091242] h-[300px] mt-[65px] mb-8 hover:shadow-md hover:shadow-amber-300 tabletLg:max-w-xs tabletMd:max-w-lg"
                >
                  <div className="flex text-xl gap-6 items-center  text-white">
                    <span className="font-rubik">0{item.id}</span>
                    <div className="w-[2px] h-[60px] bg-amber-300 rotate-[15deg]"></div>
                    <h5 className="text-2xl font-rubik tracking-wider text-white">
                      {item.title}
                    </h5>
                  </div>
                  <p className="font-normal font-rubik text-white">{item.desc}</p>
                </Card>
              ))}
            </Carousel>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
