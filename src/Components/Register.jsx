import { useContext } from "react";
import log from "../assets/login.jpg"
import { AuthContext } from '../Providers/Authentication';
import { useNavigate, } from 'react-router-dom';
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { SignUp,user,setUser}=useContext(AuthContext);
    const navigate=useNavigate();
const handleRegister =  (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const pic = e.target.pic.value;
    console.log(email, pass);
    try {
        const res =  SignUp(email, pass);
        setUser(res.user);
        updateProfile(res.user,{
            displayName:name,
            photoURL:pic,
        })
        navigate('/');
        console.log(user)
    } catch (err) {
        console.log(err);
    }
};
    return (
        <div>
             <div style={{backgroundImage:`url(${log})`}} className="absolute inset-0 opacity-20 bg-cover bg-no-repeat"></div>
            <div className="relative p-16 flex flex-col items-center justify-center">
                <h1 className="text-red-600 mb-3 font-bold text-6xl">Register NOW</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        
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
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="" placeholder="photo URL" name="pic" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;