import { useContext } from "react";
import log from "../assets/login.jpg"
import { AuthContext } from "../Providers/Authentication";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
    const {login,user,setUser}=useContext(AuthContext);
    const navigate=useNavigate();
const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);
    try {
        const res = await login(email, pass);
        setUser(res.user);
        navigate('/');
        console.log(user)
    } catch (err) {
        console.log(err);
    }
};
 
    return (
        <div className="relative flex flex-col items-center justify-center mx-10">
            <div style={{backgroundImage:`url(${log})`}} className="absolute inset-0 opacity-20 bg-cover bg-no-repeat"></div>
            <div className="relative p-16 flex flex-col items-center justify-center">
                <h1 className="text-red-600 mb-3 font-bold text-6xl">LOGIN NOW</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                            </label>
                            <label >
                            <h1 className="text-sm font-bold">New to Website? <Link to='/register'><span className="text-red-500">Register now</span></Link></h1>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;