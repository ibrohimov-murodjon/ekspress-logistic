import { useState } from 'react';
//flovbite
import {  Modal } from 'flowbite-react';
//component
import { SubText } from "../components";
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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="  w-full h-fit pt-[40px] bg-[#091242]">
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
      <div className="bg-slate-200 h-[441px]  w-full max-w-[337px] group " key={item.id}>
      <div className='absolute z-[99] top-[50%] left-[50%] translate-x-[-70%] translate-y-[-50%]'>
      <div className='bg-inherit hover:bg-inherit  hidden group-hover:block cursor-pointer' onClick={() => {
        props.setOpenModal('dismissible')
        setModalImg({
          id: item.id,
          img:item.img
        })
      }
    
    } >
        <img src={searchLogo}  />
      </div>
        <Modal className='z-[100]  '  show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header className='absolute right-0 border-b-0  '></Modal.Header>
          <Modal.Body className='mx-auto w-full max-w-[400px]' >
            <img src={modalImg.img} className="h-[500px]  border-2 object-cover p-0 w-full max-w-[400px]" />
          </Modal.Body>
        </Modal>
      </div>
    <img src={item.img} alt="certificated img" className="transition-opacity w-full group-hover:blur-sm group-hover:block"  />
    </div>
    )
  })}
</Carousel>;
      </div>
    </div>
  )
}

export default Certificates