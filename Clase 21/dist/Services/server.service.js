"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const Routes_1 = require("../Routes");
const bodyParser = require("body-parser");
let httpServer;
let app = express();
const initializeServer = () => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app);
        app.get("/", (req, res) => {
            res.type("text/html").send("<h1>Welcome to Recetas</h1>");
        });
        //Es un middleware que transforma el body en JSON.
        //Como no se coloca sin ruta entonces se asume que es para todas las rutas.
        //Debe ir antes de los middleware de ruta.
        app.use(bodyParser.json());
        //Este middleware pide especidicar el metodo de conversion que funcionan igual
        //tiene una serie de opciones que van dentro de un JSON
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use("/usuarios", Routes_1.usuarioRoute);
        app.use("/recetas", Routes_1.recetaRoute);
        httpServer
            //.listen(env.PORT)
            .listen(3200)
            .on("listening", () => resolve())
            .on("error", error => reject(error));
    });
};
exports.default = initializeServer;
//# sourceMappingURL=server.service.js.map