//Importamos Express
const express = require('express');
//Importamos Router
const router = express.Router();
//Define the home page route
router.get('/', function(request, response) {
    response.send("Home Page");
})
export default router;