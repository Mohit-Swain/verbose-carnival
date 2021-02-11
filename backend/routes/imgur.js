const express = require('express');

const imgurController = require('../controllers/imgurController.js')

const imgurRouter = express.Router();

imgurRouter.post('/imgurUpload',imgurController.postImageImgur);

module.exports = imgurRouter;