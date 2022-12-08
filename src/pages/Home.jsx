import React from "react-router-dom";
// import ReusableButton from "../components/Button";
// import { Link } from "react-router-dom";
import "./styles/Home.scss";

const Home = () => {
  return (
    <div className="home_home">
      <div className="title">
        <h1>"Books without limits"</h1>
      </div>
      <div className="img">
        <img src="/assets/iconsNav/TravellingBooks.png" alt="logo" />
      </div>
    </div>
  );
};

export default Home;
