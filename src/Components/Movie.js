


import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";


const MovieFound = () => {

    //getting the signupList from the router context
    const {movies} = useOutletContext();
    const navigate = useNavigate();

    // console.log(signupList);

    //outlet allows us to render child elements 
    return (
        <div>
            <h1> Movie Page</h1>
                <select onChange={(e) => {
                    navigate(`/movie/${e.target.value}`)
                }}>
                    <option></option>
                    {movies.map((movie)=> {
                        return (<option value={movie.title}>{movie.title}</option>)
                    })}
                </select>
                
                <Outlet context={{movies}} />
        </div>
    )
}

export default MovieFound;