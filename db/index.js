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
    const unrealizedPercent = ((currentPrice - entry)/entry) * 100;
    const unrealized = (currentPrice - entry)*shares;
    const query = 'INSERT INTO portfolio (stock, entry, latest, shares, unrealized, unrealizedPercent) VALUES ($1, $2, $3, $4, $5, $6)'
    const values = [ticker, entry, currentPrice, shares,unrealized.toFixed(2), unrealizedPercent.toFixed(2)];
    return pool.query(query,values)
  },
  remove : (ticker) => {
    const query = 'DELETE FROM portfolio where stock = $1'
    const values = [ticker];
    return pool.query(query,values)
  }
}