import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const Register = () => {
  const { createNewUser,setUser,updateUserProfile } = useContext(AuthContext);
  const [error,setError] = useState({});
  const navigate = useNavigate();
  
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    {
      if (name.length<5){
        setError({ ...error, name: "Name must be at least 5 characters long" });
        return;
      }
    }
    const email = form.get("email");
    const password = form.get("password");
    const photoUrl = form.get("photoUrl");
    {
      if (!photoUrl){
        setError({ ...error, name: "Photo URL is required" });
        return;
      }
    }
    

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photoUrl })
        .then(()=>{
          console.log("User profile updated successfully");
          navigate("/");
        })
        .catch((err)=>{
          console.log("Error updating user profile:", err.message);
        })
        console.log(user);
      }) 
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 p-10">
        <h1 className="text-2xl font-bold text-center">
          Register your account
        </h1>
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="your Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <label className="label">
              {
                error.name && <span className="label-text-alt text-red-600">{error.name}</span>
              }
            </label>
          <div className="form-control mt-6">
            <button className="btn btn-neutral w-full">Register</button>
            <p className="text-center p-2">
              Already have an account?
              <Link to="/auth/login" className="text-red-600 ml-2">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
