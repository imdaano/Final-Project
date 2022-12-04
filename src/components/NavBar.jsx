import "./styles/Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/map">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854980.png"
            className="map"
            alt="map"
          />
          <h5>Map</h5>
        </Link>
        <Link to="/checkpoints">
          <img
            src="https://cdn.discordapp.com/attachments/1047544934644854875/1048930362211962880/libreria.png"
            className="checkpoint"
            alt="checkpoint"
          />
          <h5>Checkpoints</h5>
        </Link>
        <Link to="/">
          <img
            src="https://img.icons8.com/ios7/12x/home.png"
            className="home"
            alt="home"
          />
          <h5>Home</h5>
        </Link>
        <Link to="/books">
          <img
            src="https://cdn-icons-png.flaticon.com/512/130/130304.png"
            className="books"
            alt="book"
          />
          <h5>Books</h5>
        </Link>
        {token && (
          <>
            {user.rol === "admin" && (
              <>
                <Link to="/create">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1250/1250616.png"
                    className="create"
                    alt="create"
                  />
                  <h5>Create</h5>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
