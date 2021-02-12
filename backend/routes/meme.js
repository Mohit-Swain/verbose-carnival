/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *           name: Alexander
 *           email: fake@email.com
 */

const express = require('express');
const memeController = require('../controllers/memeController');

const memeRouter = express.Router();

memeRouter.get('/memes',memeController.getMemes);

memeRouter.post('/memes',memeController.postMemes);

memeRouter.patch('/memes/:id',memeController.patchMemes);

module.exports = memeRouter;