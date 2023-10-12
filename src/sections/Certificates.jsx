import { useState } from 'react';
//flovbite
import {  Modal } from 'flowbite-react';
//component
import { ModalEl, SubText } from "../components";
// carusel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//images
import {Certificated, searchLogo, Director, emailLogoWhite} from '../assets/index'

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
  const [modalImg, setModalImg] = useState({
    id: 3,
    img: emailLogoWhite,
  })
  //flovbite-modal
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };
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
    <div className="  w-full h-fit pt-[40px] bg-[#091242]">
        {/* <div className="absolute w-full h-[560px] z-[10] bg-bgVideo"></div> */}
      <div className="myContainer">
        <SubText title="Certificates" bgclr="#787D95" className="" />
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
       responsive={responsive} className="pt-[50px] w-full ">
  {certificatedData.map((item) => {
    return(
      <div className="bg-slate-200 h-[441px]  w-full max-w-[337px] " key={item.id}>
    <img src={item.img} alt="certificated img" className="transition-opacity w-full "  />
    </div>
    )
  })}
</Carousel>;
      </div>
    </div>
  )
}

export default Certificates