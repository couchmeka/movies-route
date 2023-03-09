
import { Link } from 'react-router-dom';



const NavBar = () => {

    return (
        
        <div>
            <style type="text/css">
               { `

               body{
                background-color: white;
               }

                `}
            </style>
            <Link to="/"> Home</Link>
            <Link to="/movielist"> List</Link>
            <Link to="/movie"> Movie</Link>
        </div>
    )
}

export default NavBar;