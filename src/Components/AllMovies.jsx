import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const AllMovies = () => {
  const [allDatas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const [search, setSearch] = useState(""); // Search state
 
 
  const fetchMovies = async (query = "") => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/addMovies?title=${query}`
      );
      const data = await response.json();
      setDatas(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch=()=>{
    fetchMovies(search)
 }
  useEffect(() => {
    const fetchData = async () => {
   
        const response = await fetch("http://localhost:4000/addMovies");
      
        const data = await response.json();
        setDatas(data);
     
        setLoading(true); // Stop loading regardless of success or failure
        setTimeout(() => {
          setLoading(false);
        }, 3000); 
      
    };

    fetchData();
    
  }, []);

  // Spinner during loading
  if (loading) {
    return (
        <div
        className="flex justify-center items-center h-screen bg-gray-100"
        style={{ minHeight: "100vh" }}
      >
        <Circles
          height="80"
          width="80"
          color="red"
          ariaLabel="loading-spinner"
        />
      </div>
    );
  }

  // If no movies are found
  if (allDatas.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-500">No movies found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col px-20 text-center justify-between items-center">
        <h1 className="text-5xl my-3 text-red-500 font-bold">All Movies</h1>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Bind input state to `search`
          className="border dark:bg-gray-900 text-gray-900 dark:text-gray-200  border-gray-300 rounded-md px-4 py-2 mb-6 w-full max-w-md"
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Submit
        </button>
        <p className="my-3 text-lg font-semibold">
          Browse through a diverse collection of movies across genres like
          action, comedy, romance, sci-fi, and more. Each movie features
          detailed information including posters, genres, ratings, and
          descriptions to help you make informed choices.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allDatas.map((data) => (
            <div
              key={data._id}
              className="w-full mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden mb-6"
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
    </div>
  );
};

export default AllMovies;
