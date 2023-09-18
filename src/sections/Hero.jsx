import React from 'react'
import { navLinks } from '../contents'
const Hero = () => {

    const handleOpen = () => {
        const overLay = document.getElementById("overlay");
        overLay.classList.remove("w-0");
        overLay.classList.add("w-full");
    }

  return (
    <div className='flex flex-col text-mindWhite lg:w-full lg:items-center lg:justify-start h-screen mt-10 lg:mt-12 px-4 relatives'>
       <div className='relative hidden flex-col -mt-6 lg:hidden' id='mobile-links'>
                {navLinks.map((link,index) => {
                    return (<a href={link.id} key={index} className='text-mindWhite hover:bg-mindWhite hover:text-mindBlack duration-200 py-1 font-montserrat'>{link.name}</a>) 
                })}
               <a className='text-mindWhite lg:hover:text-mindOrange duration-200 whitespace-nowrap cursor-pointer' onClick={handleOpen}>Categories</a> 
            </div>
        <div className='flex flex-col font-poppins items-start justify-start lg:items-center lg:justify-center lg:w-4/5  md:space-y-8 gap-6 lg:gap-0 mt-4'>
            <h3 className='text-xs mt-1 lg:mt-0 text-mindOrange font-poppins lg:text-2xl md:text-lg'>Experience  through AI-powered movie recommendation</h3>
            <h1 className='text-5xl lg:mt-0 mt-4 text-black dark:text-mindWhite font-poppins lg:text-8xl md:text-7xl lg:text-center'>Unlock the world of <span className='text-mindOrange'>movies</span> intelligently</h1>
            <h5 className='text-xs mt-4  lg:mt-0 w-[400px] lg:text-lg text-black dark:text-gray-400 font-poppins lg:px-24 lg:text-center lg:w-full md:mx-0 md:text-sm md:w-full'>Welcome to our AI-driven movie platform, where cutting-edge technology curates personalized film recommendations just for you. Start exploring today!</h5>
            <a href='#films'><button className='mt-8 lg:mt-0 bg-mindGradient text-mindWhite dark:bg-mindWhite dark:text-mindBlack px-8 py-3 hover:bg-mindOrange hover:text-mindWhite duration-200 font-poppins font-bold tracking-wider'>Watch</button></a>
        </div>
    </div>
 )
} 

export default Hero