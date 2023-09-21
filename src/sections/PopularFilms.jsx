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
              <div className='text-white flex flex-col relative group '>
                      { <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className=' w-[1440px] group-hover:opacity-20 duration-500' /> }
                      <div className='hidden lg:hidden lg:group-hover:flex flex-col absolute bottom-0 px-4 py-4'>
                      <h1 className='font-poppins text-3xl text-gray-400 mb-4'>{movie.title ? movie.title : "VERY SOON"}</h1>
                      <p className='font-montserrat text-lg text-mindWhite'>{movie.overview}</p>
                      <p className='font-montserrat text-base text-mindWhite'>{movie.original_language}</p>
                      <p className='font-monterrat text-base text-mindWhite'>{movie.release_date ? movie.release_date : "Very SOON"}</p>
                      </div>
                      </div>
                     
            </div>
              }
    </section>
  )
}

export default PopularFilms 