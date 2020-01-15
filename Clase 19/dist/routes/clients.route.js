"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controllers_1 = require("../Controllers");
const route = express.Router();
//Instanciamos la clase para poder utilizarla.
const controller = new Controllers_1.clientController();
//Puedo tener otra ruta
route.get("/", (req, res) => {
    res.json(controller.getAll());
});
//Esta es otra ruta
//utilizando "/:id" se esta creando un parametro en la ruta
route.get("/:id", (req, res) => {
    //Los parametros de ruta Node los convierte automaticamente en JSON
    //Lo almacena dentro del objeto req en parmas
    res.json(controller.getOne(req.params.id));
});
//Si viene una peticion a la ruta padre y tiene el metodo post
route.post("/", (req, res) => {
    res.json(controller.insert(req.body));
});
//Para actualizar se requieren dos cosas:
//1. que vamos a actualizar
//
route.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(controller.update(id, body));
});
route.delete("/:id", (req, res) => {
    res.json(controller.delete(req.params.id));
});
//debemos exportar router
exports.default = route;
//# sourceMappingURL=clients.route.js.map