import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
const PopularFilms = () => {
  const {movies,currentMovies} = useContext(GlobalContext);
  console.log(movies);
  return (
    <div className='text-white grid grid-cols-1 space-y-4 relative -mt-[250px]'>
      {currentMovies.map((movie,index) => {
              return ( <div key={index} className='relative group'>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className='object-contain group-hover:opacity-20 duration-500 z-10' />
                      <div className='absolute z-10 bottom-8 opacity-0 group-hover:opacity-100 px-4'>
                      <h1 className='text-xl text-strong font-montserrat lg:text-7xl'>{movie.title}</h1>
                      <p className='text-xs font-poppins lg:text-lg'>{movie.overview}</p>
                      <p className='font-bold text-xl font-montserrat lg:text-2xl'>{movie.original_language}</p>
                      <p className='text-xs font-poppins lg:text-sm'>{movie.release_date}</p>
                      </div>
                      <div className='w-full flex justify-center h-full items-center absolute -bottom-[150px] space-x-[50px] z-10'>
                        <button className='bg-mindWhite text-mindBlack px-5 py-3 rounded-full hover:bg-mindOrange hover:text-mindWhite duration-200 text-xl font-bold cursor-pointer'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
                        <button className='bg-mindWhite text-mindBlack px-5 py-3 rounded-full  hover:bg-mindOrange hover:text-mindWhite duration-200 text-xl font-bold cursor-pointer'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                      </div>
              </div>)
      })}
    </div>
  )
}

export default PopularFilms 