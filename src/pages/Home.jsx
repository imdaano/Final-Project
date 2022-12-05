import React from "react-router-dom";
import ReusableButton from "../components/Button";
import { Link } from "react-router-dom";
import './styles/Home.scss';

const Home = () => {
  return (
    <div className="home--container">
      {/* <ReusableButton 
        clase={"button--map"} 
        text={<Link to="/map">Map</Link>} 
      />
      <ReusableButton
        clase={"button--books"}
        text={<Link to="/books">Books</Link>}
      />
      <ReusableButton
        clase={"button--checkpoints"}
        text={<Link to="/checkpoints">Checkpoints</Link>}
      />
      <ReusableButton
        clase={"button--myaccount"}
        text={<Link to="/myAccount">My Account</Link>}
      /> */}
      <h1>
        Home
      </h1>
    </div>
  );
};

export default Home;
