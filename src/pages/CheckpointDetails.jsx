import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReusableButton from "../components/Button";
import {
  deleteCheckpoint,
  getOneCheckpoint,
} from "../redux/checkpoint/checkpoint.functions";
import "./styles/CheckpointDetail.scss";

const CheckpointDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { checkpoint, checkpoints, isLoading, error } = useSelector(
    (state) => state.checkpoints
  );

  useEffect(() => {
    dispatch(getOneCheckpoint(name, checkpoints));
    console.log(checkpoints);
  }, []);

  return (
    <div className="checkpoint--detail">
      <div className="title">
        {/* <ReusableButton
          clase={"back--btn--class"}
          text={
            <Link to={"/checkpoints"}>
              <img src="/assetsFront/images/back.png" alt="back" />
            </Link>
          }
        /> */}
        <h1>Información</h1>
      </div>
      {isLoading && (
        <img src="../../public/assetsFront/images/book-90.gif" alt="loading" />
      )}
      {error && error.message}
      {checkpoint && (
        <div className="checkpoint--info">
          {/* <h2>{checkpoint.name}</h2> */}
          <div className="checkpoint--card">
            <div className="checkpoint--card--img">
              <img src={checkpoint.img} alt={checkpoint.name} />
            </div>
          </div>
          <div className="checkpoint--card--info">
            <p>
              <img
                src="/assetsFront/images/icons8-casa.svg"
                alt={checkpoint.name}
              />
              {checkpoint.name}
            </p>
            <p>
              <img
                src="/assetsFront/images/icons8-maps.svg"
                alt={checkpoint.address}
              />
              {checkpoint.address}
            </p>
              {/* <p><img
                src="/assetsFront/images/brújula.png"
                alt={checkpoint.location.coordinates}
              />{checkpoint.location.coordinates}</p> */}
            <p>
              <img
                src="/assetsFront/images/icons8-teléfono-48.png"
                alt={checkpoint.phone}
              />
              {checkpoint.phone}
            </p>
            <p>
              <img
                src="/assetsFront/images/icons8-libros-48.png"
                alt={checkpoint.books}
              />
              {checkpoint.books}
            </p>
          </div>
        </div>
      )}
      <div className="action--btns">
        <ReusableButton
          clase={"delete--btn"}
          click={() => dispatch(deleteCheckpoint(checkpoint._id, dispatch))}
          text={<img src="/assetsFront/images/delete.png" alt="delete"/>}
        />
        <ReusableButton
          clase={"update--btn"}
          text={<Link to={"/editCheckpoint"}><img src="/assetsFront/images/update.png" alt="update"/></Link>}
        />
      </div>
    </div>
  );
};
export default CheckpointDetail;

// import "./styles/CheckpointDetail.scss";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import ReusableButton from "../components/Button";

// const CheckpointDetails = () => {
//   const { name } = useParams();
//   const { checkpoints } = useSelector((state) => state.checkpoints);

//   let checkpoint;

//   checkpoints.map(
//     (check) => (checkpoint = check.name === name ? check : checkpoint)
//   );

//   return (
//     <div className="checkpoint--info">
//       <div className="container">
//         <h3>{checkpoint.name}</h3>
//         <img src={checkpoint.img} alt={checkpoint.title} />
//         <p>{checkpoint.location}</p>
//         <p>{checkpoint.phone}</p>
//         <Link to={"/"}>
//           <ReusableButton text="All checkpoints" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CheckpointDetails;
