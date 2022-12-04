import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ReusableButton from "../components/Button";
import { deleteBook } from "../redux/books/books.functions";

const DeleteBook = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { books, error, isLoading } = useSelector((state) => state.books);

  const removeBook = async(formdata) => {
    dispatch(deleteBook(formdata, books));
  };
  return (
    <div className="deletebook">
      <div>
        {error && <h2 className="error">{error}</h2>}
        {isLoading && <h2 className="loading">Deleting book...</h2>}
        <h1>Delete Movie</h1>
        <form onSubmit={handleSubmit(removeBook)}>
          <select name="_id" {...register("_id")}>
            {books.map((book) => (
              <option key={JSON.stringify(book)} value={book._id}>
                {book.title}
              </option>
            ))}
          </select>
          <ReusableButton text={"Delete"} />
        </form>
      </div>
    </div>
  );
};

export default DeleteBook;
