
import { Link } from 'react-router-dom';



const NavBar = () => {

    return (
        
        <div className='nav-layout'>
            <style>
               {`
               .nav-layout{
               background-color: grey;
               height: 100px;
               font-size: 40px;
               display: flex;
               justify-content: space-between;
               justify-content: space-around;
               
    
               
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