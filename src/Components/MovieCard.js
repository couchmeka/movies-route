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
            <style>
                {`
                  p {
                    border: 5px solid purple;
                    display: flex;
                    justify-content: space-around
                    height: 200px;

                  }

                `}


            </style>
            <h3>Title</h3>
          <p>{[foundMovie.title]}</p>
          <h3>Plot</h3>
          <p>{[foundMovie.plot]}</p>
          <h3>Actors</h3>
          <p> {[foundMovie.actors]}</p>
           
            
            
        
        </div>
        
    )

}
export default MovieCard;