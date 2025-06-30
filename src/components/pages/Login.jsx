import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error,setError] = useState({});
  
    const handleSignIn = (event)=>{
      event.preventDefault();
      const form = new FormData(event.target);
      const email = form.get("email"); 
      const password = form.get("password");
      console.log(email, password);
      signInUser(email, password)
        .then((result) => {
          const user = result.user;
          navigate(location?.state?location.state : "/");
          console.log(user);

        })
        .catch((err) => {
          setError({...error,login:err.code})
          console.log(error.message);
        });

    }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 p-10">
         <h1 className="text-2xl font-bold text-center">Login your account</h1>
        <form className="card-body" onSubmit={handleSignIn}>
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
            <label className="label">
              {error.login && <span className="label-text-alt text-red-600">{error.login}</span> }
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
          </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral w-full">Login</button>
            <p className="text-center p-2">Don't have an account?<Link to="/auth/register/" className="text-red-600 ml-2">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
