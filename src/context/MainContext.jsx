import { createContext, useEffect, useState } from "react";
import axios from "axios";
const GlobalContext = createContext();

const API_KEY = "46b89186ed58fd640471849b9e20fc42";


export function Provider ({children}) {
    const [movies, setMovies] = useState([])
    const [apiControl,setApiControl] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [moviePerPage,setMoviePerPage] = useState(1);
    const [currentIdx,setCurrentIdx] = useState(1);
    const [movie,setMovie] = useState({})
    const sendAPI = async () => {
        try {
            setApiControl(true);
            const request = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
            setMovies(request.data.results);
            setApiControl(false)
            setMovie(request.data.results[0]);
        }
        catch (err) {
            console.log(err);
            setApiControl(false);
        }
        
    }
    useEffect(() => {
        sendAPI();
    },[])

    const indexOfLastMovie = currentPage * moviePerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
    const currentMovies = movies.slice(indexOfFirstMovie,indexOfLastMovie);
    
    const handleNext = () => {
        setCurrentIdx(currentIdx + 1);
        setMovie(movies[currentIdx]);
    }

    return (
        <GlobalContext.Provider value={{movies,apiControl,currentMovies,handleNext,movie,apiControl}}>
            {children}
        </GlobalContext.Provider>
    )


}


export default GlobalContext;