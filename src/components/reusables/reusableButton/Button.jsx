import React from "react";
import "./Button.scss";

const ReusableButton = ({ style, click, text }) => {
  return (
    <button className={style} onClick={click}>
      {text}
    </button>
  );
};

export default ReusableButton;

//ejemplo reutilización botón para ver detalles
{/* <ReusableButton
  style={"logout--btn"}
  click={getCheckpoint}
  text={<Link to={`/checkpoints/${checkpoint.name}`}>Ver detalles</Link>}
/>; */}
