import React from 'react'

const Recommendations = () => {
  return (
    <section id='recommendation' className='mt-28'>
            <div className='flex flex-col space-y-2'>
                <h3 className='text-sm font-montserrat text-mindOrange tracking-wider'>COMING SOON</h3>
                <h1 className='text-3xl font-montserrat text-mindWhite'>Movie Recommendation <span className='text-mindOrange'>Engine</span></h1>
                <p className='text-sm font-poppins text-gray-400'>Find great movies easily with our Movie Finder. Get personalized suggestions for your next film night. Enjoy movie time!</p>
            </div>
            <div className='mt-8'>
                <form className='space-x-2'>
                    <input type="text" className='w-[280px] px-2 py-1 font-poppins border-none text-sm' placeholder='tell me something about yourself...'/>
                    <button className='bg-mindWhite text-mindBlack hover:text-white hover:bg-mindOrange px-2 py-1 duration-200 text-sm'>Discover</button>
                </form>
            </div>

    </section>
  )
}

export default Recommendations