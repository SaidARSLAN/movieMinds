import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight,faSpinner } from '@fortawesome/free-solid-svg-icons'
const PopularFilms = () => {
  const {handleNext,movie,apiControl,handleBack} = useContext(GlobalContext);
  return (
    <section id="films" className='px-2 mt-12'>
      {apiControl ? <FontAwesomeIcon icon={faSpinner} className='text-4xl text-center'></FontAwesomeIcon>:
      <div>
              <div className='relative group'>
                      { <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className='object-contain group-hover:opacity-20' /> }
                      <div className='bottom-0 opacity-0 group-hover:opacity-100 px-4'>
                      <h1 className='text-xl text-strong font-montserrat lg:text-7xl group-hover:mb-1 duration-500'>{movie.title ? movie.title : "VERY SOON"}</h1>
                      <p className='text-xs font-poppins lg:text-lg group-hover:mb-1 duration-500'>{movie.overview}</p>
                      <p className='font-bold text-xl font-montserrat lg:text-2xl group-hover:mb-1 duration-500'>{movie.original_language}</p>
                      <p className='text-xs font-poppins lg:text-sm group-hover:mb-1 duration-500'>{movie.release_date ? movie.release_date : "Very SOON"}</p>
                      </div>
                      </div>
                      <div className='w-full flex justify-center h-full items-center absolute max-[325px]:-bottom-[75px] max-[475px]:-bottom-[110px] space-x-[50px] lg:-bottom-[50px] lg:h-1 md:-bottom-[210px]'>
                        <button className=' text-mindBlack px-5 py-3 rounded-full  hover:text-mindWhite duration-200 text-3xl font-bold cursor-pointer' onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
                        <button className=' text-mindBlack px-5 py-3 rounded-full   hover:text-mindWhite duration-200 text-3xl font-bold cursor-pointer' onClick={handleNext}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                      </div>
            </div>
              }
    </section>
  )
}

export default PopularFilms 