import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 p-10">
         <h1 className="text-2xl font-bold text-center">Login your account</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
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
