import React, { useContext, useState } from "react";
import logo from "../assets/generative-image.png";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import MyContainer from "./MyContainer";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signoutUserFunc } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleThemeToggle = (e) => {
    const theme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    signoutUserFunc()
      .then(() => {
        setOpen(false);
        navigate("/login");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="navbar flex justify-between items-center text-[#1a1a1a]  bg-[#eee] shadow-md sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      {/* LEFT */}

      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 shadow bg-base-100 rounded-box"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-model">Add Model</NavLink>
            </li>
            <li>
              <NavLink to="/all-model">All Models</NavLink>
            </li>
            <li>
              <NavLink to="/my-model">My Model</NavLink>
            </li>
            <li>
              <NavLink to="/model-purchase">My Model Purchase</NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex justify-between gap-5">
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl font-bold text-primary"
          >
            <img className="w-[55px]" src={logo} alt="" />
            <h1>
              AI <br />
              <span className="text-black">Model</span>Hub
            </h1>
          </NavLink>
        </div>
      </div>

      {/* CENTER (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-model"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Add Model
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/all-model"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              All Models
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-model"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              My Model
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/model-purchase"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              My Model Purchase
            </NavLink>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      {/* If user LOGGED IN */}
      <div className="navbar-end flex gap-5">
        <div className="md:pl-8 md:block hidden">
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              defaultChecked={false}
              className="toggle"
              onChange={handleThemeToggle}
            />
          </label>
        </div>

        {user ? (
          <div className="relative">
            <img
              src={user.photoURL || "https://i.ibb.co/YPMBvYQ/default-user.png"}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer border"
              onClick={() => setOpen(!open)}
            />

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-12 bg-white shadow-lg border rounded-lg w-56 p-4 z-50">
                <div className="mb-3">
                  <p className="font-semibold text-gray-700">
                    {user.displayName}
                  </p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <hr className="my-2" />

                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/model-purchase"
                      className="block px-3 py-2 hover:bg-gray-100 rounded"
                      onClick={() => setOpen(false)}
                    >
                      Model Purchase
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/my-model"
                      className="block px-3 py-2 hover:bg-gray-100 rounded"
                      onClick={() => setOpen(false)}
                    >
                      My Models
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-3 py-2 hover:bg-blue-200 text-purple-600 rounded"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
