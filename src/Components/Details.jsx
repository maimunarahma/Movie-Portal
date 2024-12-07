import { useContext} from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../Providers/Authentication";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const data=useLoaderData();

    const {user}=useContext(AuthContext);
    const email=(user.email)
  
    // const [isDelete,setDelete]=useState(false)
    const navigate=useNavigate();
    const handleDelete=id=>{
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

    const handleWish = (email) => {
      const movieToAdd = {
        _id: data._id, // Movie ID
        title: data.title,
        poster: data.poster,
        genre:data.genre,
        duration:data.duration,
        released:data.released,
        rating:data.rating
      };
    
      fetch(`http://localhost:4000/favourites/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieToAdd),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0 || result.upsertedCount > 0) {
            Swal.fire('Success!', 'Movie added to favorites.', 'success');
          } else {
            Swal.fire('Error!', 'Movie already in favorites.', 'error');
          }
        })
        .catch((error) => console.error('Error adding favorite:', error));
    };
    
    return (
      <div className="flex flex-col md:flex-row bg-gray-900 border border-gray-700 rounded-2xl p-6 mx-10 items-center shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Movie Poster */}
      <div className="flex-shrink-0">
        <img
          src={data.poster}
          alt="Movie Poster"
          className="w-[300px] h-[400px] md:w-[350px] md:h-[500px] object-cover rounded-xl"
        />
      </div>
      <ToastContainer />
      {/* Movie Details */}
      <div className="flex flex-col md:ml-8 mt-4 md:mt-0 text-white space-y-4 flex-grow">
        <h1 className="text-4xl font-extrabold text-yellow-400">{data.title}</h1>
        <p className="text-gray-300 text-sm md:text-base leading-6">{data.overview}</p>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mt-4">
          {/* Add to Wishlist Button */}
          <button
            onClick={()=>handleWish(email)}
            className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full hover:bg-red-700 text-white transition-colors duration-300 shadow-md"
          
          >
            <FaHeart className="text-lg" />
          </button>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(data._id)}
            className="px-6 py-2 bg-red-600 hover:bg-red-800 text-white font-semibold rounded-full shadow-md transition-colors duration-300"
          >
            Delete
          </button>
          <Link to={`/update/${data._id}`}>
          <button className="px-6 py-2 bg-red-600 hover:bg-red-800 text-white font-semibold rounded-full shadow-md transition-colors duration-300" >
           Update
          </button>
          </Link>
         
        </div>
      </div>
    </div>
    );
};

export default Details;