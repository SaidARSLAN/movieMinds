import React from 'react'
import { navLinks } from '../contents'
const Hero = () => {

    const handleOpen = () => {
        const overLay = document.getElementById("overlay");
        overLay.classList.remove("w-0");
        overLay.classList.add("w-full");
    }

  return (
    <div className='w-full text-white mt-8'>
       {/* <div className='relative hidden flex-col -mt-6 lg:hidden' id='mobile-links'>
                {navLinks.map((link,index) => {
                    return (<a href={link.id} key={index} className='text-mindWhite hover:bg-mindWhite hover:text-mindBlack duration-200 py-1 font-montserrat'>{link.name}</a>) 
                })}
               <a className='text-mindWhite lg:hover:text-mindOrange duration-200 whitespace-nowrap cursor-pointer' onClick={handleOpen}>Categories</a> 
            </div> */}
        <div className='space-y-6'>
            <h3 className='text-mindOrange text-sm font-montserrat text-center my-2'>Experience  through AI-powered movie recommendation</h3>
            <h1 className='text-mindWhite text-4xl text-center font-montserrat my-2 pl-2'>Unlock the world of <span className='text-mindOrange'>movies</span> intelligently</h1>
            <h5 className='text-mindWhite text-xs font-montserrat text-center my-2 pl-2'>Welcome to our AI-driven movie platform, where cutting-edge technology curates personalized film recommendations just for you. Start exploring today!</h5>
            <a href='#films'><button className='hidden'>Watch</button></a>
        </div>
    </div>
 )
} 

export default Hero