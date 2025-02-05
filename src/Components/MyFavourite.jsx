import { useContext, useState } from "react";
import { useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/Authentication";

const MyFavourite = () => {
  const favouriteMovies = useLoaderData(); // List of movies
  console.log(favouriteMovies)
  const [favourites, setFavourites] = useState(favouriteMovies);
  const { user } = useContext(AuthContext);

 const navigate=useNavigate();
          const handleDelete = (id) => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                fetch(`https://movie-server-indol.vercel.app/favourites/${user.email}/${id}`, {
                  method: "DELETE",
                })
                  .then((res) => {
            //    console.log(favourites)
                    return res.json();
                  })
                  .then((data) => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        // console.log(data)
                      Swal.fire("Deleted!", "Movie removed from favourites.", "success");
                      // navigate('/allMovies')      // navigate('/myFavourite'); 
                      setFavourites((prev) => prev.filter((movie) => movie._id !== id));
                     
                    } 
                  })
                  .catch((error) => {
                    // console.error("Error:", error);
                    Swal.fire("Error!", "An unexpected error occurred.", "error");
                  });
              }
              navigate('/allMovies')
            });
          };
  return (
    <div className="grid grid-cols-3 gap-4">
      {favourites.movies.length ? (
        favourites.movies.map((movie) => (
          <div
            key={movie._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Genre: {movie.genre}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Duration: {movie.duration}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Released: {movie.released}
              </p>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-yellow-500 text-lg">Rating: {movie.rating}</span>
              <button
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => handleDelete(movie._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No movies found in favourites!</div>
      )}
    </div>
  );
};

export default MyFavourite;
