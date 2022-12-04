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
    formData.append('location', JSON.stringify({type: "Point", coordinates: [dataForm.latitud, dataForm.longitud]}));
    formData.append('address', dataForm.address);
    formData.append('phone', dataForm.phone);
    console.log()
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
        <input type='text' name='longitud' {...register('longitud', {
          required: 'Introduce las coordenadas'
        })} />
      </label>
      {errors.longitud ? <p>Introduce las coordenadas</p> : null}
      <label>
        Latitud
        <input type='text' name='latitud' {...register('latitud', {
          required: 'Introduce las coordenadas'
        })} />
      </label>
        {errors.latitud ? <p>Introduce las coordenadas</p> : null}
        
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