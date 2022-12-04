import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ReusableButton from "../components/Button";
import { putBook } from "../redux/books/books.functions";

const EditBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { book, error, isLoading } = useSelector((state) => state.books);
  const editBook = (formdata) => {
    formdata.img = formdata.img[0];
    dispatch(putBook(book._id, formdata));
  };

  return (
    <div className="editbook">
      <div>
        {error && <h2 className="error">{error.message}</h2>}
        {isLoading && <h2 className="loading">Editing book...</h2>}
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit(editBook)}>
          <label>
            <p>Title</p>
            <input
              type="text"
              name="title"
              defaultValue={book.title}
              {...register("title", {
                required: "Introduce a title",
              })}
            />
          </label>
          {errors.title && <p>{errors.title.message}</p>}
          <label>
            <p>Image</p>
            <input
              type="file"
              name="img"
              {...register("img", {
                // required: "Introduce an image",
              })}
            />
          </label>
          {errors.img && <p>{errors.img.message}</p>}
          <label>
            <p>Author</p>
            <input
              type="text"
              name="author"
              defaultValue={book.author}
              {...register("author")}
            />
          </label>
          <label>
            <p>Genre</p>
            <input
              type="text"
              name="genre"
              defaultValue={book.genre}
              {...register("genre")}
            />
          </label>
          <label>
            <p>Synopsis</p>
            <input
              type="text"
              name="synopsis"
              defaultValue={book.synopsis}
              {...register("synopsis")}
            />
          </label>
          <ReusableButton clase={"update--btn"} text="Edit" />
        </form>
      </div>
    </div>
  );
};

export default EditBook;
