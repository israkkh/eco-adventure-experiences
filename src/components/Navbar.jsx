import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider.jsx";
const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold">
          EcoAdventure
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end px-2 flex gap-2">
        {user && user?.email ? <button onClick={logOut} className="btn btn-primary" >Logout</button> : <Link to="/login" className="btn btn-primary">
          Login
        </Link> }
        
        <Link to="/register" className="btn btn-primary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
