import "./styles/Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/coords" >
        <img src="../assets/iconsNav/ubication.png" alt="map"/>
      </Link>
      <Link to="/checkpoints" >
        <img src="../assets/iconsNav/casita.png" alt="checkpoint"/>
      </Link>
      <Link to="/books" >
        <img src="../assets/iconsNav/book.png" alt="book"/>
      </Link>
      <Link to="/myAccount" >
        <img src="../assets/iconsNav/user.png" alt="user"/>
      </Link>
    </div>
  );
};

export default Navbar;
