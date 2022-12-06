// import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { /*useNavigate,*/ Link, useParams } from "react-router-dom";
import ReusableButton from "../components/Button";
import { deleteBook, getOneBook } from "../redux/books/books.functions";
import "./styles/BookInfo.scss";

const BookInfo = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { title } = useParams();
  const dispatch = useDispatch();
  const { book, books, isLoading, error } = useSelector((state) => state.books);
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneBook(title, books));
  }, []);

  return (
    <div className="bookInfo--main">
      <div className="back--btn">
        <Link to="/books">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8022/8022657.png"
            alt="goback"
          />
        </Link>
      </div>
      {isLoading && (
        <img src="../../public/assetsFront/images/book-90.gif" alt="loading" />
      )}
      {error && error.message}
      {book && (
        <div className="bookInfo">
          <div className="book--card">
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} />
          </div>
          <div className="book--card--info">
            <div className="flex">
              <h2>Auhor/a:</h2>
              <p>{book.author}</p>
            </div>
            <div className="flex">
              <h2>Genre:</h2>
              <p>{book.genre}</p>
            </div>
            <div className="book--card--synopsis">
              <h2>Synopsis:</h2>
              <p>{book.synopsis}</p>
            </div>
          </div>
        </div>
      )}
      {token && (
        <>
          {user.rol === "admin" && (
            <>
              <ReusableButton
                clase={"delete--btn"}
                click={() => dispatch(deleteBook(book._id, dispatch))}
                text={"Delete"}
              />
              <ReusableButton
                clase={"update--btn"}
                text={<Link to={"/editBook"}>Actualizar</Link>}
              />
            </>
          )}
        </>
      )}
      <div className="action--btns"></div>
    </div>
  );
};

export default BookInfo;
