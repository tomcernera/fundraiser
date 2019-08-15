import React from "react";

const Performance = ({portfolio}) => {

  const unrealizedPercent=(entry, current) => {
    let unrealizedPercent = ((current - entry) / entry)*100
    return unrealizedPercent.toFixed(2) + '%';
  }
  const unrealizedGain=(entry, current,shares) => {
    let unrealizedGain = (current - entry)*shares
    return '$'+unrealizedGain.toFixed(2);
  }


  return(
    <table>
  <tbody>
    <tr>
      <th>Symbol</th>
      <th>Entry</th>
      <th>Shares</th>
      <th>Unrealized %</th>
      <th>Unrealized $</th>
    </tr>
    {portfolio.map((stock,idx) => {
      return <tr key={idx}>
      <td>{stock.stock}</td>
      <td>{stock.entry}</td>
      <td>{stock.shares}</td>
      <td>{unrealizedPercent(stock.entry, stock.current)}</td>
      <td>{unrealizedGain(stock.entry, stock.current, stock.shares)}</td>
      </tr> 
    })}
  </tbody>
  </table>
  )
}

export default Performance;