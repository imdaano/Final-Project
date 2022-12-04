import './styles/Users.scss'
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Users = () => {
  const [show, setShow] = useState("login");

  return (
    <div className='users'>
      <div className='button--box'>
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
