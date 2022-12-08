import "./styles/Users.scss";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import LogOutButton from "../components/LogOutButton";
import { useSelector } from "react-redux";
import MyAccount from "./MyAccount";

const Users = () => {
  const [show, setShow] = useState("login");
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="users">
      {!token && (
        <>
          <div className="button--box">
            <button onClick={() => setShow("login")}>Login</button>
            <button onClick={() => setShow("register")}>Register</button>
          </div>
          <div>
            {show === "login" && <Login />}
            {show === "register" && <Register />}
          </div>
        </>
      )}
      {token && (
        <>
          <div className="button--box">
            <button className="styled" onClick={() => setShow("myaccount")}>My Account</button>
            <button className="styled" onClick={() => setShow("logout")}>Log Out</button>
          </div>
          <div>
            {show === "myaccount" && <MyAccount/>}
            {show === "logout" && <LogOutButton />}
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
