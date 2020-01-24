import *  as mongoose from "mongoose"

const esquema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        size: 255,
        unique: true,
        required: true,
        email: true,
        trim: true,
        lowercase: true

    },
    password: {
        type: String,
        size: 255,
        //Que sea unico. Crea un indice
        unique: true,
        //Que sea obligatorio
        required: true,
        //Que no tenga espacios
        trim: true
    }
})

const modelo = mongoose.model("Usuario", esquema)

export default modelo