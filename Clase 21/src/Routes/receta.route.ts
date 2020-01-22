import * as express from 'express'
import RecetaController from '../Controllers/recetas.controller'

const route = express.Router()
const controller = new RecetaController()

route.get("/", controller.listar)
route.get("/:id", controller.detalle)
route.post("/", controller.insertar)
route.put("/:id", controller.modificar)
route.delete("/:id", controller.eliminar)

export default route