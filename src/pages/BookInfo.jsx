import userEvent from "@testing-library/user-event";
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
      {isLoading && (
        <img src="../../public/assetsFront/images/book-90.gif" alt="loading" />
      )}
      {error && error.message} {/*cambiar mensajes de error??*/}
      {book && (
        <div className="bookInfo">
          <div className="book--card">
            <h2>{book.title}</h2>
            <div className="book--card--img">
              <img src={book.img} alt={book.title} />
            </div>
          </div>
          <div className="book--card--info">
            <p>Autor/a: {book.author}</p>
            <p>Género: {book.genre}</p>
            <div className="book--card--synopsis">
              <p>Sinopsis: {book.synopsis}</p>
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
                text={"Eliminar"}
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
      <div className="back--btn">
        <ReusableButton
          clase={"back--btn--class"}
          text={<Link to={"/books"}>Volver</Link>}
        />
      </div>
    </div>
  );
};

export default BookInfo;
