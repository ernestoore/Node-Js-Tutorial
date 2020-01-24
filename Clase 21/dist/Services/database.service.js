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
const mongoose = require("mongoose");
const Config_1 = require("../Config");
const initializeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose.Promise = global.Promise;
    const connectionPromise = new Promise((resolve, reject) => {
        mongoose.connect(Config_1.connectionString, {
            keepAlive: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        mongoose.connection.on("connected", () => {
            require("../Models/usuario.models");
            require("../Models/recetas.models");
            resolve();
        });
        mongoose.connection.on("error", error => {
            console.log("Error en la conexion de BD");
            reject();
        });
    });
    yield connectionPromise;
});
exports.default = initializeDatabase;
//# sourceMappingURL=database.service.js.map