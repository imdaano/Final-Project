import React from "react";


const ReusableButton = ({ clase, click, text }) => {
  return (
    <button className={clase} onClick={click}>
      {text}
    </button>
  );
};

export default ReusableButton;
