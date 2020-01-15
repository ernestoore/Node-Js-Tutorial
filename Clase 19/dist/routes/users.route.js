"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controllers_1 = require("../Controllers");
//express tiene un manejador/delegador de ruta llamado router
//Se esta implementando las rutas hijas de la ruta padre /users
const route = express.Router();
//Instanciamos la clase para poder utilizarla.
const controller = new Controllers_1.userController();
//Puedo tener otra ruta
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield controller.getAll());
}));
//Esta es otra ruta
//utilizando "/:id" se esta creando un parametro en la ruta
route.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Los parametros de ruta Node los convierte automaticamente en JSON
    //Lo almacena dentro del objeto req en parmas
    res.json(yield controller.getOne(req.params.id));
}));
//Si viene una peticion a la ruta padre y tiene el metodo post
route.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield controller.insert(req.body));
}));
//Para actualizar se requieren dos cosas:
//1. que vamos a actualizar
//
route.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const body = req.body;
    res.json(yield controller.update(id, body));
}));
route.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield controller.delete(req.params.id));
}));
//debemos exportar router
exports.default = route;
//# sourceMappingURL=users.route.js.map