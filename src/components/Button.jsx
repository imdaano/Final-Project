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

//ejemplo reutilización botón para ver detalles
// {/* <ReusableButton
//   style={"logout--btn"}
//   click={getCheckpoint}
//   text={<Link to={`/checkpoints/${checkpoint.name}`}>Ver detalles</Link>}
// />; */}
