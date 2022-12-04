import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReusableButton from '../components/Button';
import { putBook } from '../redux/books/books.functions';

const PutBook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    const editBook = (dataForm) => {
        const formData = new FormData();
        formData.append('title', dataForm.getBookById('title'));
        formData.append('img', dataForm.getBookById('img'));
        formData.append('author', dataForm.getBookById('author'));
        formData.append('genre', dataForm.getBookById('genre'));
        formData.append('synopsis', dataForm.getBookById('synopsis'));
        dispatch(putBook(formData, navigate))
    }

  return (
    <form onSubmit= {handleSubmit(editBook)}>
		<label>
			Título
			<input type="text" name='title' {...register('title', {
				// required: 'Introduce un título'
			})} />
		</label>
			{errors.title ? <>
			{errors.title.type === 'required' && <p>{errors.title.message}</p>}
			</> : null}
		<label>
			Foto Portada
			<input type="file" name='img' {...register('img', {
				// required: 'Inserta una foto de portada'
			})} />
		</label>
			{errors.img ? <p>Adjunta una imagen</p> : null}
		<label>
			Autor
			<input type="text" name='author' {...register('author', {
				// required: 'Introduce el nombre de un/a autor/a'
			})} />
		</label>
			{errors.author ? <p>Introduce el nombre de un/a autor/a</p> : null}
			
		<label>
			Género
			<input type="text" name='genre' {...register('genre', {
				// required: 'Introduce un género literario'
			})} />
		</label>
			{errors.genre ? <p>Introduce un género literario</p> : null}
		<label>
			Sinopsis
			<textarea rows='10' name='synopsis' {...register('synopsis', {
				// required: 'Introduce una sinopsis'
			})} />
		</label>
			{errors.synopsis ? <p>Inserta una sinopsis en el área de texto</p> : null}
			
			<ReusableButton 
			clase={"putbook--btn"}
			text={'Actualizar'}/>


	</form>
  )
}

export default PutBook;