import React from 'react'
import { callLogoWhite, emailLogoWhite, timeLogoWhite } from '../assets'
import {Input, Button} from '../components'

const premiumData = [
    {
        id:1,
        name:"Contact@logistics.com",
        img: emailLogoWhite
    },
    {
        id:2,
        name:" (00) 112 365 489",
        img: callLogoWhite
    },
    {
        id:3,
        name:"Mon - Sat 9.00 - 20.00 Sunday Closed",
        img: timeLogoWhite
    }
]
const PremiumContact = () => {
  return (
    <div className='myContainer flex items-center flex-col pt-[74px] pb-[100px]'>
        <h1 className='w-[532px] text-white text-[35px] font-rubik  font-semibold leading-normal mb-5'>Premium class clients will get:</h1>
        <ul>
            <li className='flex items-center gap-x-[3.5px]'>
                <span className='w-[6px] h-[6px] bg-[#FFB629] rounded-full'></span>
                <p className='font-medium leading-[24px] font-krub text-white'>Latest bonuses </p>
            </li>
            <li className='flex items-center gap-x-[3.5px]'>
                <span className='w-[6px] h-[6px] bg-[#FFB629] rounded-full'></span>
                <p className='font-medium leading-[24px] font-krub text-white'>Extra advices</p>
            </li>
            <li className='flex items-center gap-x-[3.5px]'>
                <span className='w-[6px] h-[6px] bg-[#FFB629] rounded-full'></span>
                <p className='font-medium leading-[24px] font-krub text-white'>Individual attention </p>
            </li>
            <li className='flex items-center gap-x-[3.5px]'>
                <span className='w-[6px] h-[6px] bg-[#FFB629] rounded-full'></span>
                <p className='font-medium leading-[24px] font-krub text-white'>Cheapest prices </p>
            </li>
        </ul>
        <ul className='flex items-center  gap-x-[131px] mt-[40px] mb-3'>
        {premiumData.map((element) => {
            return(
                <div key={element.id} className="flex flex-col items-center justify-center gap-y-[11px] w-[158px]">
                    <span className='w-[63px] h-[63px] rounded-full bg-[#273270] flex items-center justify-center'>
                    <img className='w-[35px] h-[35px]' src={element.img}  />
                    </span>
                    <h3 className='text-[14px] font-krub font-medium text-white text-center'>
                        {element.name}
                    </h3>
                </div>
            )
        })}
        </ul>
        <form className='flex items-center justify-center flex-col' >
        <div className="flex items-center gap-x-[28px]">
        <span>
        <Input  type='text' placeholder='Your name*'/> <br />
        <Input type='tel' placeholder='Company name*'/> <br />
        <Input type='tel' placeholder='Phone number*'/> <br />
        </span>
        <span>
        <Input  type='text' placeholder='Surname'/> <br />
        <Input type='tel' placeholder='Email*'/> <br />
        <Input type='tel' placeholder='City*'/> <br />
        </span>
        </div>
        <textarea className='w-full mb-7' cols="30" rows="7" placeholder='Your Message'></textarea>
        <Button  title='Submit Message'/>
        </form>
    </div>
  )
}

export default PremiumContact