# App Node with Express Server with REST API

## Features

* Babel
* Environment Variables
* Express
* REST API
* Prettier
* Env
* ...

## Installation

* `git clone git@github.com:andersobellini/node-express-server-rest-api.git`
* `cd node-express-server-rest-api`
* `npm install`
* `npm start`
* optional: include *.env* in your *.gitignore*

### GET Routes

* visit http://localhost:3000
  * /messages
  * /messages/1
  * /users
  * /users/1
  * /career
  * /career/1

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a message with:
  * URL: http://localhost:3000/messages
  * Method: POST
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi again, Awsome World" }`
* Delete a message with:
  * URL: http://localhost:3000/messages/1
  * Method: DELETE


[Created By Anderson V. Bellini](https://linkedin.com/in/abellini/)