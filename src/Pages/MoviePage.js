import { Outlet } from "react-router-dom"
import MovieFound from "../Components/Movie"


const MoviePage = () => {



    return (

        <div>
            <MovieFound/>

            <Outlet/>
        </div>
        
    )




}


export default MoviePage