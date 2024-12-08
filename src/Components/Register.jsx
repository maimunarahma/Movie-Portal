import { useContext } from "react";
import log from "../assets/login.jpg";
import { AuthContext } from '../Providers/Authentication';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { SignUp, setUser, updateProfileUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const pic = e.target.pic.value;

    // Check password strength
    if (!passwordRegex.test(pass)) {
      toast.error('Password must contain at least 6 characters with uppercase and lowercase letters.', {
        position: "top-center",
      });
      return;
    }

    try {
      // Sign up user
      const res = await SignUp(email, pass);
      
      if (res?.user) {
        setUser(res.user);
        await updateProfileUser({ displayName: name, photoURL: pic });

        toast.success("Registration successful! 🎉", { position: "top-center" });
        navigate('/');
      } else {
        toast.error("Something went wrong during registration.");
      }
    } catch (error) {
    //   console.error("Error during sign-up or profile update: ", error.message);
      toast.error('Registration failed! Please try again.', { position: "top-center" });
    }
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${log})` }} className="absolute inset-0 opacity-20 bg-cover bg-no-repeat"></div>
      <div className="relative p-16 flex flex-col items-center justify-center">
        <h1 className="text-red-600 mb-3 font-bold text-6xl">Register NOW</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <ToastContainer />
          <form className="card-body dark:bg-gray-900 text-gray-900 dark:text-gray-200" onSubmit={handleRegister}>
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
              <input type="text" placeholder="photo URL" name="pic" className="input input-bordered" required />
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
