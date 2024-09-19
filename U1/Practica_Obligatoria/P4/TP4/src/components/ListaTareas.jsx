import { Tarea } from './Tarea'
import { useState } from 'react'
import '../styles/listaTareas.css'

export const ListaTareas = () => {
    const[tareas, setTareas]=useState([]);
    const[input, setInput]=useState('');

    const botonEliminar =(valor)=>{

      const tareasFiltradas = tareas.filter( (m)=> m !== valor)

      setTareas(tareasFiltradas);

    }

    const botonAgregar=()=>{
      setTareas(tareas => [...tareas, input]);
    }

    const inputHandler=(evento)=>{
      setInput(evento.target.value);
    }


  return (
    <div>
      <h3 className='listaTareas_titulo'>Agregar tarea nueva:</h3>
      <label className='listaTareas_label'> Nombre de la tarea</label>
      <input className='listaTareas_input' name='ingresoTarea' onChange={inputHandler}></input>
      <button className='listaTareas_boton' onClick={botonAgregar} >Agregar</button>
      <hr></hr>
      {
        tareas.map( (m,index)=> (<Tarea key={index} name={m} onClickEliminar={botonEliminar} ></Tarea>)  )
      }
      
    </div>
  )
}
