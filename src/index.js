import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Form from './components/Form.jsx';
import Chart from './components/Chart.jsx';
import Performance from './components/Performance.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStock : '',
      currentData : [],
      portfolio:[{stock : 'stock1', entry : 100, current : 200},
      {stock : 'stock2', entry : 10, current : 35},
      {stock : 'stock3', entry : 100, current : 80},
      {stock : 'stock4', entry : 100, current : 111}]
    };

    this.handleCurrentStock = this.handleCurrentStock.bind(this);
    this.getCurrentData = this.getCurrentData.bind(this);
    this.addToPortfolio = this.addToPortfolio.bind(this);
  }

  handleCurrentStock(ticker){
    this.setState({currentStock : ticker})
    this.getCurrentData(ticker);
  }

  getCurrentData(ticker){
    const data = 
[
  { date: '2019-08-14', price: '285.4500' },
  { date: '2019-08-13', price: '292.5500' },
  { date: '2019-08-12', price: '288.0700' },
  { date: '2019-08-09', price: '291.6200' },
  { date: '2019-08-08', price: '293.6200' },
  { date: '2019-08-07', price: '287.9700' },
  { date: '2019-08-06', price: '287.8000' },
  { date: '2019-08-05', price: '283.8200' }]
    // axios.get(`http://localhost:7719/currentData?ticker=${ticker}`)
    //   .then(results =>{
    //     this.setState({currentData : results.data})})
    //   .catch(err => console.log(err))
    this.setState({currentData : data})
  }

  addToPortfolio(ticker){
    let newTicker = {
      stock : ticker,
      entry : 0,
      current : 0
    }
    this.setState({portfolio : [...this.state.portfolio, newTicker]})
  }

  render() {
    return (
      <React.Fragment>
        <Form handleCurrentStock={this.handleCurrentStock}
              addToPortfolio={this.addToPortfolio}/>
        <Chart data={this.state.currentData}/>
        <Performance portfolio={this.state.portfolio}/>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("app"));