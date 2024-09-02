import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="text-2xl" to="/">
          Home
        </Link>
        <Link to="/admin">Admin</Link>
      </div>
    </>
  );
};

export default Navbar;
