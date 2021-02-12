const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const {v4} = require('uuid');

const app = express();
const swaggerApp = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");
const sequelizeDB = require('./utils/memeSchema');

const multer = require('multer');
const path = require('path');

require('dotenv').config();


app.use(cors());
app.use(logger('dev'));
app.use(express.json({limit : '5mb'}));
app.use(express.urlencoded({ extended: false }));

// File storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'temp'));
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, v4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            const error = new Error('Only .png, .jpg and .jpeg format allowed!');
            error.code = '400'
            return cb(error);
        }
    }
});
// Swagger init 
const swaggerOptions = require('./swagger.json');

const specs = swaggerJsdoc(swaggerOptions);
swaggerApp.use(logger('dev'))
swaggerApp.use("/",swaggerUi.serve,swaggerUi.setup(specs));

const swaggerPort = process.env.SWAGGER_PORT || 8080;
swaggerApp.listen(swaggerPort,function(){
    console.log("swagger is listening on "+ swaggerPort);
});
// Sequelize init

sequelizeDB
    .sync({
        // force : true
    })
    .then(() => {
        console.log('DB Connected');
    })
    .catch(() => console.log('DB Not connected'))


  
// routes import
const imgurRouter = require('./routes/imgur.js');
const memeRouter = require('./routes/meme.js')
app.use(upload.single('image'),imgurRouter);
app.use(memeRouter);


app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.code = '404';
    next(error);
})

// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next ) {
    console.error(err);
    const statusCode = err.code || 500;
    const message = err.message || 'Something Went Wrong';
    return res.status(statusCode).json({
        status : statusCode,
        message : message
    });
})
  


module.exports = app;
