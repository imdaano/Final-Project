import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReusableButton from "../components/Button";
<<<<<<< HEAD
import { deleteBook, getBooks } from "../redux/books/books.functions";
import './styles/Books.scss'
=======
import { getBooks } from "../redux/books/books.functions";

>>>>>>> 228d733fafad31aa297b07530d9a791b65bbb978
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
          {isLoading && (<img src="../../public/assetsFront/images/book-90.gif" alt="loading"/>)}
          {error && error.message}
          {books &&
            books.map((book) => {
              return (
                <div className="book_card" key={book.title}>
                  <h2>{book.title}</h2>
                  <img src={book.img} alt={book.title} />
<<<<<<< HEAD
                  
                  <ReusableButton 
                  click={() => dispatch(deleteBook(book._id, dispatch))}
                  text={"Eliminar"}/>
=======
>>>>>>> 228d733fafad31aa297b07530d9a791b65bbb978
                  {/* <button onClick={() => dispatch(deleteBook(book._id, dispatch))}>Eliminar</button> */}
                  <ReusableButton
                    clase={"book--btn"}
                    text={<Link to={`/books/${book.title}`}>Ver más</Link>}
                  />
                </div>
              );
            })};
        </div>
      </main>
    </div>
  );
};

export default Books;
