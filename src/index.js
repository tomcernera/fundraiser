import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Form from './components/Form.jsx';
import Chart from './components/Chart.jsx';
import AddTo from './components/AddTo.jsx';
import Performance from './components/Performance.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStock : '',
      currentData : [],
      portfolio:[]
    };

    this.handleCurrentStock = this.handleCurrentStock.bind(this);
    this.getCurrentData = this.getCurrentData.bind(this);
    this.addToPortfolio = this.addToPortfolio.bind(this);
  }

  componentDidMount(){
    this.getCurrentData('spy')
  }

  handleCurrentStock(ticker){
    this.setState({currentStock : ticker})
    this.getCurrentData(ticker);
  }

  getCurrentData(ticker){
//     const data = 
// [
//   { date: '2019-08-14', price: '285.4500' },
//   { date: '2019-08-13', price: '292.5500' },
//   { date: '2019-08-12', price: '288.0700' },
//   { date: '2019-08-09', price: '291.6200' },
//   { date: '2019-08-08', price: '293.6200' },
//   { date: '2019-08-07', price: '287.9700' },
//   { date: '2019-08-06', price: '287.8000' },
//   { date: '2019-08-05', price: '283.8200' }]
//   this.setState({currentData : data})
    axios.get(`http://localhost:7719/getData?ticker=${ticker}`)
      .then(results =>{
        this.setState({currentData : results.data})})
      .catch(err => console.log(err))
  }

  addToPortfolio(entry,shares){
    let stock = this.state.currentStock;
    let currentPrice = this.state.currentData[this.state.currentData.length-1]['price']
    let newTicker = {
      stock : stock,
      entry : entry,
      shares : shares,
      current : currentPrice
    }
    this.setState({portfolio : [...this.state.portfolio, newTicker]})
  }

  render() {
    return (
      <React.Fragment>
        <Form handleCurrentStock={this.handleCurrentStock}/>
        <Chart data={this.state.currentData}/>
        <AddTo addToPortfolio={this.addToPortfolio}
                currentStock={this.state.currentStock}
                currentPrice={this.state.currentData[this.state.currentData.length-1]}/>
        <Performance portfolio={this.state.portfolio}/>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("app"));