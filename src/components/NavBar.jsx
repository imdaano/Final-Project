import "./styles/Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/coords" >
        <img src="https://cdn-icons-png.flaticon.com/512/854/854980.png" className="map" alt="map"/>
      </Link>
      <Link to="/checkpoints" >
        <img src="https://img.icons8.com/ios7/12x/home.png" className="checkpoint" alt="checkpoint"/>
      </Link>
      <Link to="/books" >
        <img src="https://cdn-icons-png.flaticon.com/512/130/130304.png" className="books" alt="book"/>
      </Link>
      <Link to="/myAccount" >
        <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="profile" alt="user"/>
      </Link>
    </div>
  );
};

export default Navbar;
