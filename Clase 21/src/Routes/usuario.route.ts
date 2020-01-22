import * as express from 'express'
import userController from '../Controllers/user.controller'

const route = express.Router()
const controller = new userController()

route.get("/", controller.listar)
route.get("/:id", controller.detalle)
route.post("/", controller.insertar)
route.put("/:id", controller.modificar)
route.delete("/:id", controller.eliminar)

export default route