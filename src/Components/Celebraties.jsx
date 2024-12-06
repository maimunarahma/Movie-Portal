

const Celebraties = () => {
    return (
        <div className="w-[60%] mx-auto ">
            <div>
                <h1 className="text-5xl  font-bold my-5">Most Popular Celebraties  </h1>
            </div>
            <div className="carousel carousel-end rounded-box">
        <div className="carousel-item flex flex-col justify-center items-center p-5">
          <img src="https://i.ibb.co.com/WyH2b4Y/celeb1.jpg" alt="" className="w-36 h-36 border-2 border-red-500 rounded-full"/>
       <h1 className="text-3xl font-bold">Jaden Carson Baker</h1>
        </div>
        <div className="carousel-item flex flex-col justify-center items-center p-5">
          <img
            src="https://i.ibb.co.com/jw0PKtr/celeb2.jpg"
            className="w-36 h-36 border-2 border-red-500 rounded-full" />
            <h1 className="text-3xl font-bold">Thea Sofie Loch</h1>
        </div>
       
        <div className="carousel-item flex flex-col justify-center items-center p-5">
          <img
            src="https://i.ibb.co.com/8DcpdMj/celeb-3.jpg"
            className="w-36 h-36 border-2 border-red-500 rounded-full"  />
            <h1  className="text-3xl font-bold">Chad Michael Murray</h1>
        </div>
        <div className="carousel-item flex flex-col justify-center items-center p-5">
          <img src="https://i.ibb.co.com/FhBgFhW/celeb4.jpg"className="w-36 h-36 border-2 border-red-500 rounded-full"/>
          <h1  className="text-3xl font-bold">Michelle Randolph</h1>
        </div>
        <div className="carousel-item flex flex-col justify-center items-center p-5">
          <img src="https://i.ibb.co.com/wdqSC8G/celeb5.jpg"   className="w-36 h-36 border-2 border-red-500 rounded-full" />
          <h1  className="text-3xl font-bold">Ted Danson</h1>
        </div>
        <div className="carousel-item flex flex-col justify-center items-center p-">
          <img
            src="https://i.ibb.co.com/0mp0fnr/celeb6.jpg"
            className="w-36 h-36 border-2 border-red-500 rounded-full" />
                  <h1  className="text-3xl font-bold">Ariana Grande</h1>
        </div>
      </div>
            
        </div>
    );
};

export default Celebraties;