const { Pool } = require('pg')


const pool = new Pool({
  user: 'tom',
  host: 'localhost',
  database: 'portfolio',
  password: 'tom',
  port: 5432
})


module.exports = {
  get: () => {
    return pool.query(`select * from portfolio`);
  },
  set : (ticker, shares, entry, currentPrice) => {
    const unrealized = (currentPrice - entry)*shares;
    const query = 'INSERT INTO portfolio (stock, entry, latest, shares, unrealized) VALUES ($1, $2, $3, $4, $5)'
    const values = [ticker, entry, currentPrice, shares,unrealized.toFixed(2)];
    return pool.query(query,values)
  }
}