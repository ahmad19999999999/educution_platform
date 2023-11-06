const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect:'mysql',
    url: process.env.DATABASE_URL,
  }}



  const sequelize = new Sequelize({
    username:config.development.username,
     password:config.development.password,
     database:config.development.database,
     
       host: config.development.host,
       dialect:config.development.dialect,
       url:config.development.url
      
     
     
     });
module.exports = sequelize;
