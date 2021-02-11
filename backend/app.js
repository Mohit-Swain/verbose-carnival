const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const {v4} = require('uuid');
const app = express();
const multer = require('multer');
const path = require('path');

require('dotenv').config();

global.__basedir = __dirname;

app.use(cors());
app.use(logger('dev'));
app.use(express.json({limit : '5mb'}));
app.use(express.urlencoded({ extended: false }));

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
            // cb(null, false);
            console.log('here');
            const error = new Error('Only .png, .jpg and .jpeg format allowed!');
            error.code = '400'
            return cb(error);
        }
    }
});

const imgurRouter = require('./routes/imgur.js');
app.use(upload.single('image'),imgurRouter);

app.get('/',(_,res) =>{
    return res.send('Hello How do you do');
})

// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next ) {
    console.error(err.stack)
    res.status(err.code).send(err.message || 'Something broke!')
})
  


module.exports = app;
