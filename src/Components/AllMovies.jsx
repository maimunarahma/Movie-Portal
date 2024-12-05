import { useLoaderData } from "react-router-dom";


const AllMovies = () => {
    const datas=useLoaderData();
console.log(datas)
    return (
        <div >
            <div className="flex flex-col px-20 text-center justify-between items-center">
                <h1 className="text-5xl my-3 text-red-500 font-bold">All Movies</h1>
                <p className="my-3 text-lg font-semibold">Browse through a diverse collection of movies across genres like action, comedy, romance, sci-fi, and more. Each movie features detailed information including posters, genres, ratings, and descriptions to help you make informed choices.</p>
            </div>
            <div className="grid grid-cols-3 gap-3"  >

            {datas.map(data=> <div key={data._id} className="card-body p-5 border-2 rounded-xl ">
            <img src={data.poster} alt="" />
            <div className="p-3">
            <div className="flex justify-between">
            <h1>{data.title}</h1>
            <h1>{data.rating}</h1>
            </div>

            
            <div className="flex justify-between gap-3">
            <h2 className="rounded-xl">Genre: {data.genre}</h2>
            <p>Duation:{data.duration}</p>
            <p>Releasing Year: {data.released}</p>
            </div>

            </div>
            <button className="btn bg-red-600 text-white">See Details</button>
          
          

            </div>)}
            </div>
          
        </div>
    );
};

export default AllMovies;