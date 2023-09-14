import React from 'react'
import { footerLinks } from '../contents'


const Footer = () => {
  return (

    <div className="w-full h-60 flex flex-col items-center justify-center mt-12">
          <nav className='flex justify-center w-full h-full items-center px-4 lg:space-x-44 lg:justify-center lg:items-center '>
            <div className='text-2xl lg:text-4xl cursor-pointer duration-200 font-montserrat  text-transparent tracking-wider bg-gradient-to-r from-black to-gray-600 bg-clip-text dark:bg-gradient-to-r dark:from-mindOrange dark:to-mindWhite font-bold'>
                MovieMinds
            </div>
            <div className='hidden items-center lg:flex lg:flex-1 lg:gap-8 lg:text-lg font-montserrat'>
                {footerLinks.map((link,index) => {
                    return (<a key={index} className='text-black dark:text-mindWhite lg:hover:text-mindOrange duration-200 whitespace-nowrap cursor-pointer'>{link}</a>) 
                })}
            </div>
            </nav>
            <p className='text-black dark:text-mindWhite -mt-20 lg:w-full lg:ml-7'>© 2023 MovieMinds. All Rights Reserved.</p>
    </div>
  )
}

export default Footer