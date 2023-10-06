// import {  TextInput } from 'flowbite-react';

const Input = ({type, placeholder}) => {
  return (
    <div  className="w-[365px] mobileMd:flex mobileMd:flex-col mobileMd:items-center" >
    <input
    className='w-full max-w-[400px] placeholder:pl-3 placeholder:text-[#bb9753] py-3 border-[2px] rounded border-[#bb9753] mobileMd:w-[300px] mobileMd:py-2 mobileSm:max-w-[250px]'
      placeholder={placeholder}
      type={type}
      required
    />
  </div>
  )
}

export default Input