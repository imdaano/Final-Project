import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import ReusableButton from "../components/Button";
import {  getOneCheckpoint } from "../redux/checkpoint/checkpoint.functions";
import './styles/CheckpointDetail.scss';


const CheckpointDetail = () => {
    const { name } = useParams();
    const dispatch = useDispatch();
    const { checkpoint, checkpoints, isLoading, error } = useSelector((state) => state.checkpoints);


    useEffect(() => {
        dispatch(getOneCheckpoint(name, checkpoints));
        console.log(checkpoints);
    },[]);

    return (
        <div className="checkpointInfo--main">
            {isLoading && (
                <img src="../../public/assetsFront/images/book-90.gif" alt="loading" />
            )}
            {error && error.message}
            {checkpoint && (
                <div className="checkpointInfo">
                    <div className="checkpoint--card">
                        <h2>{checkpoint.name}</h2>
                        <div className="checkpoint--card--img">
                            <img src={checkpoint.img} alt={checkpoint.name} />
                        </div>
                    </div>
                    <div className="checkpoint--card--info">
                        <p>{checkpoint.name}</p>
                         <p>{checkpoint.address}</p>
                        <p>{checkpoint.phone}</p>
                        {/* <p>{checkpoint.location}</p>  */}
                         {/* <p>{checkpoint.books}</p> */}

                    </div>

                </div>

            )}
            <div className="back--btn">
                <ReusableButton
                    clase={"back--btn--class"}
                    text={<Link to={"/checkpoints"}>Volver</Link>}
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
