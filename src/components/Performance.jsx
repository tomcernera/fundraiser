import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';



const Performance = ({portfolio,setFromPortfolio, removeFromPortfolio}) => {

  const unrealizedPercent=(entry, current) => {
    let unrealizedPercent = ((current - entry) / entry)*100
    return unrealizedPercent.toFixed(2);
  }
  const unrealizedGain=(entry, current,shares) => {
    let unrealizedGain = (current - entry)*shares
    return unrealizedGain.toFixed(2);
  }

  return(
    <table border="1" width="500">
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
      <td align="center" onClick={()=>{setFromPortfolio(stock.stock)}} style={{cursor:"pointer"}}>{stock.stock}</td>
      <td align="center">{stock.entry}</td>
      <td align="center">{stock.shares}</td>
      <td align="center" style={{color:unrealizedPercent(stock.entry, stock.latest) > 0 ? "green" : "red"}}>{unrealizedPercent(stock.entry, stock.latest)}%</td>
      <td align="center" style={{color:unrealizedGain(stock.entry, stock.latest, stock.shares) > 0 ? "green" : "red"}}>${unrealizedGain(stock.entry, stock.latest, stock.shares)}</td>
      <td align="center" onClick={()=>removeFromPortfolio(stock.stock)}><DeleteIcon style={{cursor:"pointer"}}/></td>
      </tr> 
    })}
  </tbody>
  </table>
  )
}

export default Performance;