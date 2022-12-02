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
	const { books, error, isLoading } = useSelector((state) => state.books);

	const editBook = (formdata) => {
		formdata.img = formdata.img[0];
		putBook(formdata, books, dispatch);
	};

	return (
		<div className="editbook">
			<div>
				{error && <h2 className="error">{error}</h2>}
				{isLoading && <h2 className="loading">Editing book...</h2>}
				<h1>Edit Book</h1>
				<form onSubmit={handleSubmit(editBook)}>
					<select name="_id" {...register("_id")}>
						{books.map((book) => (
							<option key={JSON.stringify(book)} value={book._id}>
								{book.title}
							</option>
						))}
					</select>
					<label>
						<p>Title</p>
						<input
							type="title"
							name="title"
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
								required: "Introduce an image",
							})}
						/>
					</label>
					{errors.title && <p>{errors.title.message}</p>}
					<label>
						<p>Author</p>
						<input type="text" name="author" {...register("author")} />
					</label>
					<label>
						<p>Genre</p>
						<input type="text" name="genre" {...register("genre")} />
					</label>
					<label>
						<p>Synopsis</p>
						<input type="text" name="synopsis" {...register("synopsis")} />
					</label>
					<ReusableButton
						text="Edit"
					/>
				</form>
			</div>
		</div>
	);
};

export default EditBook;
