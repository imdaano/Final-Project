import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReusableButton from '../components/Button';
import { postNewCheckpoint } from '../redux/checkpoint/checkpoint.functions';

const NewCheckpoint = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
  let navigate = useNavigate();
  const dispatch= useDispatch();
  
  const postCheckpoint = (dataForm) => {
    const formData = new FormData();
    formData.append('name', dataForm.name);
    formData.append('img', dataForm.img);
    formData.append('location.coordinates', dataForm.location.coordinates[0]);
    formData.append('location.coordinates', dataForm.location.coordinates[1]);
    formData.append('address', dataForm.address);
    formData.append('phone', dataForm.phone);
    dispatch(postNewCheckpoint(formData, navigate))
  }
  
  return (
    <form onSubmit= {handleSubmit(postCheckpoint)}>
      <label>
        Nombre
        <input type="text" name='name' {...register('name', {
          required: 'Nombre del establecimiento'
        })} />
      </label>
        {errors.name ? <>
        {errors.name.type === 'required' && <p>{errors.name.message}</p>}
        </> : null}
      <label>
        Imagen
        <input type="file" name='img' {...register('img', {
          required: 'Inserta una imagen'
        })} />
      </label>
        {errors.img ? <p>Adjunta una imagen</p> : null}
      <label>
        Longitud
        <input type='[number]' name='location.coordinates' {...register('location.coordinates[0]', {
          required: 'Introduce las coordenadas'
        })} />
      </label>
      {errors.location.coordinates[0] ? <p>Introduce las coordenadas</p> : null}
      <label>
        Latitud
        <input type='[number]' name='location.coordinates[1]' {...register('location.coordinates[1]', {
          required: 'Introduce las coordenadas'
        })} />
      </label>
        {errors.location.coordinates[1] ? <p>Introduce las coordenadas</p> : null}
        
      <label>
        Dirección
        <textarea rows='3' name='address' {...register('address', {
          required: 'Introduce la dirección'
        })} />
      </label>
        {errors.genre ? <p>Introduce la dirección</p> : null}
      <label>
        Teléfono
        <input type="text" name='phone' {...register('phone', {
          required: 'Introduce el número de teléfono'
        })} />
      </label>
        {errors.synopsis ? <p>Introduce el número de teléfono</p> : null}
        
        <ReusableButton 
        clase={"newCheckpoint--btn"}
        text={'Crear'}/>
    </form>
  )
}

export default NewCheckpoint;