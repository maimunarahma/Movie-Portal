import banner from "./assets/images (8).jpeg";
import poster from "./assets/poster.jpg";
import Featured from "./Components/Featured";
import queen from "../src/assets/the-queens-gambit.webp";
import wednesday from "../src/assets/images (5).jpeg";
import Accordion from "./Accordion";

const Banner = () => {
  return (
    <div className="mx-auto px-0">
      {/* Hero Section with Background */}
      <div className="relative w-full mx-auto">
        <div className="carousel carousel-center w-full mx-auto">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/tMGFmDN/DALL-E-2024-12-28-23-33-45-A-high-definition-banner-for-a-movie-website-featuring-a-sleek-and-modern.webp')] bg-cover bg-center bg-no-repeat">
           <div className="w-1/2 p-28 m-16">
           <h1 className="text-5xl font-bold animate-come-go ">Multiplex</h1>
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
              className="w-[90%]  rounded-lg mx-auto"
              alt="The Queen's Gambit"
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
              className="w-[90%]  rounded-lg mx-auto"
              alt="Wednesday"
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

      {/* Featured Section */}
      <Featured />
      <Accordion></Accordion>
    </div>
  );
};

export default Banner;
