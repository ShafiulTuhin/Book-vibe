import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const active =
    "hover:border-success hover:text-success transition duration-300 rounded-lg";
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={`border-2 border-transparent px-2 py-1 ${active}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/books"
        className={`border-2 border-transparent px-2 py-1 ${active}`}
      >
        Listed Books
      </NavLink>
      <NavLink
        to="/recharts"
        className={`border-2 border-transparent px-2 py-1 ${active}`}
      >
        Pages to Read
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-6 shadow-md">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <h2 className="font-bold text-xl md:text-2xl">Book Vibe</h2>
      </div>

      {/* Center (Desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-6 text-gray-400 font-bold">{navLinks}</div>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2 md:gap-4">
        <button className="btn btn-success btn-sm md:btn-md text-white">
          Sign In
        </button>
        <button className="btn btn-info btn-sm md:btn-md text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
