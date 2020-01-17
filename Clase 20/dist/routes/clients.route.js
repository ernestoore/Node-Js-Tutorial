"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controllers_1 = require("../Controllers");
const route = express.Router();
//Instanciamos la clase para poder utilizarla.
const controller = new Controllers_1.clientController();
//Se envia como segundo parametro la definicion. Por lo cual se debe vincular el model 
route.get("/", controller.getAll);
route.get("/:id", controller.getOne);
route.post("/", controller.insert);
route.put("/:id", controller.update);
route.delete("/:id", controller.delete);
//debemos exportar router
exports.default = route;
//# sourceMappingURL=clients.route.js.map