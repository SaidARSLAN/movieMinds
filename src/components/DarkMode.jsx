import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'


const DarkMode = () => {

    const moonRef = useRef();
    const sunRef = useRef();

    const handleSun = () => {
        sunRef.current.classList.remove("block");
        moonRef.current.classList.remove("hidden");
        sunRef.current.classList.add("hidden");
        moonRef.current.classList.add("block");
        document.body.style.backgroundColor = "white";
        document.getElementById("main").classList.remove("dark");
    }

    const handleDark = () => {
        moonRef.current.classList.remove("block");
        sunRef.current.classList.remove("hidden");
        moonRef.current.classList.add("hidden");
        sunRef.current.classList.add("block");
        document.body.style.backgroundColor = "#000";
        document.getElementById("main").classList.add("dark");
    }

  return (
    <div>
    <div className='absolute hidden -top-[40px] right-1 text-black z-[200] cursor-pointer hover:text-mindGray text-2xl duration-300' id='moon' ref={moonRef} onClick={handleDark}>
    <FontAwesomeIcon icon={faMoon}>
    </FontAwesomeIcon>
    </div>
    <div className='absolute  -top-[40px] right-1 text-white z-[200] cursor-pointer hover:text-mindGray text-2xl duration-300' id="sun" ref={sunRef} onClick={handleSun}>
    <FontAwesomeIcon icon={faSun}>

    </FontAwesomeIcon>
</div>
</div>
  )
}

export default DarkMode