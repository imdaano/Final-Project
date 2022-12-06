import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import swal from "sweetalert";
import ReusableButton from "../components/Button";
import {
  deleteCheckpoint,
  getOneCheckpoint,
} from "../redux/checkpoint/checkpoint.functions";
// import { deleteAlert } from "./Alerts";
import "./styles/CheckpointDetail.scss";

const CheckpointDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { checkpoint, checkpoints, isLoading, error } = useSelector(
    (state) => state.checkpoints
  );
  const { user } = useSelector((state) => state.auth)
  const checkpointBooks = checkpoint.books;

  useEffect(() => {
    dispatch(getOneCheckpoint(name, checkpoints));
    console.log(checkpoints);
  }, []);

  return (
    <div className="checkpoint--detail">
      <div className="title">
      <div className="back--btn">
        <Link to="/checkpoints">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8022/8022657.png"
            alt="goback"
          />
        </Link>
      </div>
      </div>
      {isLoading && (
        <img src="assetsFront/images/book-90.gif" alt="loading" />
      )}
      {error && error.message}
      {checkpoint && (
        <div className="checkpoint--info">
          <div className="checkpoint--card">    
              <img src={checkpoint.img} alt={checkpoint.name} />         
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
            {console.log(checkpoint)}
            <p>
              <img
                src="/assetsFront/images/brújula.png"
                alt={checkpoint.location.coordinates}
              />
              {checkpoint.location.coordinates}
            </p>

            <p>
              <img
                src="/assetsFront/images/icons8-teléfono-48.png"
                alt={checkpoint.phone}
              />
              {checkpoint.phone}
            </p>

            {checkpointBooks &&
              checkpointBooks.map((checkpointBook) => {
                return (
                  <div
                    key={JSON.stringify(checkpointBook)}
                    className="checkbooks--container"
                  >
                    <img
                      src="/assetsFront/images/icons8-libros-48.png"
                      alt={checkpoint.books}
                    />
                    <div className="checkbooks--info">
                      <h4>Title: {checkpointBook.title}</h4>
                      <p>Author: {checkpointBook.author}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <div className="action--btns">
        <ReusableButton
          clase={"delete--btn"}
          click={() => dispatch(deleteCheckpoint(checkpoint._id))}
          // click={() => {
          //   const function1 = dispatch(
          //     deleteCheckpoint(checkpoint._id)
          //   );
          //   const function2 = deleteAlert();
          //   function1();
          //   function2();
          // }}
          text={<img src="/assetsFront/images/delete.png" alt="delete" />}
        />
        <ReusableButton
          clase={"update--btn"}
          text={
            <Link to={"/editCheckpoint"}>
              <img src="/assetsFront/images/update.png" alt="update" />
            </Link>
          }
        />
      </div>
    </div>
  );
};
export default CheckpointDetail;