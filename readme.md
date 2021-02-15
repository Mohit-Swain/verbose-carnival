# Meme App
### an web app to post memes and see different kinds of memes.

> ## Stacks  Used
---

## Frontend
### - ReactJs 
### - Tailwind CSS
### - Axios

## Backend
### - NodeJs
### - Postgres
### - Sequelize ORM
### - SwaggerUI
## Other
### - Rest API
### - Imgur AP

> ## Functionalities
---
### - I Designed frontend for both mobile and desktop users.(Not for Tablet users, sry)
### - Use Rest API's to connect to the backend and store the memes
### - can Create, update and view posts.
### - Can upload a local image to meme app to host a meme in imgur and use it's URL
### - can see the user leaderboad, based users and their meme count

> ## About the App
---

### - The backend runs on port `8081` and swagger runs on port `8080/swagger-ui` , Postgres should be running on it's default port `5432`, and the front-end React apps run in port `3000`.

### - All The Data will be stored in `memedb` Database in `memes` table.

### - About env variables 
>## Installation
---

### - use `npm start` (requires nodemon) to start backend server else use `node bin/wwww` , use `npm run start` to run frontend app.

### - **Ubuntu Users** Can set the backend by running `./test_server.sh` in the parnet folder, 

> - It Will install required packages and set up a postgres user by name: `postgres` and password `1234`.
> - You can visit your postgres and see the data by using `sudo -i -u postgres psql`


_More Updates are comming soon_

