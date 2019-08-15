const api = require('../apiHelpers/helpers.js');
const db = require('../../db/index.js');

module.exports = {
  getData : (req,res) => {
    let ticker = req.query.ticker;
    api.currentData(ticker, (err, EOD) => {
      if (err) {
        console.log(err)
      } else {
      res.send(EOD)
      }
    })
  }
}