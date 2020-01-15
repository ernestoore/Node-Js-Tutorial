//Para conectarme a la base de datos necesito un driver
//Uno de los mas conocidos es Mongoose
//se requiere instalar las definiciones @types/mongoose

import mongoose = require("mongoose")
import {connectionString} from "../config"
import {userModel} from "../Models"

//crear conexion a la base de datos
//La conexion a la base de datos es asincrona.
const initializeDatabase = async() =>{
    //mongoose trabaja con funciones de callback pero es preferible usar promesas.
    mongoose.Promise = global.Promise

    const connectionPromise = new Promise((resolve, reject) => {
        //se tiene un metodo que recibe 2 parametros
        //1er parametros: cadena de conexion
        //2do parametros: parametro de opciones que es un JSON
        mongoose.connect(connectionString, {
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
        })

        //propiedad connetion que cuenta con el metodo on: 
        //Si conecta - "connected" se ejecutara una funcion de callback
        mongoose.connection.on("connected", () => {
            //A penas se conecte se enviara el modelo de la conexion
            userModel
            resolve()
        })

        //Si no se realizo la conexion a la bd
        mongoose.connection.on("error", error => {
            console.log("Happened an error")
            reject()
        })

    })

    //esperando que la conexion se realice. Se requiere colocar el async para que funcione.
    await connectionPromise
}

export default initializeDatabase