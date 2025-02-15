import { useContext } from "react";
import log from "../assets/login.jpg"
import { AuthContext } from "../Providers/Authentication";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "./firebase.init";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {login,user,setUser}=useContext(AuthContext);
    const navigate=useNavigate();
const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    // console.log(email, pass);
    try {
        const res = await login(email, pass);
        setUser(res.user);
        toast.dismiss();
        toast.success("Logged in Successful! 🎉", {
            position: "top-center",
          });
        navigate('/');
        // console.log(user)
    } catch (err) {
        toast.dismiss();
        toast.error("Logged in failed", {
            position: "top-center",
          });
        // console.log(err);
    }}
    const provider = new GoogleAuthProvider();
    const handleGoogleSignUp = async () => {
        try {
            // Ensure any existing user session is signed out
            await auth.signOut();
    
            // Initiate Google Sign-In
            const result = await signInWithPopup(auth, provider);
    
            // Notify user and navigate
            toast.dismiss();
            toast.success("Logged in with Google! 🎉", {
                position: "top-center",
            });
            navigate("/");
    
            // Optionally, update the user state if needed
            setUser(result.user);
        } catch (error) {
            // Handle errors
            toast.dismiss();
            toast.error("Google login failed! ", {
                position: "top-center",
            });
        }
    };
    
  
 
    return (
        <div >
            <div style={{backgroundImage:`url(${log})`}} className="  opacity-50 inset-0 bg-cover bg-no-repeat">
            <div className="relative p-16 flex flex-col items-center justify-center">
                <h1 className="text-red-600 mb-3 font-bold text-6xl">LOGIN NOW</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body dark:bg-gray-900" onSubmit={handleLogin}>
                    <ToastContainer />
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
                            <button className="btn btn-primary" >Login</button>
                         
                       
                        </div>
                    
                    </form>
                    <h1>Or</h1>
                    <button onClick={handleGoogleSignUp} className="btn"><FcGoogle /> Login With Google</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;