import { useContext, useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/Authentication";

const MyFavourite = () => {
  const favouriteMovies = useLoaderData(); // List of movies
  const [favourites, setFavourites] = useState(favouriteMovies);
  const { user } = useContext(AuthContext);

  // Handle deletion of favourite movie
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
   
          const response = await fetch(
            `https://multiplex-blue.vercel.app/favourites/${user.email}/${id}`,
            { method: "DELETE" }
          );
          const data = await response.json();

          if (data.deletedCount>0) {
            Swal.fire("Deleted!", "Movie removed from favourites.", "success");

            // Update state after successful deletion
            setFavourites((prev) => prev.filter((movie) => movie._id !== id));
          } else {
            Swal.fire("Error!", "Failed to remove movie from favourites.", "error");
          }
        }
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {favourites.length ? (
        favourites.map((movie) => (
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
