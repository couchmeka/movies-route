


import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";


const MovieFound = () => {

    //getting the signupList from the router context
    const {movies} = useOutletContext();
    const navigate = useNavigate();

    // console.log(signupList);

    //outlet allows us to render child elements 
    return (
        <div>
            <style>{`
           
              
           select {
            position: relative;
            -webkit-appearance: button;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: middle;
            height: 2.2em;
            margin: 2px;
            padding: 0.3em 0.6em;
            background: white;
            border: 1px solid #aaaaaa;
            border-radius: 0.3em;
            box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 0.85em;
            font-weight: normal;
            overflow: hidden;
            text-shadow: 0 1px 0 white;
            -webkit-transition: box-shadow 200ms, border-color 200ms;
            -moz-transition: box-shadow 200ms, border-color 200ms;
            transition: box-shadow 200ms, border-color 200ms;
            white-space: nowrap; 
          }
`}
            </style>
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