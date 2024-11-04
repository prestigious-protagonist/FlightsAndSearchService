# Welcome to Flights Service

### Project Setup   
   
- clone the project on your local

- Execute npm nstall on the same path as of your root directory of the downloaded project

- Create a .env file in the root directory and add the following environment variable
        
    - `PORT = 3000`

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
        "development": {
            "username": "<YOUR_DB_USERNAME>",
            "password": "<YOUR_DB_PASS>",
            "database": "<YOUR_DB_NAME>",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
```
- Once you have created & added the details to `config.json`, go to `/src` and execute `npx sequelize db:create`