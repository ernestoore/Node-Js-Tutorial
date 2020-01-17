import * as express from "express"
import { clientController } from '../Controllers'


const route = express.Router()
//Instanciamos la clase para poder utilizarla.
const controller = new clientController()


//Se envia como segundo parametro la definicion. Por lo cual se debe vincular el model 
route.get("/", controller.getAll)
route.get("/:id", controller.getOne)
route.post("/", controller.insert)
route.put("/:id", controller.update)
route.delete("/:id", controller.delete)

//debemos exportar router
export default route