const apiKey = require('../../config/keys.js');
const axios = require('axios');


module.exports = {
  currentData : (ticker,callback) => axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${apiKey}`)
    .then(results =>{ 
      let EOD = [];
      for (let dates in results.data["Time Series (Daily)"]){
        let price = {};
        price['date'] = dates;
        price['price'] = results.data["Time Series (Daily)"][dates]["4. close"];
        price['volume'] = results.data["Time Series (Daily)"][dates]["5. volume"]
        EOD.unshift(price)
      }
     callback(null,EOD)})
    .catch(err => console.log(err))
}
