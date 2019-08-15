const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'portfolio',
  port: 3211,
})

module.exports = pool;