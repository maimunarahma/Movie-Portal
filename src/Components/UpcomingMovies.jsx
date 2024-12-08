import galaxy from "../assets/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
import marvel from "../assets/images (6).jpeg"
import openheimar from "../assets/images (2).jpeg"
import dune from '../assets/images (7).jpeg'
const UpcomingMovies = () => {
  const movies = [
    {
      id: 1,
      title: "Guardians of the Galaxy Vol. 3",
      genre: "Action",
      releaseDate: "2024-05-05",
      poster: galaxy, // Replace with real poster URLs
    },
    {
      id: 2,
      title: "The Marvels",
      genre: "Adventure",
      releaseDate: "2024-06-21",
      poster: marvel,
    },
    {
      id: 3,
      title: "Oppenheimer",
      genre: "Drama",
      releaseDate: "2024-07-14",
      poster: openheimar,
    },
    {
      id: 4,
      title: "Dune: Part Two",
      genre: "Sci-Fi",
      releaseDate: "2024-11-03",
      poster:dune,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="bg-white dark:bg-gray-800 shadow-md p-6 mb-4">
        <h1 className="text-2xl font-bold text-center">Upcoming Movies</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          A glimpse of the most anticipated movies coming soon!
        </p>
      </header>

      <div className="container mx-auto px-4">
        {/* Movies Grid */}
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Genre: {movie.genre}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Release Date: {movie.releaseDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
