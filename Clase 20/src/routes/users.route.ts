import * as express from "express"
import { userController } from '../Controllers'
import * as Joi from "@hapi/joi"


const validacion = esquemas => {
    return async (req, res, next) => {
        // Object es un metodo de la libreria Joi  
        // Solo se debe enviar que parametro se va a validar
        /* const esquema = Joi.object({
            id: Joi.string()
        }) */

        //El metodo validate contiene los parametros que estan en la ruta
        const result = esquemas.validate(req.params.id)
        /* const result = await esquema.validate({
            id: req.params.id
        }) */

        if (result.error) {
            //La propiedad error y details vienen de hapi/joi
            return res.json(result.error.details)
        }

        next()
    }
}


//express tiene un manejador/delegador de ruta llamado router
//Se esta implementando las rutas hijas de la ruta padre /users

const route = express.Router()
//Instanciamos la clase para poder utilizarla.
const controller = new userController()


route.get("/", controller.getAll)
//debemos colocarlo antes del /:id sino lo tomaria detail como un parametro.
route.get("/detail", controller.detailMetaData)

//Realizar valdiacion. Las rutas son tamb middleware
//Validacion con la validacion en el header
//route.get("/:id", validacion(Joi.object({ id: Joi.number() })), controller.getOne)
route.post("/", controller.insert)
route.put("/:id", controller.update)
route.delete("/:id", controller.delete)





//debemos exportar router
export default route