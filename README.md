## Description

A Node JS API application which uses randomusers API to perform analytics on users and to also implement JWT authentication

## Installation

```bash
$ npm install
```

## Running the app
Check env.example in the root of the project to copy and provide the required settings. You will be needing MongoDB ATLAS connection string and JWT_SECRET Key

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Deployed Application

The swagger documentation of the API is deployed [here](http://ec2-18-118-110-76.us-east-2.compute.amazonaws.com:3000/swagger/)

## Routes
The routes available and the functions are listed below

- Register User --- /auth/register
- Login User --- /auth/login
- Verify User --- /user/:id/verify
- Aggregate User (Statistics) - /user/aggregate -- this endpoint shows the number of male users, female users, nationalities, age range of users, number of nationalities of the users
- Seed User --- /user/seed 
- Get Users ---/user
- Get Single user ---/user/:id

## Initial Setup to Load users
- After running the app, register a user via the auth/register endpoint
- Login with the user details
- Make a request to the /user/seed endpoint to load 5000 users into the database, unauthenticated users cannot access this endpoint

