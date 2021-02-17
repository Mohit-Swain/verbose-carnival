cd ./backend

rm .env
# setting up .env files
touch .env

echo -e "IMGUR_CLIENT_ID=e3c357d5aa7c35d" >> .env
echo -e "DB_PASSWORD=1234" >> .env


npm install
# launch app
node bin/www
