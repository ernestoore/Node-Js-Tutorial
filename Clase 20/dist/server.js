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
//Lo primero es ener una variable donde almacenar el servidor
let httpServer;
//Debemos manejar excepciones.
//Funcion que devuelve una promesa
//Si la promesa se cumple, el puerto se levanto correctamente, sino no se levanto.
const initializeServer = () => {
    //los parametros de la promesa son funciones que se deben ejecutar si se cumple o no.
    return new Promise((resolve, reject) => {
        //El metodo createServer tiene como parametro una funcion de callback
        //esta funcion tiene dos parametros que son a su vez objetos.
        httpServer = http.createServer((req, res) => {
            res.writeHead(200, { "content-type": "text/html" });
            //necesito empezar a mandar un mensaje
            res.write("<h1> Hola Mundo </h1>");
            res.end();
        });
        /*
        //Escuchar el puerto 3000
        httpServer.listen(3000)

        //Ejecutar el metodo resolve()
        httpServer.on("listening", () => resolve())
        //Si por alguna razon no se puede levantar se ejecuta el metodo reject
        httpServer.on("listening", error => reject(error))
        */
        //Lo de arriba se pudo haber simplificado encadenando los metodos.
        httpServer
            .listen(3000)
            .on("listening", () => resolve())
            .on("error", error => reject(error));
    });
};
//El asyn siempre va asignado a una funcion
//Podemos utilizar un try - catch para manejar las excepciones.
const begin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Cuando el servidor responde bien: 
        //Como me devuelve una promesa puedo utilizar .then y esto puede ser reemplazado por async - await
        //initializeServer().then(() => {})
        //initializeServer().catch(() => {})
        //Await conviente  la programacion asyncrona en algo que parece programacion syncrona.
        yield initializeServer();
        console.log("Server is running");
    }
    catch (error) {
        console.log(error);
    }
});
//Iniciar el servidor.
begin();
//# sourceMappingURL=server.js.map