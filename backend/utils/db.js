const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('memedb','postgres',process.env.DB_PASSWORD,{
    dialect: 'postgres',
    hist: 'localhost',
    port: 5432,
    logging: false
})

module.exports = sequelize;