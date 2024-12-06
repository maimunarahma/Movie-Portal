import { useLoaderData } from "react-router-dom";


const MyFavourite = () => {
  const favourites=useLoaderData();


    return (
        <div>
          { favourites.map(fvrt=> 
            <div key={fvrt._id}>
                <img src={fvrt.poster} alt="" />
            </div>
       ) }
        </div>
    );
};

export default MyFavourite;