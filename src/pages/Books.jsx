import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReusableButton from "../components/Button";
import { getBooks } from "../redux/books/books.functions";
import "./styles/Books.scss";

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="books--container">
      <main>
        <div className="books">
          <h1 className="title">Books</h1>
          <div className="container--cards">
            {isLoading && (
              <img
                src="/assetsFront/images/loading.gif"
                alt="loading"
                className="loading"
              />
            )}
            {error && error.message}
            {books &&
              books.map((book) => {
                return (
                  <div className="book_card" key={JSON.stringify(book)}>
                    <h2>{book.title}</h2>
                    <img src={book.img} alt={book.title} />
                    <ReusableButton
                      clase={"book--btn"}
                      text={<Link to={`/books/${book.title}`}>More info</Link>}
                    />
                  </div>
                );
              })}
            ;
          </div>
        </div>
      </main>
    </div>
  );
};

export default Books;
