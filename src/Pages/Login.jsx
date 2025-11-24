import React, { useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  

  const {signInWithEmailAndPasswordFunc}=useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInWithEmailAndPasswordFunc(email,password)
      .then((res) => {
        console.log(res);

        toast.success("sign in successful");
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid email or password");
        }
      });
  };
  //Google SignIn
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        toast.success("Google Sign-In Successful");
        navigate("/"); // If you want redirect
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google Sign-In Failed");
      });
  };

  return (
    <div className="card bg-base-100 mt-10 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="max-w-lg text-center lg:text-left p-5">
        <h1 className="text-2xl font-bold drop-shadow-lg text-center">
          <span className="text-purple-600"> Login </span>to AI{" "}
          <span className="text-blue-500">Model </span> Inventory{" "}
          <span className="text-blue-500">Manager</span>
        </h1>
      </div>

      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />

            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-[28px] top-[30px] cursor-pointer z-50 text-xl"
              >
                {showPass ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="my-btn p-2 ">Login</button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn  bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FcGoogle />
          Login with Google
        </button>
        <p className="text-center">
          New to our website? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
