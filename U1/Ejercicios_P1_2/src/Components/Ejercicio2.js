import React from 'react'
import beers from './Beers'

const Ejercicio2 = () => {
  return (
    <div>
        Ejercicio 2: Cervezas Disponibles
        <ul>
           {beers.filter((s)=>s.available == true).map((d)=>(<li>{d.beerName}</li>))}
        </ul>

    </div>
  )
}

export default Ejercicio2
