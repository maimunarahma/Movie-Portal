import { Link } from "react-router-dom";
import Celebraties from "./Celebraties";
import { useEffect, useState } from "react";

const Featured = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); // State to handle errors
  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  useEffect(() => {
    fetch("https://movie-server-indol.vercel.app/featured")
      .then((res) => {
      return   res.json();
      })
      .then((data) => {
        setMovies(data);
        console.log(data)
        setIsLoading(false); // Stop loading
      })
      .catch((err) => {


        setError(err.message);
        setIsLoading(false); // Stop loading
      });


  }, []);

  return (
    <div>
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mb-5">Featured Movies</h1>
        <p className="text-gray-400 text-center w-[70%]">
          Explore our curated list of featured movies and dive into captivating
          stories.
        </p>
      </div>

      {/* Loading and Error States */}
      {isLoading && (
        <div className="text-center text-white text-xl">Loading...</div>
      )}


      {/* Movies Grid */}
      {!isLoading && !error && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-[70%] mx-auto my-6">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="col-span-1 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Movie Poster */}
              <img
                src={movie.poster}
                alt={`${movie.title} Poster`}
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Movie Details */}
              <div className="p-5 text-white">
                {/* Title and Rating */}
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-lg md:text-2xl font-bold text-yellow-400 truncate">
                    {movie.title}
                  </h1>
                  <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg font-semibold text-sm md:text-base">
                    ⭐ {movie.rating}
                  </span>
                </div>

                {/* Genre, Duration, Year */}
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

                {/* Details Button */}
                <Link to={`/details/${movie._id}`}>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Separator and Celebrities Section */}
      <hr className="w-[70%] mx-auto my-5" />
      <div className="w-[70%] mx-auto flex justify-end my-3">
        <Link to="/allMovies">
          <button className="btn bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg">
            ALL MOVIES
          </button>
        </Link>
      </div>
      <Celebraties />
    </div>
  );
};

export default Featured;
