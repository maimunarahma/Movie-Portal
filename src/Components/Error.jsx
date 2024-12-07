import error from "../assets/37.webp"
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-full" style={{backgroundImage:`${error}`}}>
            {/* <img src={error} alt="" className="w-full"/> */}
            <Link to='/'><button className="btn">Back to Home</button></Link>
        </div>
    );
};

export default Error;