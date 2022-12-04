import React from 'react';
import swal from 'sweetalert';

export const showAlert = () => {

    swal({
        title:'titulo',
        text:'Este es el parrafo',
        icon:'success',    //tipos de icons:info-warning-error
        button:'Accept',
        // timer:'2000'

    })
}


export const deleteAlert = () => {

    return swal({
        title:'eliminar',
        text:'Está seguro de que desea eliminar este elemento?',
        icon:'warning',    //tipos de icons:info-warning-error
        button:['Oh, no!', 'Ok!']
        // timer:'2000'
    }).then(respuesta =>{
        if (respuesta === 'Ok!') {
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