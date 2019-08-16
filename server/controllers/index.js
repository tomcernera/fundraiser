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
  },
  addPortfolio : (req,res) => {
    let ticker = req.query.ticker;
    let shares = req.query.shares;
    let entry = req.query.entry;
    let currentPrice = req.query.currentPrice;
    db.set(ticker, shares, entry, currentPrice)
      .then(()=>res.sendStatus(201))
      .catch(err => {console.log(err); res.sendStatus(555)})
  },
  getPortfolio : (req,res) => {
    db.get()
      .then(result => res.send(result.rows))
      .catch(err => {console.log(err); res.sendStatus(500)})
  },
  getSectors : (req,res) => {
    api.sectorData()
      .then(results => res.send(results.data))
      .catch(err => {console.log(err); res.sendStatus(500)})
  }
}