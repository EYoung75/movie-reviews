import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaVideo } from "react-icons/fa";

const Navbar = props => {
  return (
    <div className="nav">
      <Link to="/" className="nav__link">
        <FaHome className="nav__link__icon test" />
        Home
      </Link>
      <Link to="/movies" className="nav__link" onClick={props.reset}>
        <FaVideo className="nav__link__icon" />
        Reviewed Movies
      </Link>
    </div>
  );
};

export default Navbar;
