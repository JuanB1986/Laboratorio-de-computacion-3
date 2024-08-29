import React from 'react'
import PropTypes from 'prop-types'

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


Table.propTypes = {
    brand: PropTypes.string,
    income: PropTypes.number
};

export default Table
