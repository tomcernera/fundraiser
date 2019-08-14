import React from "react";

const Performance = ({portfolio}) => {

  const unrealized =(entry, current) => {
    return ((current - entry) / entry)*100 + '%';
  }


  return(
    <table>
  <tbody>
    <tr>
      <th>Symbol</th>
      <th>Entry</th>
      <th>Unrealized</th>
    </tr>
    {portfolio.map((stock,idx) => {
      return <tr key={idx}>
      <td>{stock.stock}</td>
      <td>{stock.entry}</td>
      <td>{unrealized(stock.entry, stock.current)}</td>
      </tr> 
    })}
  </tbody>
  </table>
  )
}

export default Performance;