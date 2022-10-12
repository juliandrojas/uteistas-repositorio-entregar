import { Express, Router } from "express";
//Guardamos en una variable la inicialización del módulo Express
const express = Express();
//Guardamos en una variable la inicialización del módulo Router
const router = Router();
router.get('/', function() {
    console.log("Archivo estudiante.routes.js funcionando");
})
export default router;