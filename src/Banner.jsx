import banner from "./assets/images - Copy.jpg";
import poster from "./assets/poster.jpg";
import Featured from "./Components/Featured";
import queen from "../src/assets/the-queens-gambit.webp"
import wednesday from "../src/assets/images (5).jpeg"

const Banner = () => {
  return (
    <div className="mx-auto px-0">
      {/* Hero Section with Background */}
      <div className="">
        <div className="relative w-full mx-auto">
          <div className="carousel carousel-center w-[80%] ">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full mx-auto">
                <div  style={{ backgroundImage: `url(${banner})` }}   className=" flex justify-center items-center bg-cover bg-no-repeat h-screen">
                <div className="flex flex-col justify-between items-center text-white p-5 md:px-20 text-center bg-black bg-opacity-50 w-full h-full">
                <h1 className="font-bold text-4xl md:text-5xl my-3">Interstellar Reunion</h1>
                <p className="font-semibold text-md md:text-lg p-3 md:p-5">
                  Our time on earth has come to an end. The research team takes on the most
                  important mission in the history of mankind: traveling beyond our galaxy to
                  see if humanity has a future among the stars.
                </p>
                <button className="p-3 md:p-4 rounded-full bg-red-500 hover:bg-red-600 transition">
                  Watch Later
                </button>
              </div>
              <img
                src={poster}
                className="w-[100%] md:w-[500px] rounded-lg mx-auto"
                alt="Interstellar Poster"
              />
                </div>
           
              <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <a href="#slide3" className="btn btn-circle text-white">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle text-white">
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={queen}
                className="w-full h-auto"
                alt="Slide 2"
              />
              <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <a href="#slide1" className="btn btn-circle text-white">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle text-white">
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={wednesday}
                className="w-full h-auto"
                alt="Slide 3"
              />
              <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <a href="#slide2" className="btn btn-circle text-white">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle text-white">
                  ❯
                </a>
              </div>
            </div>

         
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <Featured />
    </div>
  );
};

export default Banner;
