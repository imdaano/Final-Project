import React from "react";
import "./styles/Button.scss";

const ReusableButton = ({ clase, click, text }) => {
  return (
    <button className={clase} onClick={click}>
      {text}
    </button>
  );
};

export default ReusableButton;
