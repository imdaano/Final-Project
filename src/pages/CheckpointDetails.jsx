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
