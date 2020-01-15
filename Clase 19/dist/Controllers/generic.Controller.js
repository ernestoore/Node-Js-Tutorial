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
const Models_1 = require("../Models");
class genericController {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            //Supongamos que esta ruta se ha conectado a la base de datos y trae una lista de usuarios
            /* return [
                { id: 1, username: "user01" },
                { id: 2, username: "user02" }
            ] */
            //Para utilizar la BD
            //El find es una promesa porque no se sabe cuando se va a ejecutar.
            return yield Models_1.userModel.find();
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //findOne espera un parametro que debe ser un JSON
            const user = yield Models_1.userModel.findOne({ _id: id });
            //const user = await userModel.findById(id)
            return user;
        });
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            //Solo se esta instanciando la clase que se va a enviar
            const user = new Models_1.userModel(data);
            //se debe guardar la informacion y esto no se sabe cuando se va a realizar.
            const newUser = yield user.save();
            return newUser;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //Por defecto el metodo findByIdAndUpdate  trae el registro que se va a actualizar no el actualizado
            //Para lo cual se debe utilizar: {upsert: true}
            const userUpdated = yield Models_1.userModel.findByIdAndUpdate(id, data, { upsert: true });
            return userUpdated;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDeleted = yield Models_1.userModel.findByIdAndRemove(id);
            return userDeleted;
        });
    }
}
exports.genericController = genericController;
exports.default = genericController;
//# sourceMappingURL=generic.Controller.js.map