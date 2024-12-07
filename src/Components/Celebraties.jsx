const Celebraties = () => {
    return (
      <div className="w-[90%] mx-auto">
        <div>
          <h1 className="text-5xl font-bold my-5 text-center">Most Popular Celebrities</h1>
        </div>
  
        {/* DaisyUI Carousel */}
        <div className="carousel w-full md:w-[70%] mx-auto p-5">
          <div className="carousel-item flex flex-col p-5">
            <img
              src="https://i.ibb.co/WyH2b4Y/celeb1.jpg"
              className="w-36 h-36 border-2 border-red-500 rounded-full mx-auto"
              alt="Jaden Carson Baker"
            />
            <h1 className="text-3xl font-bold text-center">Jaden Carson Baker</h1>
          </div>
          <div className="carousel-item flex flex-col p-5">
            <img
              src="https://i.ibb.co/jw0PKtr/celeb2.jpg"
              className="w-36 h-36 border-2 border-red-500 rounded-full mx-auto"
              alt="Thea Sofie Loch"
            />
            <h1 className="text-3xl font-bold text-center">Thea Sofie Loch</h1>
          </div>
          <div className="carousel-item flex flex-col p-5">
            <img
              src="https://i.ibb.co/8DcpdMj/celeb-3.jpg"
              className="w-36 h-36 border-2 border-red-500 rounded-full mx-auto"
              alt="Chad Michael Murray"
            />
            <h1 className="text-3xl font-bold text-center">Chad Michael Murray</h1>
          </div>
          <div className="carousel-item flex flex-col p-5">
            <img
              src="https://i.ibb.co/FhBgFhW/celeb4.jpg"
              className="w-36 h-36 border-2 border-red-500 rounded-full mx-auto"
              alt="Michelle Randolph"
            />
            <h1 className="text-3xl font-bold text-center">Michelle Randolph</h1>
          </div>
          <div className="carousel-item flex flex-col p-5">
            <img
              src="https://i.ibb.co/wdqSC8G/celeb5.jpg"
              className="w-36 h-36 border-2 border-red-500 rounded-full mx-auto"
              alt="Ted Danson"
            />
            <h1 className="text-3xl font-bold text-center">Ted Danson</h1>
          </div>
          <div className="carousel-item flex flex-col p-5">
            <img
              src="https://i.ibb.co/0mp0fnr/celeb6.jpg"
              className="w-36 h-36 border-2 border-red-500 rounded-full mx-auto"
              alt="Ariana Grande"
            />
            <h1 className="text-3xl font-bold text-center">Ariana Grande</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default Celebraties;
  