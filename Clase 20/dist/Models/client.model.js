"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
//Se debe definir un esquema
//Los esquemas se basan en una clase de mongoose: Schema
//Esta clase tiene un constructor que espera que le envien un JSON
const schema = new mongoose.Schema({
    name: String,
    address: String,
    password: String
});
//Aqui se construye el modelo
//model es un metodo estatico que recibe 2 parametros
//1: nombre del modelo
//2: En que Schema esta basado ese modelo
const model = mongoose.model("Clients", schema);
exports.default = model;
//# sourceMappingURL=client.model.js.map