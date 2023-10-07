import React from 'react'
import { useState } from 'react'

const Modal = ({children, img}) => {
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
            <div className='bg-none hover:bg-none z-10  hidden group-hover:block cursor-pointer absolute  top-[50%] left-[56%] translate-x-[-70%] translate-y-[-50%]'>
                {children}
            </div>
        </button>
        <div   className={`${modalEl ? 'block modalEl ' : 'hidden'} fixed left-0 top-0  w-full max-w-[600px] z-[99]  ` } >
        <img src={img} className="h-[500px]   border-2 object-cover p-0 w-full max-w-[400px]" />
        </div>
    </div>
  )
}

export default Modal