import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyFavourite = () => {
  const favourites = useLoaderData();
  const navigate=useNavigate();
 console.log(favourites)
  const handleDelete = (id) => {
    
        console.log(id);
        
 Swal.fire(
    {
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
})

.then((result) => {
  if (result.isConfirmed) {
        fetch(`http://localhost:4000/details/${id}`,{
            method:'DELETE'
        })
     .then(res=> res.json())
     .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
          


    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    navigate('/allMovies');
  }
});
       

        }
     })
    }

  

  return (
    <div className="grid grid-cols-3">
      {favourites.map((fvrt) => (
        <div 
          key={fvrt._id} 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-4 mb-4"
        >
          <img 
            src={fvrt.poster} 
            alt={fvrt.title} 
            className="w-full md:w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex flex-col justify-between w-full md:w-2/3">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {fvrt.title}
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>
                  Genre: <span className="font-medium">{fvrt.genre}</span>
                </p>
                <p>
                  Duration: <span className="font-medium"> {fvrt.duration} </span>
                </p>
                <p>
                  Released: <span className="font-medium">{fvrt.released}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  Rating:
                </span>
                <span className="ml-2 text-lg font-semibold text-yellow-500">
                  {fvrt.rating}
                </span>
              </div>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => handleDelete(fvrt._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyFavourite;
