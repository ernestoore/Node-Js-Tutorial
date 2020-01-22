import * as mongoose from "mongoose"

const esquema = new mongoose.Schema({
    Titulo: String,
    Ingredientes: String,
    Pasos: String,
    Tiempo: Number,
    Personas: Number
})

const modelo = mongoose.model("Recetas", esquema)

export default modelo