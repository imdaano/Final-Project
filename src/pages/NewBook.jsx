import './styles/NewBook.scss';
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postBook } from "../redux/books/books.functions";
import ReusableButton from '../components/Button';

const NewBook = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();
	const { books, error, isLoading } = useSelector((state) => state.books);

	const newBook = (formdata) => {
		formdata.img = formdata.img[0];

		postBook(formdata, books, dispatch);
	};

	return (
		<div className="newbook">
			<div>
				{error && <h2 className="error">{error}</h2>}
				{isLoading && <h2 className="loading">Adding book...</h2>}
				<h1>Add Book</h1>
				<form onSubmit={handleSubmit(newBook)}>
					<label>
						<p>Title</p>
						<input
							type="title"
							name="title"
							{...register("title", {
								required: "Introduce an title",
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
						text={"Add"}
					/>
				</form>
			</div>
		</div>
	);
};
export default NewBook;