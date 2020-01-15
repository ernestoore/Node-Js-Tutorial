import * as express from "express"
import {userController} from '../Controllers'

//express tiene un manejador/delegador de ruta llamado router
//Se esta implementando las rutas hijas de la ruta padre /users

const route = express.Router()
//Instanciamos la clase para poder utilizarla.
const controller = new userController()

//Puedo tener otra ruta
route.get("/",async (req,res) => {
    res.json(await controller.getAll())
})

//Esta es otra ruta
//utilizando "/:id" se esta creando un parametro en la ruta
route.get("/:id",async (req, res) => {
    //Los parametros de ruta Node los convierte automaticamente en JSON
    //Lo almacena dentro del objeto req en parmas
    res.json(await controller.getOne(req.params.id))
})

//Si viene una peticion a la ruta padre y tiene el metodo post
route.post("/",async  (req, res) => {
    res.json(await controller.insert(req.body))
})

//Para actualizar se requieren dos cosas:
//1. que vamos a actualizar
//
route.put("/:id",async  (req, res)=> {
    const id = req.params.id
    const body = req.body

    res.json(await controller.update(id, body))
})

route.delete("/:id",async (req, res)=>{
    res.json(await controller.delete(req.params.id))
})

//debemos exportar router

export default route