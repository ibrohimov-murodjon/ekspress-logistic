//react-reveal for animtion
import { Slide, Fade } from "react-awesome-reveal";
//components
import { SubText, Button } from "../components";
//images
import video from "../assets/bg-video.mp4";
//react-router-dom
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      id="hero"
      className="relative flex flex-col 
        justify-center h-[840px] overflow-hidden mt-[-70px] mobileLg:mt-[-110px]"
    >
      <div className="absolute w-full h-[840px] z-[10] bg-bgVideo"></div>
      <video
        src={video}
        autoPlay={true}
        loop
        muted
        className="absolute z-0 w-auto 
            min-w-full min-h-full max-w-none "
      ></video>
      <div className="z-[99] myContainer">
        <Slide direction="left" duration={3500}>
          <SubText title="Trans Ekspress Logistics" bgclr="#043265" white />
          <h1 className="text-white text-5xl max-w-2xl font-bold font-rubik maxSm:text-4xl">
            Together Faster
          </h1>
          <p className="text-white max-w-lg font-regular font-rubik text-[16px] pt-4 ">
            We are ready to prove that we can deliver your cargo to any
            destiantion safely and quickly
          </p>
        </Slide>
        <Fade duration={3500}>
          <Link to="premium">
            <Button title="Premium Class" path={"/premium"} />
          </Link>
        </Fade>
      </div>
      <a href="#about">
        <svg className="arrows z-[99]">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </a>
    </div>
  );
}

export default Hero;
