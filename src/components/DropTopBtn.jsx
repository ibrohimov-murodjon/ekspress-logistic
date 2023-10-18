//img 
import DropTop from '../assets/drop-top-icon.svg';

const DropTopBtn = () => {
  return (
    // <a href="#hero">
    //     <img className='w-[80px] h-[80px]' src={DropTop} alt="drop top btn" />
    // </a>
    <a href='#hero' id='dropBtn' className="animate-bounce shadow: absolute top-8 right-0 inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mobileMd:right-1 mobileMd:bottom-10">
  <img className='w-[50px] h-[50px] mobileMax:w-[40px] mobileMax:h-[40px] mobileMd:w-[30px] mobileMd:h-[30px]' src={DropTop} alt="drop top btn" />
</a>
  )
}

export default DropTopBtn