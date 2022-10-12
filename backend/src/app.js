//Requerimos módulo express
const express = require('express');
//Requermos módulo colors
const colors = require('colors');
//Guardamos en una variable la inicialización del módulo Express
const server = express();
//Configuramos puerto y una función
server.listen(3000, function() {
    console.log("Server on port 3000".yellow);
})
//Requerimos módulo router
var router = require('./routes/estudiante.routes');
//Creamos ruta
server.use('/', router);