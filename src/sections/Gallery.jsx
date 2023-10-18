//images
import {
  galery1,
  galery2,
  galery3,
  galery4,
  galery5,
  galery6,
} from "../assets";
//components
import { SubText } from '../components';

//file-dataBase
const countriesData = [
  { id: 1, name: "George", img: galery1 },
  { id: 2, name: "Kazakhstan", img: galery2 },
  { id: 3, name: "Kyrgyzstan", img: galery3 },
  { id: 4, name: "Tajikistan", img: galery4 },
  { id: 5, name: "Turkey", img: galery5 },
  { id: 6, name: "Germany", img: galery6 },
];
function Gallery() {
  return (
    <div className='bg-[#091242] h-[80vh]  relative desktopSm:h-[100vh]' >
      <div className='myContainer flex justify-between w-full desktopSm:flex-col  '>
      <div className='pt-8  max-w-[460px]'>
        <SubText title="Gallery" bgclr="#F3F3F3"/>
      <h1 className=" text-4xl text-white font-rubik font-bold maxSm:text-3xl">My Galeries</h1>
      <p className="max-w-[451px] text-white font-krub text-[16px] font-medium leading-8 desktop:text-base desktop:max-w-[531px] desktopSm:text-center desktopSm:max-w-[100%] desktopSm:pt-8 desktopSm:text-[18px] maxSm:text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis illum, est tempore aspernatur ratione libero ipsa impedit. Molestiae cumque eveniet, pariatur dolore nihil officia accusantium quasi, nemo earum esse similique.</p>
      </div>
      <div className='  flex h-[100%]  w-full'>
      <div className='rotate-90 w-full max-w-fit'>
      </div>
        <div className='rotate-90 w-full max-w-fit'>
        <marquee className="h-[80vh]" behavior="scroll" direction="right" scrollamount="5">
          {countriesData.map((item) => (
            <>
              <img
                src={item.img}
                className="w-[400px] h-[350px] rotate-[-90deg]  inline-block desktopMd:w-[300px] desktopMd:h-[250px] "
              />
            </>
          ))}
        </marquee>
        </div>
        <div className='rotate-90 w-full max-w-fit'>
      <marquee className="h-[80vh]"  behavior="scroll" direction="left"  scrollamount="5">
          {countriesData.map((item) => (
            <>
              <img
                src={item.img}
                className="w-[400px] h-[350px] object-cover rotate-[-90deg]   inline-block desktopMd:w-[300px] desktopMd:h-[250px]  "
              />
              
            </>
          ))}
        </marquee>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Gallery