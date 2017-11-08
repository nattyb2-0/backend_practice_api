
//require postgress conection
const pg = require('pg-promise')({});

//get env variable to our pg object
const pgConfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD };

//pass those env variable to postgress
const db = pg(pgConfig || process.env.DATABASE_URL);

//export module to be able to use later
module.exports = db;
