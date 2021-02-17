const express = require('express');
const memeController = require('../controllers/memeController');

const memeRouter = express.Router();
/**
 * @swagger
 * tags:
 *   name: Memes
 *   description: Apis realated to Memes management
 */

/**
 * @swagger
 * paths:
 *  /memes:
 *    get:
 *      summary: it returns a list of memes.
 *      description: It returns an array of latest 100 memes, ordered by the most recent meme first.
 *      tags: [Memes]
 *      responses:
 *        "200":
 *          description: Query successful
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items: 
 *                  $ref: '#/components/schemas/Meme'
 *                minItems: 0
 *                maxItems: 100
 *              example:
 *                - id: 2
 *                  name: Mohit Swain
 *                  url: https://i.imgur.com/AbQzHEm.jpg
 *                  caption: How You Doin?
 *                - id: 1
 *                  name: Ashok Kumar
 *                  url: https://i.imgur.com/AbQzHEm.jpg
 *                  caption: Swag se Swagger
 */

memeRouter.get('/memes',memeController.getMemes);


/** 
 * @swagger
 * paths:
 *  /memes:
 *    post:
 *      summary: used to add new Memes
 *      tags: [Memes]
 * 
 *      requestBody:
 *        description: Need details about the meme to be added, **None of the fields should be Empty**
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Meme'
 *            example:
 *              name: Ram Mohan
 *              url: https://i.imgur.com/hsEAuGt.jpeg
 *              caption: Bazzinga
 * 
 *      responses:
 *        "201":
 *          description: resource successfully Created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer  
 *        "400":
 *          description: some arguments/values are missing
 *        "405":
 *          description: Invalid Inputs given
 *        "409":
 *          description: Exact duplicate element created
 */

memeRouter.post('/memes',memeController.postMemes);

/** 
 * @swagger
 * paths:
 *  /memes/{id}:
 *    patch:
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *            minimum: 1
 *          description: The Meme id
 *      
 *      summary: to update url and caption of the meme post
 *      description: to replace url and caption with a new valid value, with proper **Meme id** in the url parameter
 *      tags: [Memes]
 *      requestBody:
 *        description: Need new url and caption of the meme with the proper Meme Id,
 *                    **None of the fields should be Empty**, 
 *                    also both url and caption should be passed with the updated values, return the prev value if you don't want to change it.
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - url
 *                - caption
 *              url:
 *                type: string
 *                minLength: 1
 *                description: Updated URL of the meme in the net
 *              caption:
 *                type: string
 *                minLength: 1
 *                description: Updated description of the meme
 *            example:
 *              url: https://i.imgur.com/hsEAuGt.jpeg
 *              caption: Bazzinga
 *        
 *      responses:
 *        "200":
 *          description: resource successfully Updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Meme'
 *        "400":
 *          description: some Arguments are missing
 *        "404":
 *          description: No meme of such id found
 *        "405":
 *          description: Invalid id/values
 */

memeRouter.patch('/memes/:id',memeController.patchMemes);

/**
 * @swagger
 * paths:
 *  /memes/users:
 *    get:
 *      summary: it returns a user name along with count of memes posted by that user.
 *      description: It returns an array name and memeCount of all distinct users ordered by DESC memeCount.
 *      tags: [Memes]
 *      responses:
 *        "200":
 *          description: Query successful
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items: 
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                      description: user name of the meme creator
 *                    memeCount:
 *                      type: integer
 *                      description: count of memes posted by the user
 * 
 *              example:
 *                - name: Mohit Swain
 *                  memeCount: 5
 *                - name: Ashok Kumar
 *                  memeCount: 3
 */
memeRouter.get('/memes/users',memeController.getMemeUsers);

/** 
 * @swagger
 * paths:
 *  /memes/{id}:
 *    get:
 *      summary: to get a meme of id
 *      description: to get meme of the id given or get 404 if error is present.
 *      tags: [Memes]        
 *      responses:
 *        "200":
 *          description: resource successfully Updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Meme'
 *        "400":
 *          description: id is empty
 *        "404":
 *          description: No meme of such id found
 */

memeRouter.get('/memes/:id',memeController.getOneMeme);

module.exports = memeRouter;