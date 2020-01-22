"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_controller_1 = require("../Controllers/user.controller");
const route = express.Router();
const controller = new user_controller_1.default();
route.get("/", controller.listar);
route.get("/:id", controller.detalle);
route.post("/", controller.insertar);
route.put("/:id", controller.modificar);
route.delete("/:id", controller.eliminar);
exports.default = route;
//# sourceMappingURL=usuario.route.js.map