import React from 'react'

const Table = ({arrayTable}) => {
  return (
    <div>
      <table className='classTable'>
        <caption className='classCaption'>Tabla Marcas</caption>
          <thead>
            <tr>
                <th>Brand</th>
                <th>Income</th>
            </tr>
          </thead>
        <tbody>
          {arrayTable.map((m,index) => 
            ( <tr key={index}>
                <td className='classCell'>{m.brand}</td>
                <td className='classCell'>{m.income}</td>
              </tr>)     
            )
          }
        </tbody>
      </table>
      <p>Promedio {arrayTable.reduce( (acum, val)=>acum += parseInt(val.income),0)/parseInt(arrayTable.length)}</p>
    </div>
  )
}

export default Table
