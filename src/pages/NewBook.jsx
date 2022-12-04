import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../components/Button";
import { postNewBook } from "../redux/books/books.functions";
import './styles/Create.scss';

const NewBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

let navigate = useNavigate();
const dispatch = useDispatch();

const postBook = (dataForm) => {
	const formData = new FormData();
	formData.append('title', dataForm.title);
	formData.append('img', dataForm.img);
	formData.append('author', dataForm.author);
	formData.append('genre', dataForm.genre);
	formData.append('synopsis', dataForm.synopsis);
	dispatch(postNewBook(formData, navigate))
}

return (
	<div className="create">
	<h1>New Book</h1>
	<form onSubmit= {handleSubmit(postBook)}>
		<label>
			Título
			<input type="text" name='title' {...register('title', {
				required: 'Introduce un título'
			})} />
		</label>
			{errors.title ? <>
			{errors.title.type === 'required' && <p>{errors.title.message}</p>}
			</> : null}
		<label>
			Foto Portada
			<input type="file" name='img' {...register('img', {
				required: 'Inserta una foto de portada'
			})} />
		</label>
			{errors.img ? <p>Adjunta una imagen</p> : null}
		<label>
			Autor
			<input type="text" name='author' {...register('author', {
				required: 'Introduce el nombre de un/a autor/a'
			})} />
		</label>
			{errors.author ? <p>Introduce el nombre de un/a autor/a</p> : null}
			
		<label>
			Género
			<input type="text" name='genre' {...register('genre', {
				required: 'Introduce un género literario'
			})} />
		</label>
			{errors.genre ? <p>Introduce un género literario</p> : null}
		<label>
			Sinopsis
			<textarea rows='10' name='synopsis' {...register('synopsis', {
				required: 'Introduce una sinopsis'
			})} />
		</label>
			{errors.synopsis ? <p>Inserta una sinopsis en el área de texto</p> : null}
			
			<ReusableButton 
			clase={"newbook--btn"}
			text={'Crear'}/>


	</form>
	</div>
)

};

export default NewBook;

// import './styles/NewBook.scss';
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

// import ReusableButton from '../components/Button';
// import { postNewBook } from '../redux/books/books.functions';

// const NewBook = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm();
// 	const dispatch = useDispatch();
// 	const { books, error, isLoading } = useSelector((state) => state.books);

// 	const newBook = (formdata) => {
// 		formdata.img = formdata.img[0];

// 		postNewBook(formdata, books, dispatch);
// 	};

// 	return (
// 		<div className="newbook">
// 			<div>
// 				{error && <h2 className="error">{error}</h2>}
// 				{isLoading && <h2 className="loading">Adding book...</h2>}
// 				<h1>Add Book</h1>
// 				<form onSubmit={handleSubmit(newBook)}>
// 					<label>
// 						<p>Title</p>
// 						<input
// 							type="title"
// 							name="title"
// 							{...register("title", {
// 								required: "Introduce an title",
// 							})}
// 						/>
// 					</label>
// 					{errors.title && <p>{errors.title.message}</p>}
// 					<label>
// 						<p>Image</p>
// 						<input
// 							type="file"
// 							name="img"
// 							{...register("img", {
// 								required: "Introduce an image",
// 							})}
// 						/>
// 					</label>
// 					{errors.title && <p>{errors.title.message}</p>}
// 					<label>
// 						<p>Author</p>
// 						<input type="text" name="author" {...register("author")} />
// 					</label>
// 					<label>
// 						<p>Genre</p>
// 						<input type="text" name="genre" {...register("genre")} />
// 					</label>
// 					<label>
// 						<p>Synopsis</p>
// 						<input type="text" name="synopsis" {...register("synopsis")} />
// 					</label>
// 					<ReusableButton
// 						text={"Add"}
// 					/>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default NewBook;
