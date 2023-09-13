import React from 'react'
import { batman, endgame, horror, thor } from '../contents'
const Recommendations = () => {
  return (
    <section id='recommendation' className='mt-28 flex-col lg:flex-row lg:mt-32'>
            <h3 className='text-xl font-montserrat text-mindOrange tracking-wider lg:text-8xl text-center mb-8 lg:mb-20'>COMING SOON</h3>
            <div className='flex flex-col lg:flex-row'>
            <div className='flex-col'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-4xl font-montserrat text-mindWhite lg:text-6xl w-2/5'>Movie Recommendation <span className='text-mindOrange'>Engine</span></h1>
                <p className='text-sm font-poppins text-gray-400 lg:text-lg lg:w-full'>Find great movies easily with our Movie Finder. Get personalized suggestions for your next film night. Enjoy movie time!</p>
            </div>
            <div className='mt-8'>
                <form className='space-x-2'>
                    <input type="text" className='w-[280px] px-2 py-2 font-poppins border-none text-sm lg:w-[400px] lg:text-lg' placeholder='tell me something about yourself...'/>
                    <button className='bg-mindGray text-mindWhite hover:text-white hover:bg-mindOrange px-2 py-2 duration-200 text-sm text-center lg:text-lg'>Discover</button>
                </form>
            </div>
            </div>
            <img src={thor} alt="" className='w-full mt-20 object-contain lg:w-[800px] lg:mt-0'/>
            </div>
    </section>
  )
}

export default Recommendations