const {Sequelize} = require('sequelize');
require('dotenv').config();
let sequelize;
// heroku
if(process.env.DATABASE_URL){
  sequelize = new Sequelize(process.env.DATABASE_URL);
}
else{
  sequelize = new Sequelize('memedb','postgres',process.env.DB_PASSWORD,{
    dialect: 'postgres',
    hist: 'localhost',
    port: 5432,
    logging: false,
  })
}


module.exports = sequelize;
