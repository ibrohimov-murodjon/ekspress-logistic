import React from 'react'

const ContactElement = ({img, title, text}) => {
  return (
    <div className='flex items-center gap-x-[14px] tabletMax:ml-[20%] mobileSm:ml-[10%]'>
          <span className='w-[63px] h-[63px] bg-[#ffd200] rounded-full flex items-center justify-center mobileMd:w-[50px] mobileMd:h-[50px]'>
            <img src={img} className="w-[35px] h-[35px] mobileMd:w-[30px] mobileMd:h-[30px]" />
          </span>
          <span>
            <h4 className='text-[14px] font-krub leading-[18.9px] font-medium text-white'>{title}</h4>
            <p className='text-[14px] font-krub leading-[18.9px] font-medium text-white'>{text}</p>
          </span>
        </div>
  )
}

export default ContactElement