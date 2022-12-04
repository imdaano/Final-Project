import { response } from 'express';
import React from 'react';
import swal from 'sweetalert';

const showAlert = () => {

    swal({
        title:'titulo',
        text:'Este es el parrafo',
        icon:'success',    //tipos de icons:info-warning-error
        button:'Ok',
        // timer:'2000'

    })
}

const deleteAlert = () => {

    swal({
        title:'eliminar',
        text:'Estas seguro que desea eliminar?',
        icon:'warning',    //tipos de icons:info-warning-error
        button:['Borrar', 'Cancelar']
        // timer:'2000'

    }).then(respuesta =>{
        if (respuesta) {
            swal({text:'Se ha borrado correctamente', 
        icon:'success'
    })
        }
    })
}

const Alerts = () => {
  return (
    <div>
        <button onClick={() => showAlert() }>Alerta</button>
    </div>
  )
}

export default Alerts