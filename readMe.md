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
- Once you have created & added the details to `config.json`, go to `/src` and execute ->

 ``` 
 npx sequelize db:create
 ```

- To create the model execute ->
```
    npx sequelize model:generate --name `model-name` --attributes `attribute-name`:String
```

- To migrate the changes, go to `/src` and execute ->
```
    npx sequelize db:migrate
```

Create `201`
Error `500`

## Tables
### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)
    
```
npx sequelize model:generate --name Airport —attributes name:String,address:String,cityld:integer
```

To generate seeders for airports
```
npx sequelize seed:generate --name add-airports
 ```