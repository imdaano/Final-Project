import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReusableButton from "../components/Button";
import { deleteBook, getBooks } from "../redux/books/books.functions";
import './styles/Books.scss'
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
          <h1>Books</h1>
          {isLoading && "Cargando"}
          {error && error.message}
          {books &&
            books.map((book) => {
              return (
                <div className="book_card" key={book.title}>
                  <h2>{book.title}</h2>
                  <img src={book.img} alt={book.title} />
                  
                  <ReusableButton 
                  click={() => dispatch(deleteBook(book._id, dispatch))}
                  text={"Eliminar"}/>
                  {/* <button onClick={() => dispatch(deleteBook(book._id, dispatch))}>Eliminar</button> */}
                  <ReusableButton
                    clase={"book--btn"}
                    text={<Link to={`/books/${book.title}`}>Ver más</Link>}
                  />
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default Books;
