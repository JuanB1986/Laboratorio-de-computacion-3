import React, { useState } from 'react'
import './miEstilo.css'
const Loggin = () => {

    const usuario = 'juan';
    const [pass, setPass] = useState(""); 
    const [mensaje, SetMensaje] = useState("");

    const input_change = (event) =>{
        setPass(event.target.value)
    }

    const buttonClick = (event) => {

        if (pass=="" || pass.length==1){
            alert("Campo vacío o una sola letra")
        }

        if(pass.includes('o') | pass.includes('O')){
            SetMensaje("No usar la letra 'O' u 'o'");
        }
        else if(usuario == pass)
            {
                SetMensaje("Password correcto !");
            }
            else
            {
                SetMensaje("Password Incorrecto !");
            }
        } 

  return (
    <div>
        <label>Password: {usuario} </label>
        <br></br>
        <input id="input" type='text' value={pass} onChange={input_change}></input>
        <p id='pass'>{pass}</p>
        <button id="boton" onClick={buttonClick}>Ingresar</button>        
        <p>{mensaje}</p>
    </div>
  )
}

export default Loggin
