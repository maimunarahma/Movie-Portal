import { useNavigate } from "react-router-dom";
import add from "../assets/add2.jpg"
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";

const AddMovies = () => {
    const navigate=useNavigate();
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate); // Update the rating state
    };
   
    const handleAddMovies=e=>{
        e.preventDefault();
        const form=e.target;
       const poster=form.poster.value;
       const title= form.title.value;
     
       const genre= form.genre.value;
       const duration=form.duration.value;
       const released=  form.released.value;
      
       const movie={poster,title,genre,duration,rating,released};
       if(title.length<2 || duration<60){
        alert("Invalid title")
        navigate('/addMovies')
        form.reset();

       }
       else{
       
        console.log(movie);
    fetch('http://localhost:4000/addMovies',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(movie)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert("Movie added successfully")
            form.reset();
            setRating(0)
        }
    })}
    }
    return (
        <div style={{ backgroundImage: `url(${add})` }} className="shrink-0 shadow-2xl bg-no-repeat bg-cover p-16 mx-auto">
            <form className="mx-auto flex flex-col justify-between border-2  items-center"  onSubmit={handleAddMovies}>
                <h1 className="text-5xl font-semibold">Add Movie</h1>
                <div className="w-1/2 p-8">
                <div className="form-control ">
                    <label className="label text-white">
                        <span className="label-text text-white font-bold">Movie Poster</span>
                    </label>
                    <input type="" placeholder="Movie Poster" name="poster" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-white font-bold">Movie Title</span>
                    </label>
                    <input type="text" placeholder="Movie Title" name="title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-white font-bold">Your Email</span>
                    </label>
                    <input type="email" placeholder="Your email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-bold">Genre</span>
                    </label>
                    <select className="select w-full max-w-xs " name="genre">
                   
                        <option disabled selected>Select a genre</option>
                        <option>Comedy</option>
                        <option>Drama</option>
                        <option>Horror</option>
                        <option>Thriller</option>
                        <option>Action</option>
                        <option>Romantic</option>
                        <option>Sci-Fi</option>
                    </select>


                </div>
                <div className="form-control my-3">
                    <label className="label">
                        <span className="label-text text-white font-bold">Duration</span>
                    </label>
                    <input type="number" placeholder="Duration" name="duration" className="input input-bordered" required />
                </div>
                <label className="label">
                        <span className="label-text text-white font-bold">Released Year</span>
                    </label>
                <select className="select w-full max-w-xs" name="released">
                        <option disabled selected>Release Year</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                       
                    </select>
                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text text-white font-bold">Rating</span>
                        </label>
                        <div  className="flex">
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating} // Bind the rating value
                            size={30} // Set the size of stars
                            transition // Enable smooth transitions
                            fillColor="gold" // Star color
                            emptyColor="gray" // Empty star color
                            // Ensure stars are in a row
                        />
                        </div>
                       
                    </div>
                    <textarea name="" id=""></textarea>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">ADD MOVIE</button>
                </div>
                </div>
         
            </form>
        </div>
    );
};

export default AddMovies;