"use strict";
//Para conectarme a la base de datos necesito un driver
//Uno de los mas conocidos es Mongoose
//se requiere instalar las definiciones @types/mongoose
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
const config_1 = require("../config");
const Models_1 = require("../Models");
//crear conexion a la base de datos
//La conexion a la base de datos es asincrona.
const initializeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    //mongoose trabaja con funciones de callback pero es preferible usar promesas.
    mongoose.Promise = global.Promise;
    const connectionPromise = new Promise((resolve, reject) => {
        //se tiene un metodo que recibe 2 parametros
        //1er parametros: cadena de conexion
        //2do parametros: parametro de opciones que es un JSON
        mongoose.connect(config_1.connectionString, {
            //keepAlive: significa que la conexion que se acaba de hacer se mantendra activa por poco tiempo
            //Si llega otra peticion en ese tiempo se utilizara esa conexion
            keepAlive: true,
            //Compatibilidad con las versiones antiguas de mongo para realizar la conexion
            useNewUrlParser: true,
            //Permite crear indices sin que aparezca un warning.
            useCreateIndex: true,
            //Solamente se usa en el modo replicaSet de mongo.
            //Identifican los nodos que forman el cluster de Mongo. Solo porque nos conectamos a mongo Atlas.
            useUnifiedTopology: true
        });
        //propiedad connetion que cuenta con el metodo on: 
        //Si conecta - "connected" se ejecutara una funcion de callback
        mongoose.connection.on("connected", () => {
            //A penas se conecte se enviara el modelo de la conexion
            Models_1.userModel;
            resolve();
        });
        //Si no se realizo la conexion a la bd
        mongoose.connection.on("error", error => {
            console.log("Happened an error");
            reject();
        });
    });
    //esperando que la conexion se realice. Se requiere colocar el async para que funcione.
    yield connectionPromise;
});
exports.default = initializeDatabase;
//# sourceMappingURL=database.service.js.map