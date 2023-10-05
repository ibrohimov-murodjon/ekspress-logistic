import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Slide } from "react-awesome-reveal";
import { SubText } from "../components";
import arrowLeft from "../assets/arrow-left.png";
import { Card } from "flowbite-react";

const data = [
  {
    id: 1,
    title: "Reliability",
    desc: "Warranty for inventory to be delivered to customers' on-time.               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate illo temporibus atque delectus quo. Architecto nam id repellendus eos.",
  },
  {
    id: 2,
    title: "Affordable Prices",
    desc: "We offer the first cheap and affordable prices in the market               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate illo temporibus atque delectus quo. Architecto nam id repellendus eos.",
  },
  {
    id: 3,
    title: "Experts’ help",
    desc: "Our experts are always ready to support you and give you the necessary advice Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate illo temporibus atque delectus quo. Architecto nam id repellendus eos.",
  },
  {
    id: 4,
    title: "Transportation",
    desc: "We plan and support the distribution of goods to their final destination. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate illo temporibus atque delectus quo. Architecto nam id repellendus eos.",
  },
  {
    id: 5,
    title: "Responsible Drivers",
    desc: "We provide all trustworthy, educated, and expert drivers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate illo temporibus atque delectus quo. Architecto nam id repellendus eos.",
  },
];

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group absolute top-0 right-4 flex gap-4">
      <button
        className={`${
          currentSlide === 0 ? "disable opacity-[0.6] cursor-not-allowed" : ""
        } bg-[#ffd200] p-3`}
        onClick={() => previous()}
      >
        <img src={arrowLeft} alt="arrow left" className="w-[25px]" />
      </button>
      <button
        onClick={() => next()}
        className={`${
          currentSlide === data.length - 3
            ? "disable opacity-[0.6] cursor-not-allowed"
            : ""
        } bg-[#ffd200] p-3`}
      >
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
          <h1 className="text-4xl font-rubik font-bold text-white max-w-[300px]">
            Our Comperetive Advantages
          </h1>
        </Slide>
        <div className="relative mt-6 ">
          {/* <Slide direction="up" duration={2000}> */}
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
            infinite={false}
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
                <p className="font-normal text-white">{item.desc}</p>
              </Card>
            ))}
          </Carousel>
          {/* </Slide> */}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
