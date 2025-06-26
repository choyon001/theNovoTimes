import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 p-10">
        <h1 className="text-2xl font-bold text-center">Register your account</h1>
        <form className="card-body">
            <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
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
            
          </div>
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
