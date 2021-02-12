const { DataTypes, Model } = require('sequelize');
const sequelize = require('./db.js');

class Meme extends Model{}

Meme.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type : DataTypes.STRING,
        allowNull: false   
    },
    url:{
        type : DataTypes.STRING(1101),
        allowNull: false
    },
    caption: {
        type : DataTypes.STRING(3001),
        defaultValue : ''
    }
},{
    sequelize,
    modelName : 'meme',
    timestamps : true
});

module.exports = Meme;