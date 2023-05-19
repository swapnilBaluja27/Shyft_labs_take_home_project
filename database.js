const mysql = require('mysql2/promise');
require('dotenv').config()
const db = mysql.createPool({
    host:process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBPassword,
    database: process.env.DBName,
    connectionLimit: 5
  });
  
  module.exports = db;