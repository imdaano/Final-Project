import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Users = () => {
  const [show, setShow] = useState("login");

  return (
    <div>
      <div>
        <button onClick={() => setShow("login")}>Login</button>
        <button onClick={() => setShow("register")}>Register</button>
      </div>
      <div>
      {show === 'login' && <Login/>}
      {show === 'register' && <Register/>}
      </div>
    </div>
  );
};

export default Users;
