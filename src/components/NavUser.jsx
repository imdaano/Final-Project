import React from "react";
import { ReactComponent as NavbarLogo } from "../assets/navbar-logo.svg";
import { Link } from "react-router-dom";
import "./styles/NavUser.scss";

const NavUser = () => {
    return (
        <div className="nav-user">
            <div className="nav-user__logo">
                <NavbarLogo fill="#8AA7BD" />
            </div>
            <Link to="/users">
                <img className="users" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="users" />
            </Link>
        </div>
    );
};

export default NavUser;
