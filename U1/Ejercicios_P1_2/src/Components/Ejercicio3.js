import React from 'react'


const Ejercicio3 = ({props}) => {

  return (
    <div>
        Ejercicio 3: Cantidad IPA y RED
        <p>cantidad IPA: {props.filter((f)=>f.beerStyle=='IPA').length}</p>
        <p>cantidad RED: {props.filter((f)=>f.beerStyle=='Red').length}</p>
    </div>
  )
}

export default Ejercicio3
