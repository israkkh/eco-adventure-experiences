import React from "react";
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

const Login = () => {
  const { signInNewUser  } = useContext(Authcontext);
      const handleSubmit = (e) => {
        e.preventDefault(); 
        //GET FORM DATA
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password);
          signInNewUser(email,password).then(result=>{
              const loggedUser = result.user;
              alert(loggedUser);
          }).catch(error=>{
              alert(error.message);
          })
          
        }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="card w-full max-w-md bg-white shadow-sm rounded-none py-10 px-8 lg:px-12">
        <div className="card-body p-0">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Login your account
          </h2>

          <div className="divider mb-8"></div>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="form-control w-full mb-6">
              <label className="label px-0">
                <span className="label-text font-bold text-gray-700 text-md">
                  Email address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full bg-gray-100 border-none rounded-sm focus:outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full mb-8">
              <label className="label px-0">
                <span className="label-text font-bold text-gray-700 text-md">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-100 border-none rounded-sm focus:outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Login Button */}
            <div className="form-control mt-4">
              <button className="btn w-full bg-[#404040] hover:bg-black text-white border-none rounded-sm normal-case text-lg h-14">
                Login
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <p className="text-center mt-8 text-sm font-medium text-gray-500">
            Don't Have An Account?{" "}
            <span className="text-red-500 cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
