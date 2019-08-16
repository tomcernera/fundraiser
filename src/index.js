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
    this.getSectors = this.getSectors.bind(this);
    this.removeFromPortfolio = this.removeFromPortfolio.bind(this);
  }

  componentDidMount() {
    // this.getCurrentData("spy");
    this.getPortfolio();
    this.getSectors();
    const data = [
      { date: '2019-03-27', price: '279.6500', volume: '72224700' },
      { date: '2019-03-28', price: '280.7100', volume: '56238500' },
      { date: '2019-03-29', price: '282.4800', volume: '82186800' },
      { date: '2019-04-01', price: '285.8300', volume: '77617900' },
      { date: '2019-04-02', price: '285.9700', volume: '40070400' },
      { date: '2019-04-03', price: '286.4200', volume: '68243200' },
      { date: '2019-04-04', price: '287.1800', volume: '48997500' },
      { date: '2019-04-05', price: '288.5700', volume: '58621700' },
      { date: '2019-04-08', price: '288.7900', volume: '53566300' },
      { date: '2019-04-09', price: '287.3100', volume: '66142300' },
      { date: '2019-04-10', price: '288.2900', volume: '52601500' },
      { date: '2019-04-11', price: '288.2100', volume: '55093100' },
      { date: '2019-04-12', price: '290.1600', volume: '69727800' },
      { date: '2019-04-15', price: '289.9700', volume: '49596700' },
      { date: '2019-04-16', price: '290.1600', volume: '52153200' },
      { date: '2019-04-17', price: '289.4500', volume: '58268300' },
      { date: '2019-04-18', price: '290.0200', volume: '68708500' },
      { date: '2019-04-22', price: '290.2700', volume: '40160100' },
      { date: '2019-04-23', price: '292.8800', volume: '52246600' },
      { date: '2019-04-24', price: '292.2300', volume: '50392900' },
      { date: '2019-04-25', price: '292.0500', volume: '57770900' },
      { date: '2019-04-26', price: '293.4100', volume: '50916400' },
      { date: '2019-04-29', price: '293.8700', volume: '57197700' },
      { date: '2019-04-30', price: '294.0200', volume: '81111700' },
      { date: '2019-05-01', price: '291.8100', volume: '71671900' },
      { date: '2019-05-02', price: '291.1800', volume: '65030200' },
      { date: '2019-05-03', price: '294.0300', volume: '56543700' },
      { date: '2019-05-06', price: '292.8200', volume: '107198100' },
      { date: '2019-05-07', price: '287.9300', volume: '144729900' },
      { date: '2019-05-08', price: '287.5300', volume: '91568300' },
      { date: '2019-05-09', price: '286.6600', volume: '103471100' },
      { date: '2019-05-10', price: '288.1000', volume: '112429300' },
      { date: '2019-05-13', price: '280.8600', volume: '127290500' },
      { date: '2019-05-14', price: '283.4000', volume: '77003200' },
      { date: '2019-05-15', price: '285.0600', volume: '73956400' },
      { date: '2019-05-16', price: '287.7000', volume: '76749600' },
      { date: '2019-05-17', price: '285.8400', volume: '100353000' },
      { date: '2019-05-20', price: '283.9500', volume: '62877600' },
      { date: '2019-05-21', price: '286.5100', volume: '46847100' },
      { date: '2019-05-22', price: '285.6300', volume: '49482500' },
      { date: '2019-05-23', price: '282.1400', volume: '98733800' },
      { date: '2019-05-24', price: '282.7800', volume: '55268100' },
      { date: '2019-05-28', price: '280.1500', volume: '70029400' },
      { date: '2019-05-29', price: '278.2700', volume: '104972900' },
      { date: '2019-05-30', price: '279.0300', volume: '62523800' },
      { date: '2019-05-31', price: '275.2700', volume: '86862800' },
      { date: '2019-06-03', price: '274.5700', volume: '96428000' },
      { date: '2019-06-04', price: '280.5300', volume: '77231900' },
      { date: '2019-06-05', price: '282.9600', volume: '71169700' },
      { date: '2019-06-06', price: '284.8000', volume: '69430400' },
      { date: '2019-06-07', price: '287.6500', volume: '74272200' },
      { date: '2019-06-10', price: '288.9700', volume: '60799100' },
      { date: '2019-06-11', price: '288.9000', volume: '58641300' },
      { date: '2019-06-12', price: '288.3900', volume: '47096300' },
      { date: '2019-06-13', price: '289.5800', volume: '48945200' },
      { date: '2019-06-14', price: '289.2600', volume: '52324700' },
      { date: '2019-06-17', price: '289.3700', volume: '39205700' },
      { date: '2019-06-18', price: '292.4000', volume: '85434800' },
      { date: '2019-06-19', price: '293.0600', volume: '78674400' },
      { date: '2019-06-20', price: '295.8600', volume: '116570000' },
      { date: '2019-06-21', price: '294.0000', volume: '83309500' },
      { date: '2019-06-24', price: '293.6400', volume: '47582700' },
      { date: '2019-06-25', price: '290.7600', volume: '82028700' },
      { date: '2019-06-26', price: '290.4700', volume: '51584900' },
      { date: '2019-06-27', price: '291.5000', volume: '40355200' },
      { date: '2019-06-28', price: '293.0000', volume: '59350900' },
      { date: '2019-07-01', price: '295.6600', volume: '79107500' },
      { date: '2019-07-02', price: '296.4300', volume: '61504500' },
      { date: '2019-07-03', price: '298.8000', volume: '40898900' },
      { date: '2019-07-05', price: '298.4600', volume: '51677300' },
      { date: '2019-07-08', price: '296.8200', volume: '45841800' },
      { date: '2019-07-09', price: '297.1900', volume: '41101300' },
      { date: '2019-07-10', price: '298.6100', volume: '58448500' },
      { date: '2019-07-11', price: '299.3100', volume: '50826100' },
      { date: '2019-07-12', price: '300.6500', volume: '40326000' },
      { date: '2019-07-15', price: '300.7500', volume: '33900000' },
      { date: '2019-07-16', price: '299.7100', volume: '36650100' },
      { date: '2019-07-17', price: '297.7400', volume: '36036300' },
      { date: '2019-07-18', price: '298.8300', volume: '51392600' },
      { date: '2019-07-19', price: '297.1700', volume: '58678600' },
      { date: '2019-07-22', price: '297.9000', volume: '43638100' },
      { date: '2019-07-23', price: '300.0300', volume: '44564500' },
      { date: '2019-07-24', price: '301.4400', volume: '47213200' },
      { date: '2019-07-25', price: '300.0000', volume: '55394100' },
      { date: '2019-07-26', price: '302.0100', volume: '45084100' },
      { date: '2019-07-29', price: '301.4600', volume: '38126500' },
      { date: '2019-07-30', price: '300.7200', volume: '45849000' },
      { date: '2019-07-31', price: '297.4300', volume: '104245200' },
      { date: '2019-08-01', price: '294.8400', volume: '142646600' },
      { date: '2019-08-02', price: '292.6200', volume: '116749700' },
      { date: '2019-08-05', price: '283.8200', volume: '178745400' },
      { date: '2019-08-06', price: '287.8000', volume: '120711700' },
      { date: '2019-08-07', price: '287.9700', volume: '140572300' },
      { date: '2019-08-08', price: '293.6200', volume: '87713900' },
      { date: '2019-08-09', price: '291.6200', volume: '93730000' },
      { date: '2019-08-12', price: '288.0700', volume: '62629500' },
      { date: '2019-08-13', price: '292.5500', volume: '94299800' },
      { date: '2019-08-14', price: '283.9000', volume: '135622100' },
      { date: '2019-08-15', price: '284.6500', volume: '99556600' },
      { date: '2019-08-16', price: '286.9400', volume: '6472098' }
    ]
    this.setState({currentData : data})
  }

  getSectors(){
    // axios.get("http://localhost:7719/sectors")
    // .then(results=>this.setState({sector : [results.data]}))
    // .catch(err=>console.log(err))
    const sector = [
      {name:"Consumer Staples", performance: "1.51%"},
     {name: "Real Estate",performance: "1.34%"},
      {name:"Utilities",performance: "1.26%"},
      {name:"Communication Services",performance: "0.48%"},
      {name:"Health Care",performance: "0.35%"},
      {name:"Financials",performance: "0.31%"},
      {name:"Materials",performance: "-0.01%"},
      {name:"Consumer Discretionary",performance: "-0.08%"},
      {name:"Information Technology",performance: "-0.19%"},
      {name:"Industrials",performance: "-0.23%"},
      {name:"Energy",performance: "-0.52%"}
  ]
  this.setState({sector : sector})
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
    let unrealizedpercent = ((currentPrice - entry)/entry)*100;
    let newTicker = {
      stock: stock,
      entry: entry,
      shares: shares,
      latest: currentPrice,
      data: this.state.currentData,
      unrealizedpercent : unrealizedpercent.toFixed(2)
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

  removeFromPortfolio(ticker){
    axios.delete(`http://localhost:7719/portfolio?ticker=${ticker}`)
      .then(()=> this.getPortfolio())
      .catch(err=>console.log(err))
  }

  render() {
    return (
      <Paper>
        <Grid container direction="column" justify="center">
        <Grid item style={{padding : 10}}>
          <Form handleCurrentStock={this.handleCurrentStock} />
          </Grid>
          <Grid item style={{padding : 10}}>
          <Chart data={this.state.currentData} portfolio={this.state.portfolio} sector={this.state.sector} currentStock={this.state.currentStock} />
          </Grid>
          <Grid item style={{padding : 10}}>
          <AddTo
            addToPortfolio={this.addToPortfolio}
            currentStock={this.state.currentStock}
            currentPrice={this.state.currentData[this.state.currentData.length - 1]}
          />
              </Grid>
          <Grid item style={{padding : 10}}>
          <Performance portfolio={this.state.portfolio} unrealized={this.state.unrealized} setFromPortfolio={this.setFromPortfolio} removeFromPortfolio={this.removeFromPortfolio}/>
        </Grid>
        </Grid>
      </Paper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
