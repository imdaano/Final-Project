import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import swal from "sweetalert";
import ReusableButton from "../components/Button";
import { catchBook, dropBook } from "../redux/books/books.functions";
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
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(checkpoint);
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
        <img
          src="assetsFront/images/loading.gif"
          alt="loading"
          className="loading"
        />
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
                    <button
                      onClick={() =>
                        dispatch(
                          catchBook(
                            checkpoint._id,
                            checkpointBook._id,
                            user._id,
                            checkpoint.name,
                            checkpoint,
                            navigate
                          )
                        )
                      }
                    >
                      Catch Book
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <div className="action--btns">
        {token && (
          <>
            {user.rol === "admin" && (
              <>
                <ReusableButton
                  clase={"delete--btn"}
                  click={() => dispatch(deleteCheckpoint(checkpoint._id))}
                  text={
                    <img src="/assetsFront/images/delete.png" alt="delete" />
                  }
                />
                <ReusableButton
                  clase={"update--btn"}
                  text={
                    <Link to={"/editCheckpoint"}>
                      <img src="/assetsFront/images/update.png" alt="update" />
                    </Link>
                  }
                />
              </>
            )}
          </>
        )}
        {user && (
          <button
            onClick={() =>
              dispatch(
                dropBook(
                  checkpoint._id,
                  user.book._id,
                  user._id,
                  checkpoint,
                  checkpoint.name,
                  navigate
                )
              )
            }
          >
            <img src={user.book?.img} alt={user.book?.title} />
          </button>
        )}
      </div>
    </div>
  );
};
export default CheckpointDetail;
