import React from 'react'
import { navLinks } from '../contents'

const Nav = () => {
  return (
    <header className='w-full bg-mindBlack text-mindWhite h-16 lg:h-24'>
        <nav className='flex justify-between w-full h-full items-center px-4 lg:space-x-44'>
            <div className='text-xl lg:text-4xl cursor-pointer duration-200 font-montserrat  text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-mindOrange to-mindWhite font-bold'>
                MovieMinds
            </div>
            <div className='hidden items-center lg:flex lg:flex-1 lg:gap-8 lg:text-lg font-montserrat'>
                {navLinks.map((link) => {
                    return (<a href="" className='text-mindWhite lg:hover:text-mindOrange duration-200 whitespace-nowrap'>{link}</a>) 
                })}
            </div>
            <div className='flex flex-col space-y-[8px] cursor-pointer group lg:hidden'>
                <div className='w-[30px] h-[2.4px] bg-mindWhite group-hover:bg-mindOrange duration-200'></div>
                <div className='w-[30px] h-[2.4px] bg-mindWhite group-hover:bg-mindOrange duration-200'></div>
                <div className='w-[30px] h-[2.4px] bg-mindWhite group-hover:bg-mindOrange duration-200'></div>
            </div>
        </nav>
    </header>
  )
}

export default Nav