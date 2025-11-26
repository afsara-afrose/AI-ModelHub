import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import MyContainer from "../Components/MyContainer";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const provider = new GoogleAuthProvider();

const Register = () => {
  const navigate = useNavigate();
  const location =useLocation()
  const [showPass, setShowPass] = useState(false);
  const from = location.state?.from?.pathname || "/";

  const { createUserWithEmailAndPasswordFunc, UpdateProfileFunc } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.displayName.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain uppercase & lowercase letters");
      return;
    }

    // create user
    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);

        // update profile
        UpdateProfileFunc(displayName, photoURL)
          .then(() => {
            toast.success("Profile updated");
            navigate(from)
          })
          .catch(() => 
            toast.error('profile is not updated yeat'));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use");
        } else {
          toast.error(error.message);
        }
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-In Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Sign-In Failed");
      });
  };

  return (
    <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <MyContainer>
        <div className="card-body mt-10">
          <h1 className="text-2xl font-bold text-center">
            <span className="text-purple-600">Register</span> for AI
            <span className="text-blue-500"> Model Inventory Manager</span>
          </h1>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="displayName"
                className="input rounded-full"
                placeholder="Your Name"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full"
                placeholder="Email"
              />

              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photoURL"
                className="input rounded-full"
                placeholder="Photo URL"
              />

              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="input rounded-full"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-[28px] top-[30px] cursor-pointer text-xl"
                >
                  {showPass ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button className="my-btn p-2 mt-4">Register</button>
            </fieldset>
          </form>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
            <FcGoogle /> Login with Google
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/login">
              Login
            </Link>
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default Register;
