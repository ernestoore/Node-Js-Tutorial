"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controllers_1 = require("../Controllers");
const validacion = esquemas => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // Object es un metodo de la libreria Joi  
        // Solo se debe enviar que parametro se va a validar
        /* const esquema = Joi.object({
            id: Joi.string()
        }) */
        //El metodo validate contiene los parametros que estan en la ruta
        const result = esquemas.validate(req.params.id);
        /* const result = await esquema.validate({
            id: req.params.id
        }) */
        if (result.error) {
            //La propiedad error y details vienen de hapi/joi
            return res.json(result.error.details);
        }
        next();
    });
};
//express tiene un manejador/delegador de ruta llamado router
//Se esta implementando las rutas hijas de la ruta padre /users
const route = express.Router();
//Instanciamos la clase para poder utilizarla.
const controller = new Controllers_1.userController();
route.get("/", controller.getAll);
//debemos colocarlo antes del /:id sino lo tomaria detail como un parametro.
route.get("/detail", controller.detailMetaData);
//Realizar valdiacion. Las rutas son tamb middleware
//Validacion con la validacion en el header
//route.get("/:id", validacion(Joi.object({ id: Joi.number() })), controller.getOne)
route.post("/", controller.insert);
route.put("/:id", controller.update);
route.delete("/:id", controller.delete);
//debemos exportar router
exports.default = route;
//# sourceMappingURL=users.route.js.map