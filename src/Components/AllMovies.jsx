import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


const AllMovies = () => {
    const datas=useLoaderData();
console.log(datas)
const [searchText, setSearchText] = useState('');
const [filteredMovies, setFilteredMovies] = useState([]);

const handleSearch = async () => {
    const response = await fetch(`http://localhost:4000/addMovies/search?text=${searchText}`);
    const data = await response.json();
    setFilteredMovies(data); // Update state with fetched data
};

    return (
        <div >
            <div className="flex flex-col px-20 text-center justify-between items-center">
                <h1 className="text-5xl my-3 text-red-500 font-bold">All Movies</h1>
                <p className="my-3 text-lg font-semibold">Browse through a diverse collection of movies across genres like action, comedy, romance, sci-fi, and more. Each movie features detailed information including posters, genres, ratings, and descriptions to help you make informed choices.</p>
            </div>
            <input
                    type="text"
                    name="searchText"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search movies..."
                    className="bg-black text-white px-4 py-2 rounded-l-lg focus:outline-none"
                />
                 <button
                    onClick={handleSearch}
                    className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition duration-300"
                >
                    Search
                </button>
            <div className="grid grid-cols-3 gap-3"  >

            {datas.map((data) => (
  <div
    key={data._id}
    className="w-full   mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden mb-6"
  >
   
    <img
      src={data.poster}
      alt="Movie Poster"
     className="w-[500px] h-[500px]"
    />

  
    <div className="p-5 text-white">
    
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg md:text-2xl font-bold text-yellow-400 truncate">
          {data.title}
        </h1>
        <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg font-semibold text-sm md:text-base">
          ⭐ {data.rating}
        </span>
      </div>

     
      <div className="flex flex-wrap gap-3 justify-between text-sm md:text-base text-gray-300 mb-6">
        <span className="bg-gray-700 px-3 py-1 rounded-full truncate">
          Genre: {data.genre}
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-full truncate">
          Duration: {data.duration}
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-full truncate">
          Year: {data.released}
        </span>
      </div>

      <Link to={`/details/${data._id}`}>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          See Details
        </button>
      </Link>
    </div>
  </div>
))}

            </div>
          
        </div>
    );
};

export default AllMovies;