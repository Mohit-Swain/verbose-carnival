cd backend/
rm .env

touch .env

echo -e "IMGUR_CLIENT_ID=e3c357d5aa7c35d" >> .env
echo -e "DB_PASSWORD=1234" >> .env


npm install

node bin/www
