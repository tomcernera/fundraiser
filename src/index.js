import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Form from './components/Form.jsx';
import Chart from './components/Chart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStock : '',
      currentData : []
    };

    this.handleCurrentStock = this.handleCurrentStock.bind(this);
    this.getCurrentData = this.getCurrentData.bind(this);
  }

  handleCurrentStock(ticker){
    this.setState({currentStock : ticker})
    this.getCurrentData(ticker);
  }

  getCurrentData(ticker){
    axios.get(`http://localhost:7719/currentData?ticker=${ticker}`)
      .then(results =>{
        this.setState({currentData : results.data})})
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <Form handleCurrentStock={this.handleCurrentStock}/>
        <Chart data={this.state.currentData}/>
        {/* <Performance />
        <WatchList /> */}
      </React.Fragment>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("app"));