import * as express from 'express'
import userController from '../Controllers/user.controller'
import authenticationPolicy from '../../Policies/autentication.policy'
import authorizationPolicy from '../../Policies/authorization.policy'

const route = express.Router()
const controller = new userController()

route.get("/",authenticationPolicy, authorizationPolicy, controller.listar)
route.get("/:id", controller.detalle)
route.post("/", controller.insertar)
route.post("/login", controller.login)
route.put("/:id", controller.modificar)
route.delete("/:id", controller.eliminar)

export default route