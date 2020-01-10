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
const http = require("http");
const express = require("express");
const users_route_1 = require("./users.route");
let httpServer;
let app = express();
const initializeServer = () => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app);
        //Estoy definiendo una ruta y esta tendra su propia funcion de Callback
        app.get("/", (req, res) => {
            res.type("text/html").send("<h1>Home alone</h1>");
        });
        //Creacion de un Middleware, se aplicara a la ruta users.
        //Si se obvia el primer parametros sera para todas las rutas.
        //app.use((req, res, next) => {
        //se utilizan 3 parametros: 
        app.use("/users", (req, res, next) => {
            //Middleware de autenticacion
            //Se esta rechazando: No dejara pasar el request.
            //res.status(401).send("User not logged")
            //Si lo dejo pasar utilizo el tercer parametro el cual es una funcion.
            next();
        });
        //crear un middleware unicamente para las rutas que empiecen con /users y delegar las rutas
        //Si viene la ruta /users, delegamos route utilizando  user (Middleware).
        app.use("/users", users_route_1.default);
        httpServer
            .listen(3000)
            .on("listening", () => resolve())
            .on("error", error => reject(error));
    });
};
const begin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield initializeServer();
        console.log("Server is running");
    }
    catch (error) {
        console.log(error);
    }
});
//Iniciar el servidor.
begin();
//# sourceMappingURL=server2.js.map