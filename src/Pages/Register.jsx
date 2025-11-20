import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {

    const handleRegister=(e)=>{
        e.preventDefault()

        const displayName =e.target.displayName.value;
        const email =e.target.email.value;
        const photo =e.target.photo.value;
        const password =e.target.password.value;

        console.log(displayName,email,photo,password)


    }
    return (
        <div className="card bg-base-100 mt-10 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
              <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Register</h1>
                <form onSubmit={handleRegister}>
                  <fieldset className="fieldset">

                   {/* User DisplayName */}
                   <label className="label">Name</label>
                    <input
                      type="text"
                      name="displayName"
                      className="input rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="Your Name"
                    />
                    {/* Email */}
           
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="Email"
                    />
                    {/* photoUrl */}
                    <label className="label">PhotoURL</label>
                    <input
                      type="text"
                      name="photo"
                      className="input rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="photoUrl"
                    />
                    {/* Password */}
        
                    <label className="label">Password</label>
                    <input
                      type="password"
                      name="password"
                       className="input rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="my-btn ">
                      Login
                    </button>
                  </fieldset>
                </form>
        
                <button
                  
                  className="btn bg-white rounded-full text-black border-[#e5e5e5]"
                >
                 <FcGoogle/>
                  Login with Google
                </button>
                <p className="text-center">
                  Already Have an Account? Please  <Link
                    className="text-blue-500 hover:text-blue-800"
                    to="/login"
                  >
                     Login
                  </Link>
                </p>
              </div>
              </div>
    );
};

export default Register;