import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Form from "./components/Form.jsx";
import Chart from "./components/Chart.jsx";
import AddTo from "./components/AddTo.jsx";
import Performance from "./components/Performance.jsx";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStock: "",
      currentData: [],
      portfolio: []
    };

    this.handleCurrentStock = this.handleCurrentStock.bind(this);
    this.getCurrentData = this.getCurrentData.bind(this);
    this.addToPortfolio = this.addToPortfolio.bind(this);
    this.getPortfolio = this.getPortfolio.bind(this);
    this.setFromPortfolio = this.setFromPortfolio.bind(this);
  }

  componentDidMount() {
    this.getCurrentData("spy");
    this.getPortfolio();
  }

  getPortfolio() {
    axios
      .get("http://localhost:7719/portfolio")
      .then(results => this.setState({ portfolio: results.data }))
      .catch(err => console.log(err));
  }

  handleCurrentStock(ticker) {
    this.setState({ currentStock: ticker });
    this.getCurrentData(ticker);
  }

  getCurrentData(ticker) {
    axios
      .get(`http://localhost:7719/getData?ticker=${ticker}`)
      .then(results => {
        this.setState({ currentData: results.data });
      })
      .catch(err => console.log(err));
  }

  addToPortfolio(entry, shares) {
    let stock = this.state.currentStock;
    let currentPrice = this.state.currentData[this.state.currentData.length - 1]["price"];
    let newTicker = {
      stock: stock,
      entry: entry,
      shares: shares,
      latest: currentPrice,
      data: this.state.currentData
    };
    this.setState({
      portfolio: [...this.state.portfolio, newTicker]
    });
    axios
      .post(
        `http://localhost:7719/portfolio?ticker=${newTicker.stock}&shares=${newTicker.shares}&entry=${newTicker.entry}&currentPrice=${newTicker.latest}&data=${
          newTicker.data
        }`
      )
      .catch(err => console.log(err));
  }

  setFromPortfolio(ticker) {
    this.getCurrentData(ticker);
  }

  render() {
    return (
      <Paper>
        <Grid container direction="column" justify="center">
        <Grid item style={{padding : 10}}>
          <Form handleCurrentStock={this.handleCurrentStock} />
          </Grid>
          <Grid item style={{padding : 10}}>
          <Chart data={this.state.currentData} portfolio={this.state.portfolio} />
          </Grid>
          <Grid item style={{padding : 10}}>
          <AddTo
            addToPortfolio={this.addToPortfolio}
            currentStock={this.state.currentStock}
            currentPrice={this.state.currentData[this.state.currentData.length - 1]}
          />
              </Grid>
          <Grid item style={{padding : 10}}>
          <Performance portfolio={this.state.portfolio} unrealized={this.state.unrealized} setFromPortfolio={this.setFromPortfolio} />
        </Grid>
        </Grid>
      </Paper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
