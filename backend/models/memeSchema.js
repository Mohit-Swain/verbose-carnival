const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/db.js');

/**
 * @swagger
 * components:
 *  schemas:
 *    Meme:
 *      type: object
 *      required:
 *        - name
 *        - url
 *        - caption
 *      properties:
 *        id:
 *          type: integer
 *          description: An unique id
 *        name:
 *          type: string
 *          minLength: 1
 *          description: name of the meme maker
 *        url:
 *          type: string
 *          minLength: 1
 *          description: URL of the meme in the net
 *        caption:
 *          type: string
 *          minLength: 1
 *          description: description of the meme
 *                
 */

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