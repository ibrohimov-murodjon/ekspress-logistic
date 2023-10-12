import React from 'react'
import { useState } from 'react'
import { callLogoWhite, emailLogoWhite, timeLogoWhite } from "../assets";


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
const Modal = ( {children, img} ) => {
    const [modalEl, setModalEl] = useState(false)
        function modalCloseBtn(element){
            window.document.addEventListener('click', function(element){
                element.target.classList.forEach((i) => {
                    if( i === 'modalEl' ){
                        setModalEl(true)
                        
                    }else{
                        setModalEl(false)
                    }
                })
            })
        }
        modalCloseBtn()


    const ModalClickBtn = () => {
        setModalEl(true)
    }
  return (
    <div>
        <button className='bg-slate-500 modalEl' onClick={() => ModalClickBtn()}>
            <div className=' z-10'>
                {children}
            </div>
        </button>
        <div   className={`${modalEl ? 'block modalEl ' : 'hidden'} fixed left-0 top-0  w-full max-w-[600px] z-[99]  ` } >
        <ul className="flex items-center flex-wrap justify-center gap-x-[131px] mt-[40px] mb-3 mobileLg:gap-y-[40px]">
        {premiumData.map((element) => {
          return (
            <div
              key={element.id}
              className="flex flex-col items-center justify-center gap-y-[11px] w-[158px]"
            >
              <span className="w-[63px] h-[63px] rounded-full bg-[#273270] flex items-center justify-center">
                <img className="w-[35px] h-[35px]" src={element.img} />
              </span>
              <a
                href={`${element.to}:${element.name}`}
                className="text-[14px] font-krub font-medium text-white text-center hover:underline hover:underline-offset-4"
              >
                {element.name}
              </a>
            </div>
          );
        })}
      </ul> 
        </div>
    </div>
  )
}

export default Modal