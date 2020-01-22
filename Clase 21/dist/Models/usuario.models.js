"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const esquema = new mongoose.Schema({
    nombre: String,
    correo: String,
    password: String
});
const modelo = mongoose.model("Usuario", esquema);
exports.default = modelo;
//# sourceMappingURL=usuario.models.js.map