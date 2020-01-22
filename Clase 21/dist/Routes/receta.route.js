"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const recetas_controller_1 = require("../Controllers/recetas.controller");
const route = express.Router();
const controller = new recetas_controller_1.default();
route.get("/", controller.listar);
route.get("/:id", controller.detalle);
route.post("/", controller.insertar);
route.put("/:id", controller.modificar);
route.delete("/:id", controller.eliminar);
exports.default = route;
//# sourceMappingURL=receta.route.js.map