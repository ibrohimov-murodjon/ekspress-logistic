//react
import { useState } from "react";
//react-router-dom
import { Link } from "react-router-dom";
//images
import { callLogoWhite, emailLogoWhite, timeLogoWhite } from "../assets";
import CloseBtn from "../assets/close-icon.svg";

//fileDataBase
const premiumData = [
  {
    id: 1,
    name: "Contact@logistics.com",
    img: emailLogoWhite,
    to: "mailto",
  },
  {
    id: 2,
    name: "(00) 112 365 489",
    img: callLogoWhite,
    to: "tel",
  },
  {
    id: 3,
    name: "Mon - Sat 9.00 - 20.00 Sunday Closed",
    img: timeLogoWhite,
    to: "",
  },
];

//function
const handleClick = (e)=>{
e.stopPropagation()
}

//component
function Button({ title }) {
  const [modalEl, setModalEl] = useState(false);
  return (
    <>
      <button
        onClick={() => setModalEl(true)}
        className="btn-grad  modalEl w-[250px] font-krub tracking-wide font-medium z-[10]"
      >
        {title}
      </button>
      <div
        className={`${
          modalEl ? "block " : "hidden"
        } modal  z-[10000] rounded-md pb-10 `}
      >
       <div onClick={() => setModalEl(false)} className="overlay">
       <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[800px] h-[484px] bg-[#111c55] rounded-md desktopMid:max-w-[700px] desktopMid:h-[400px] maxSm:max-w-[500px] mobileLg:max-w-[400px] mobileMd:max-w-[300px]" onClick={(e)=>handleClick(e)}>
       <div
          onClick={() => setModalEl(false)}
          className="absolute right-2 top-1"
        >
          <img src={CloseBtn} className="w-[40px] h-[40px] desktopMid:h-[30px] desktopMid:w-[30px] mobileLg:w-[20px] mobileLg:h-[20px]" />
        </div>
        <div className="flex items-center justify-center  flex-col pt-14 desktopMid:pt-4">
          <h1 className="w-full max-w-[512px] text-white font-rubik text-[35px] font-normal leading-normal text-center desktopMid:text-[20px] desktopMid:max-w-[400px] mobileLg:max-w-[300px] mobileLg:text-[16px]">
            Congratulations,you are now our Premium Class client{" "}
          </h1>
          <p className="mt-4 w-full max-w-[512px] text-white font-krub font-semibold leading-[24px] text-center desktopMid:mt-2 desktopMid:max-w-[400px] desktopMid:text-[13px] mobileLg:max-w-[300px] mobileLg:text-[10px] mobileLg:mt-0">
            Thanks so much !
          </p>
        </div>
        <ul className="flex items-center flex-wrap justify-center gap-x-[131px] mt-[20px] mb-5 desktopMid:mb-3 mobileLg:gap-y-[20px] mobileLg:gap-x-0 mobileMd:gap-y-[10px] mobileMd:mt-2">
          {premiumData.map((element) => {
            return (
              <div
                key={element.id}
                className="flex flex-col items-center justify-center gap-y-[11px] w-[158px] mobileLg:gap-y-[7px]"
              >
                <span className="w-[63px] h-[63px] rounded-full bg-[#273270] flex items-center justify-center desktopMid:w-[50px] desktopMid:h-[50px] mobileLg:h-[40px] mobileLg:w-[40px]">
                  <img className="w-[35px] h-[35px] desktopMid:w-[30px] desktopMid:h-[30px] mobileLg:w-[20px] mobileLg:h-[20px]" src={element.img} />
                </span>
                <a
                  href={`${element.to}:${element.name}`}
                  className="text-[14px] font-krub font-medium text-white text-center hover:underline hover:underline-offset-4 desktopMid:text-[12px]"
                >
                  {element.name}
                </a>
              </div>
            );
          })}
        </ul>
        <div className="flex items-center justify-center">
        <Link className="btn-grad  w-full max-w-[200px] font-krub tracking-widest font-medium desktopMid:max-w-[150px]  desktopMid:font-normal desktopMid:h-10 mobileMd:mt-0 mobileMd:max-w-[120px] mobileMd:h-8" to="/">
          <p className="w-full text-[16px] max-w-[200px] desktopMid:max-w-[150px] desktopMid:text-[12px] ">Home page</p>
        </Link>
        </div>
       </div>
       </div>
      </div>
    </>
  );
}

export default Button;
