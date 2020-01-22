"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const Routes_1 = require("../Routes");
let httpServer;
let app = express();
const initializeServer = () => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app);
        app.get("/", (req, res) => {
            res.type("text/html").send("<h1>Welcome to Recetas</h1>");
        });
        app.use("/usuarios", Routes_1.usuarioRoute);
        app.use("/recetas", Routes_1.recetaRoute);
        httpServer
            //.listen(env.PORT)
            .listen(3200)
            .on("listening", () => resolve())
            .on("error", error => reject(error));
    });
};
exports.default = initializeServer;
//# sourceMappingURL=server.service.js.map