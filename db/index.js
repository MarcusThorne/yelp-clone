// Requring the dotenv file
require('dotenv').config();

const { Pool } = require('pg');

const devConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
}

const proConfig = {
  connectionString: process.env.DATABASE_URL // heroku addons
}

const pool = new Pool(
  process.env.NODE_ENV == "production" ? proConfig : devConfig
);

module.exports = {
  query: (text, params) => pool.query(text, params)
};
