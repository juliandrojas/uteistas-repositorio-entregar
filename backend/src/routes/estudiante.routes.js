//Importamos Express
const express = require('express');
//Importamos Router
const app = express.Router();
//Define the home page route
app.get('/', function(request, response) {
    //response.send("Home Page");
    response.json({"Message" : "Hello World"});
});
module.exports = app;