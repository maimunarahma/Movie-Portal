import { useContext } from "react";

import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authentication";
import { ThemeContext } from "./ThemeProvider";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


const Nav = () => {
    const {user,  signOutUser}=useContext(AuthContext);
    const {theme, toggleTheme}=useContext(ThemeContext)
    

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

           <div className="navbar-end w-[50%] hidden md:block ">
           <ul className="flex justify-between items-center font-semibold ">
           
            <Link to='/'> <li>HOME</li></Link>
            <Link to='/allMovies'>   <li>ALL MOVIES</li></Link>
         
            <li>UPCOMING</li>
           
            <button onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        {theme === "light" ? (
          <FaMoon className="text-black" />
        ) : (
          <FaSun className="text-yellow-400" />
        )}
      </button>
            {user && <>
                <Link to='/addMovies'><li>Add Movie</li></Link> 
                <Link to={`/favourites/${user.email}`}><li>My Favourites</li></Link>
            </>}
         {user?<>
            <img src={user.photoURL} alt="" className="w-10 rounded-full border-2 border-red-500" />
            <button className="btn" onClick={handleSignOut}>SIGN OUT</button>
       
         </>
        
         
         :

          <Link to='/login'><li>LOG IN</li></Link>
          }
           </ul>
       
           {/* <GiHamburgerMenu /> */}
         
      </div>
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      
      </div>
      <ul
        tabIndex={0}
        className="dark:bg-gray-900 text-gray-900 dark:text-gray-200 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      
      <Link to='/'> <li>HOME</li></Link>
            <Link to='/allMovies'>   <li>ALL MOVIES</li></Link>
         
            <li>UPCOMING</li>
           
          <li>
          <button onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        {theme === "light" ? (
          <FaMoon className="text-black" />
        ) : (
          <FaSun className="text-yellow-400" />
        )}

      </button>
      <li>    {user?<>
            <img src={user.photoURL} alt="" className="w-10 rounded-full border-2 border-red-500" />
            <button className="btn" onClick={handleSignOut}>SIGN OUT</button>
       
         </>
        
         
         :

          <Link to='/login'><li>LOG IN</li></Link>
          }</li>
        </li>
        <li> {user && <>
                <Link to='/addMovies'><li>Add Movie</li></Link> 
                <Link to={`/favourites/${user.email}`}><li>My Favourites</li></Link>
            </>}</li>
      </ul>
        

           </div>





           </div>

        
       
        </div>
    );
};

export default Nav;