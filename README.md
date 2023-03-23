# Favourite products
Laravel API + React web app showing products and auth users can add them to their favourite list. Auth is powered by 
Laravel passport

## Prerequistes
* Make sure that localhost and mysql servers are up
* PHP version >=8.1 and NodeJs 18.15.0

## Installation instructions
* Migrate ```php artisan migrate```
* Install passport ```php artisan passport:install```
* Deploying passport keys ```php artisan passport:keys```
* Install node_modules with ```npm install && npm run dev``` 
* Launch app ```php artisan serve```
