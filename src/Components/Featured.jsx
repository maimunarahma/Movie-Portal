// import { useEffect } from "react";
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

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-[70%] mx-auto">
                {movies.map(movie=>
                    <div
                    key={movie._id}
                    className="col-span-1 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                
                    <img
                      src={movie.poster}
                      alt="Movie Poster"
                      className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  
                   
                    <div className="p-5 text-white">
                    
                      <div className="flex justify-between items-center mb-4">
                        <h1 className="text-lg md:text-2xl font-bold text-yellow-400 truncate">
                          {movie.title}
                        </h1>
                        <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg font-semibold text-sm md:text-base">
                          ⭐ {movie.rating}
                        </span>
                      </div>
                  
                   
                      <div className="flex flex-wrap gap-4 justify-between text-sm md:text-base text-gray-300 mb-6">
                        <span className="bg-gray-700 px-3 py-1 rounded-full truncate">
                          Genre: {movie.genre}
                        </span>
                        <span className="bg-gray-700 px-3 py-1 rounded-full truncate">
                          Duration: {movie.duration}
                        </span>
                        <span className="bg-gray-700 px-3 py-1 rounded-full truncate">
                          Year: {movie.released}
                        </span>
                      </div>
                  
                   
                      <Link to={`/details/${movie._id}`}>
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md">
                          See Details
                        </button>
                      </Link>
                    </div>
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