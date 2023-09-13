import { createContext, useEffect, useState } from "react";
import axios from "axios";
const GlobalContext = createContext();

const API_KEY = "46b89186ed58fd640471849b9e20fc42";


export function Provider ({children}) {
    const [movies, setMovies] = useState([])
    const [apiControl,setApiControl] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [moviePerPage,setMoviePerPage] = useState(1);
    const sendAPI = async () => {
        try {
            const request = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
            setMovies(request.data.results);
            setApiControl(true);
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
    
 
    return (
        <GlobalContext.Provider value={{movies,apiControl,currentMovies}}>
            {children}
        </GlobalContext.Provider>
    )


}


export default GlobalContext;