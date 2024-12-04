import banner from "./assets/images - Copy.jpg"
import poster from "./assets/poster.jpg"

const Banner = () => {
    return (
        <div>

<div style={{backgroundImage:`url(${banner})`}} className="flex justify-between items-center bg-cover bg-no-repeat mx-auto">

<div className="flex flex-col justify-between items-center text-white p-20 text-center">
    <h1 className="font-bold text-5xl my-3">Iterstallar Reunion</h1>
    <p className="font-semibold text-lg p-5 ">Our time on earth has come to an end research team takes on the most an important mission in the history of mankind; traveling beyond our galaxy to see if humanity has a future among the stars</p>
<button className="p-4 rounded-full bg-red-500">Watch Later</button>
</div>
<div className="p-16  m-20">
    <img src={poster} alt="" className="w-[500px] rounded"/>
</div>
</div>
<div>
    <div><h1>CHOOSE DATE</h1></div>
    <div></div>
</div>
        </div>
     
    );
};

export default Banner;