import React from "react";

import logo from '../assets/generative-image.png'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
               d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        
          

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 shadow bg-base-100 rounded-box"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add-model">Add New Model</NavLink></li>
            <li><NavLink to="/all-model">Manage Models</NavLink></li>
          </ul>
        </div>

        {/* Logo */}
        <div classNme='flex justify-between gap-5'>
           
          <NavLink to="/" className="btn btn-ghost text-2xl font-bold text-primary">
          <img  className='w-[55px]' src={logo} alt="" />
          <h1>AI  <span className='text-black'>Model</span>Hub</h1>

        </NavLink>
        </div>
      </div>

      {/* CENTER (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
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
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2">
        <NavLink to='/login' className="btn btn-outline btn-primary">Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
