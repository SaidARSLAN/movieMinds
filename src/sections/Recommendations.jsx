import React from 'react'
import { batman, endgame, horror, thor } from '../contents'
const Recommendations = () => {
  return (
    <section id='recommendation' className='text-white flex flex-col text-center lg:items-start items-center mt-24'>
            <h3 className='mb-4 text-mindOrange text-2xl font-poppins lg:text-4xl'>COMING SOON</h3>
            <div className='flex flex-col lg:flex-row'> 
            <div className='flex flex-col'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-poppins my-4 lg:text-6xl lg:text-left'>Movie Recommendation <span className='text-mindOrange'>Engine</span></h1>
                <p className='text-xs px-2 py-2 font-montserrat lg:text-lg lg:text-left'>Find great movies easily with our Movie Finder. Get personalized suggestions for your next film night. Enjoy movie time!</p>
            </div>
                <form className='flex flex-col w-full items-center my-2 lg:items-start'>
                    <input type="text" className='w-3/5 px-4 py-2 text-mindBlack font-montserrat text-sm' placeholder='Tell me something about yourself...'/>
                    <button className='bg-mindOrange px-4 py-2 my-4 font-poppins'>Discover</button>
                </form>
            </div>
            <img src={thor} alt="" className='w-full mt-4 object-contain lg:w-[800px] lg:mt-0'/>
            </div>
    </section>
  )
}

export default Recommendations