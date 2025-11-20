import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin =(e)=>{
        e.preventDefault()
    }
    //btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600
    return (
          <div className="card bg-base-100 mt-10 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
   
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />

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
          New to our website? Please  <Link
            className="text-blue-500 hover:text-blue-800"
            to="/register"
          >
             Register
          </Link>
        </p>
      </div>
      </div>
    );
};

export default Login;