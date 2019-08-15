const { Pool } = require('pg')


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'portfolio',
  port: 3211,
})


module.exports = {
  get: (ticker,EOD) => {
    // pool.query ()
    //   .then()
    //   .catch()
  },
  set : (ticker,EOD) => {
   console.log(ticker, EOD[0])
  }
}

