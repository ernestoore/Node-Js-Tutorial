"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//express tiene un manejador/delegador de ruta llamado router
//Se esta implementando las rutas hijas de la ruta padre /users
const route = express.Router();
//Puedo tener otra ruta
route.get("/", (req, res) => {
    //Supongamos que esta ruta se ha conectado a la base de datos y trae una lista de usuarios
    const listUsers = [
        { id: 1, username: "user01" },
        { id: 2, username: "user02" }
    ];
    //Toda peticion debe ser respondida por eso se utiliza status o por defecto devuelve 200.
    res.json(listUsers);
});
//Esta es otra ruta
route.get("/2", (req, res) => {
    const user = { id: 2, username: "user02" };
    res.json(user);
});
//Si viene una peticion a la ruta padre y tiene el metodo post
route.post("/", (req, res) => {
    //recuperamos la data que se esta enviando. Contiene un json
    const body = req.body; //{name:..., email:..., password:...}
    res.json(body);
});
//debemos exportar router
exports.default = route;
//# sourceMappingURL=users.route.js.map