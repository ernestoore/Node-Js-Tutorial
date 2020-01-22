
import mongoose = require("mongoose")
import { connectionString } from "../Config"
import { modeloUsuario, modeloRecetas } from "../Models"

const initializeDatabase = async() => {
    mongoose.Promise = global.Promise

    const connectionPromise = new Promise((resolve, reject) => {
        mongoose.connect(connectionString, {
            keepAlive: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        mongoose.connection.on("connected", () => {
            modeloUsuario
            modeloRecetas
            resolve()
        })
        mongoose.connection.on("error", error => {
            console.log("Error en la conexion de BD")
            reject()
        })
    })

    await connectionPromise
}

export default initializeDatabase


