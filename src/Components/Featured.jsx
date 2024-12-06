import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Celebraties from "./Celebraties";

const Featured = () => {
 
    const movies=useLoaderData()
    console.log(movies)
 
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white mb-5">Featured Movies</h1>
            <p></p>
            </div>

            <div className="grid grid-cols-3 gap-3 w-[70%] mx-auto">
                {movies.map(movie=>
                    <div key={movie._id} className="col-span-1  p-5 border-2 rounded-xl" >
                              <img src={movie.poster} alt="" className="h-[500px]"/>
            <div className="p-5">
            <div className="flex justify-between">
            <h1>{movie.title}</h1>
            <h1>{movie.rating}</h1>
            </div>

            
            <div className="flex justify-between gap-3">
            <h2 className="rounded-xl">Genre: {movie.genre}</h2>
            <p>Duation:{movie.duration}</p>
            <p>Releasing Year: {movie.released}</p>
            </div>

            </div>
            <Link to={`/details/${movie._id}`}>   <button className="btn bg-red-600 text-white">See Details</button> </Link>
         

                    </div>
                )}
             
            </div>
            <hr className="w-[70%] mx-auto my-5"/>
            <div className="w-[70%] mx-auto flex justify-end my-3">
            <Link to='/allMovies'><button className="btn bg-red-600 text-white">ALL MOVIES</button></Link>
          
            </div>
          
            <Celebraties></Celebraties>
        </div>
    );
};

export default Featured;