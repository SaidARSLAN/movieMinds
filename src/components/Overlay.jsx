import React from 'react'
import { navLinks, overLay } from '../contents'
overLay
const Overlay = () => {

    const handleClose = () => {
        const overLay = document.getElementById("overlay");
        overLay.classList.remove("w-full");
        overLay.classList.add("w-0");
    }

  return (
    <div className='text-mindWhite h-full w-0 z-[100] fixed left-0 top-0 bg-black opacity-90 duration-500 overflow-x-hidden' id='overlay'>
        <div className='relative flex items-center justify-center top-[120px] text-center flex-col gap-20 text-4xl lg:text-5xl w-full'>
                <form className='flex items-center gap-4'>
                    <input type="text" placeholder='search movies...' className='px-4 text-mindBlack py-[10px] text-lg lg:text-4xl font-poppins'/>
                    <button className='hover:text-mindOrange font-montserrat font-bold text-center text-4xl p-2 duration-300'>Search</button>
                </form>
                {overLay.map((link,index) => {
                    return (<a href={link.id} key={index} className='hover:text-mindOrange duration-300 font-montserrat tracking-wider cursor-pointer'>{link.name}</a>) 
                })}
        </div>
        <div className='absolute top-[20px] right-[45px] font-montserrat text-6xl lg:text-7xl cursor-pointer hover:text-mindOrange duration-300' onClick={handleClose}>
        &times;
        </div>
    </div>
  )
}

export default Overlay