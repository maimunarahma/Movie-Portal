import { useContext } from "react";
import logo from "../assets/movie-logo-photographic-film-movie-camera-cinema-movie-projector-video-cameras-cinema-camera-circle-png-clipart.jpg"
import Banner from '../Banner';
import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authentication";

const Nav = () => {
    const {user,  signOutUser}=useContext(AuthContext);
    console.log(user)
    const handleSignOut=()=>{
        signOutUser();

    }
    return (
        <div className="mx-auto  p-5">
            <div className="flex items-center">
            <div className="navbar-start w-[40%]">
           <h1 className="flex justify-start items-center gap-1 font-semibold text-xl"><BiCameraMovie /><span className="text-red-600">MULTI</span>PLEX</h1>
           </div>

           <div className="navbar-end w-[50%] ">
           <ul className="flex justify-between items-center font-semibold ">
            <li>HOME</li>
            <li>ALL MOVIES</li>
            <li>UPCOMING</li>
           
            {user && <>
                <Link><li>Add Movie</li></Link> 
                <Link><li>My Favourites</li></Link>
            </>}
         {user?<>
            <img src={user.photoURL} alt="" className="w-10 rounded-full border-2 border-red-500" />
            <button className="btn" onClick={handleSignOut}>SIGN OUT</button>
         </>
        
         
         :

          <Link to='/login'><li>LOG IN</li></Link>
          }
           </ul>

           </div>
            </div>

        
       
        </div>
    );
};

export default Nav;