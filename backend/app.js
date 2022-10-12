//Requerimos módulo express
const express = require('express');
//Requermis módulo colors
const colors = require('colors');
//Guardamos en una variable la inicialización del módulo Express
const server = express();
//Configuramos una página de inicio
server.get('/', function(request, response) {
    response.send('<h1>Hola Mundo con Express & NodeJS</h1>');
    response.end();
})
//Configuramos puerto y una función
server.listen(3000, function() {
    console.log("Server on port 3000".yellow);
})