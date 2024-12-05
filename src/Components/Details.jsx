import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Details = () => {
    const data=useLoaderData();
  
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

    const handleWish=()=>{
        

    }
    return (
        <div className="flex flex-col md:flex-row justify-start border-2 rounded-xl p-6 mx-10 items-center">
          
                    <img src={data.poster} alt="Movie Poster" className="w-[400px] h-[400px]"/>
                    <div className="flex flex-col ">
                    <h1 className="text-4xl font-bold text-white">{data.title}</h1>
                 <Link > <button  onClick={handleWish}><FaHeart /></button></Link>
                    <p>{data.overview}</p>
                        <button className="btn" onClick={() => handleDelete(data._id)}>
                            Delete
                        </button>
                 
                    </div>
                   
                
            
        </div>
    );
};

export default Details;