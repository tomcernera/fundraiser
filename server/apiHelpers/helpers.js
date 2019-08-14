const apiKey = require('../../config/keys.js');
const axios = require('axios');


module.exports = {
  currentData : (req,res) => axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${req.query.ticker}&apikey=${apiKey}`)
    .then(results =>{ 
      let EOD = [];
      for (let dates in results.data["Time Series (Daily)"]){
        let price = {};
        price['date'] = dates;
        price['price'] = results.data["Time Series (Daily)"][dates]["4. close"];
        // price[dates] = results.data["Time Series (Daily)"][dates]["4. close"]
        EOD.push(price)
      }
      console.log(EOD);
      res.send(EOD)})
    .catch(err => {console.log(err); res.sendStatus(500)})
}
