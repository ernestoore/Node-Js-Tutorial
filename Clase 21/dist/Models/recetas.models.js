"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const esquema = new mongoose.Schema({
    Titulo: String,
    Ingredientes: String,
    Pasos: String,
    Tiempo: Number,
    Personas: Number
});
const modelo = mongoose.model("Recetas", esquema);
exports.default = modelo;
//# sourceMappingURL=recetas.models.js.map