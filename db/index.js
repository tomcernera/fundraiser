const { Pool } = require('pg')


const pool = new Pool({
  user: 'tom',
  host: 'localhost',
  database: 'portfolio',
  password: 'tom',
  port: 5432
})


module.exports = {
  get: (ticker,EOD) => {
    // pool.query ()
    //   .then()
    //   .catch()
  },
  set : (ticker, shares, entry, currentPrice) => {
    const query = 'INSERT INTO portfolio (stock, entry, latest, shares) VALUES ($1, $2, $3, $4)'
    const values = [ticker, entry, currentPrice, shares];
    return pool.query(query,values)
  }
}