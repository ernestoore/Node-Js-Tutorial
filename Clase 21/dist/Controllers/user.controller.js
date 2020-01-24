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
const generic_controller_1 = require("./generic.controller");
const Models_1 = require("../Models");
const bcrypt = require("bcryptjs");
class userController extends generic_controller_1.genericController {
    constructor() {
        super(Models_1.modeloUsuario);
    }
    //crearemos un metodo para insertar
    insertar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Por defecto tiene una semilla el cual es desde que numero iniciaremos.
            //Si ponemos un numero muy alto sera muy lento y si es muy bajo sera muy vulnerable
            //El valor por defecto es 10. Este metodo es asyncrono.
            const cifradoHash = yield bcrypt.genSalt();
            //Obtener la data que ingresa el cliente
            const datos = req.body;
            //Ahora debemos crear el hash
            //El primer parametro es lo que queremos cifrar y esta guardada en la base de datos
            //El segundo parametro es el cifrado
            const hash = yield bcrypt.hash(datos.password.trim(), cifradoHash);
            //Estamos modificando los datos que ingresa el cliente
            datos.password = hash;
            //Se hace una instancia del modelo y se guardan los datos
            const usuario = new Models_1.modeloUsuario(datos);
            yield usuario.save();
            res.json(usuario);
        });
    }
    //Tambien es un middleware. Y recibira la informacion que envia el cliente
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = req.body;
            //Lo primero que debemos hacer es verificar si el usuario existe
            const usuario = yield Models_1.modeloUsuario.findOne({ correo: datos.correo.toLoweCase() });
            //Comprobamos si existe el usuario
            if (usuario) {
                //Si existe 
                const existe = yield bcrypt.compare(datos.password, usuario.password);
                if (existe) {
                    res.send("Usuario logueado");
                }
                else {
                    res.send("Pasword incorrecto");
                }
            }
            else {
                res.send("Usuario incorrecto");
            }
        });
    }
}
exports.default = userController;
//# sourceMappingURL=user.controller.js.map