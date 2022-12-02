import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ReusableButton from "../components/Button";
import { deleteBook } from "../redux/books/books.functions";
import "./styles/MovieCRUD.scss";

const DeleteBook = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const { books, error, isLoading } = useSelector((state) => state.books);

	const removeBook = (formdata) => {
		deleteBook(formdata, books, dispatch);
	};
	return (
		<div className="deletebook">
			<div>
				{error && <h2 className="error">{error}</h2>}
				{isLoading && <h2 className="loading">Deleting book...</h2>}
				<h1>Delete Movie</h1>
				<form onSubmit={handleSubmit(removeBook)}>
					<select name="_id" {...register("_id")}>
						{books.map((movie) => (
							<option key={JSON.stringify(movie)} value={movie._id}>
								{movie.title}
							</option>
						))}
					</select>
					<ReusableButton
						text="Delete"
						/>
				</form>
			</div>
		</div>
	);
};

export default DeleteBook;