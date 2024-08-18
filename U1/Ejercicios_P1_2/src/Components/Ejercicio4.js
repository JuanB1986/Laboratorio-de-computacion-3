import React from 'react'
import beers from './Beers'

const Ejercicio4 = () => {

    let beerStyleSet = new Set(beers.map(m=>m.beerStyle))
    let beeStyleArray = Array.from(beerStyleSet)

  return (
    <div>
        Ejercicio 4: Tipos de cervezas       
      <ul>{beeStyleArray.map((m,index)=>(<li key={index}>{m}</li>))}</ul>
    </div>
  )
}

export default Ejercicio4
