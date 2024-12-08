import error from "../assets/37.webp";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${error})` }}>
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong.</h1>
                <p className="text-lg text-gray-300 mb-6">We can't seem to find the page you're looking for.</p>
                <Link to='/'>
                    <button className="btn btn-primary px-6 py-3 text-lg">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;