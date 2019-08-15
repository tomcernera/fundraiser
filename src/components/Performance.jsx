import React from "react";

const Performance = ({portfolio,setFromPortfolio}) => {

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
      <td onClick={()=>{setFromPortfolio(stock.stock)}}>{stock.stock}</td>
      <td>{stock.entry}</td>
      <td>{stock.shares}</td>
      <td>{unrealizedPercent(stock.entry, stock.latest)}</td>
      <td>{unrealizedGain(stock.entry, stock.latest, stock.shares)}</td>
      </tr> 
    })}
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
  </tbody>
  </table>
  )
}

export default Performance;