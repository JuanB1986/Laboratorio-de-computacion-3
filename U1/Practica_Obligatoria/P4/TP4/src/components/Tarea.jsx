import React, { useState } from 'react'
import '../styles/tarea.css'

export const Tarea = (props) => {

    const {onClickEliminar} = props;
    const [styleState, setStyleState]=useState(false)

    const estiloTachado ={
        textDecoration: 'line-through',
    }
    const estiloNormal ={
        textDecoration: 'none'
    }

    const buttonEliminar =()=>{
        onClickEliminar(props.name)
    }

    const buttonHecho=()=>{
        setStyleState(!styleState)
    }

  return (
    <div className='tarea_contenedor'>
    <table className='tarea_tabla'>
        <tbody>
            <tr>
                <td className='tarea_celda' key={0} style={styleState ? estiloTachado:estiloNormal}>{props.name}</td>
                <td  key={1}><button className='tarea_boton' onClick={buttonHecho}>Hecha</button></td>
                <td  key={2}><button className='tarea_boton' onClick={buttonEliminar}>Eliminar</button></td>            
            </tr>
        </tbody> 
    </table> 
    </div>
 
  )
}
