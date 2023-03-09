import { useOutletContext, useParams } from "react-router-dom";


const MovieCard = () => {

    //access router context and params passed 
    const {movies} = useOutletContext();
    const params = useParams();

    //get sign up entry from GET parameter passed
    const foundMovie = movies.find((movie)=> {
        return movie.title === params.title
    });

    console.log(foundMovie);
    console.log(foundMovie.title)


    return (
        <div>
           <p>{foundMovie.title}</p>
            
            
        
        </div>
        
    )

}
export default MovieCard;