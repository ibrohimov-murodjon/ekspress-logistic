import { Carousel } from "flowbite-react";
import { SubText } from "../components";
import { Director } from "../assets";

function Advantages() {
  return (
    <div className="myContainer mt-[150px]">
      <SubText bgclr="#F3F3F3" title="Why us?" />
      <h1 className="text-4xl font-rubik font-bold text-[#1C1F35] max-w-[300px]">
        Our Comperetive Advantages
      </h1>
      <div className="h-96">
        <Carousel className="my-carousel">
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Advantages;
