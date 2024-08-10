import React from 'react'
import beers from './Beers'


const Ejercicio1 = () => {
    const DOLAR = 1320.0;
  return (
    <div>
        Ejercicio 1
      <ul>
        {beers.map((a,index)=>(<li key={index}>{a.beerName} - ${a.price*DOLAR}</li>))}
      </ul>
    </div>
  )
}

export default Ejercicio1
