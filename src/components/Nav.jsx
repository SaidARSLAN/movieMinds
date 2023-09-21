import React from 'react'
import { navLinks } from '../contents'

const Nav = () => {

    const handleHamburger = () => {
        const mobileLinks = document.getElementById("mobile-links");
        if (mobileLinks.classList.contains("flex")) {
            mobileLinks.classList.remove("flex");
            mobileLinks.classList.add("hidden")
        }
        else {
            mobileLinks.classList.remove("hidden");
            mobileLinks.classList.add("flex")
        }
      
    }

    const handleOpen = () => {
        const overLay = document.getElementById("overlay");
        overLay.classList.remove("w-0");
        overLay.classList.add("w-full");
    }


  return (
    <header className='w-full dark:text-mindWhite h-24 lg:h-24 z-10 px-4 lg:px-0 bg-black'>
        <nav className='flex justify-between w-full h-full items-center lg:space-x-44'>
            <div className='text-xl lg:text-4xl cursor-pointer duration-200 font-montserrat  text-transparent tracking-wider bg-gradient-to-r from-black to-gray-600 bg-clip-text dark:bg-gradient-to-r dark:from-mindOrange dark:to-mindWhite font-bold'>
                MovieMinds
            </div>
            <div className='hidden items-center lg:flex lg:gap-8 lg:text-lg font-montserrat'>
                {navLinks.map((link,index) => {
                    return (<a href={link.id} key={index} className='dark:text-mindWhite lg:hover:text-mindOrange duration-200 whitespace-nowrap'>{link.name}</a>) 
                })}
                <a className='dark:text-mindWhite lg:hover:text-mindOrange duration-200 whitespace-nowrap cursor-pointer' onClick={handleOpen}>Categories</a>
            </div>
            <div className='flex flex-col space-y-[8px] cursor-pointer group lg:hidden' onClick={handleHamburger}>
                <div className='w-[30px] h-[2.4px] bg-mindWhite group-hover:bg-mindOrange duration-200'></div>
                <div className='w-[30px] h-[2.4px] bg-mindWhite group-hover:bg-mindOrange duration-200'></div>
                <div className='w-[30px] h-[2.4px] bg-mindWhite group-hover:bg-mindOrange duration-200'></div>
            </div>
        </nav>
    </header>
  )
}

export default Nav