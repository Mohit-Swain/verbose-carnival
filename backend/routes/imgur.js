const express = require('express');

const imgurController = require('../controllers/imgurController.js')

const imgurRouter = express.Router();

/** 
 * @swagger
 * paths:
 *  /imgurUpload:
 *    post:
 *      summary: used to host the image in website and return the url
 */

imgurRouter.post('/imgurUpload',imgurController.postImageImgur);

module.exports = imgurRouter;