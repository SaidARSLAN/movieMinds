import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
const PopularFilms = () => {
  const {handleNext,movie,apiControl,handleBack} = useContext(GlobalContext);
  return (
    <section id="films" className='text-white grid grid-cols-1 space-y-4 relative -mt-[185px] lg:-mt-[220px] z-10'>
      {apiControl ? <h1 className='text-9xl text-center'>Loading</h1>:
      <div>
              <div className='relative group'>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className='object-contain group-hover:opacity-20 duration-500 z-10 animate-fade' />
                      <div className='absolute z-10 bottom-0 opacity-0 group-hover:opacity-100 px-4'>
                      <h1 className='text-xl text-strong font-montserrat lg:text-7xl group-hover:mb-1 duration-500'>{movie.title ? movie.title : "VERY SOON"}</h1>
                      <p className='text-xs font-poppins lg:text-lg group-hover:mb-1 duration-500'>{movie.overview}</p>
                      <p className='font-bold text-xl font-montserrat lg:text-2xl group-hover:mb-1 duration-500'>{movie.original_language}</p>
                      <p className='text-xs font-poppins lg:text-sm group-hover:mb-1 duration-500'>{movie.release_date ? movie.release_date : "Very SOON"}</p>
                      </div>
                      </div>
                      <div className='w-full flex justify-center h-full items-center absolute -bottom-[150px] space-x-[50px] z-10 lg:-bottom-[50px] lg:h-1 md:-bottom-[210px]'>
                        <button className=' text-mindBlack px-5 py-3 rounded-full  hover:text-mindWhite duration-200 text-3xl font-bold cursor-pointer' onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
                        <button className=' text-mindBlack px-5 py-3 rounded-full   hover:text-mindWhite duration-200 text-3xl font-bold cursor-pointer' onClick={handleNext}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                      </div>
            </div>
              }
    </section>
  )
}

export default PopularFilms 