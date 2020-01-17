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
class genericController {
    //Para que pueda ser utilizado por varios constructores y se convierta en generico
    constructor(model) {
        this.model = model;
        //Colocandolo en el constructor se vincula la definicion de la funcion con el model
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find();
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield this.model.findOne({ _id: id });
            return user;
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            //Solo se esta instanciando la clase que se va a enviar
            const user = new this.model(body);
            //se debe guardar la informacion y esto no se sabe cuando se va a realizar.
            const newUser = yield user.save();
            return newUser;
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const body = req.body;
            //Por defecto el metodo findByIdAndUpdate  trae el registro que se va a actualizar no el actualizado
            //Para lo cual se debe utilizar: {upsert: true}
            const userUpdated = yield this.model.findByIdAndUpdate(id, body, { upsert: true });
            return userUpdated;
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const userDeleted = yield this.model.findByIdAndRemove(id);
            return userDeleted;
        });
    }
}
exports.genericController = genericController;
exports.default = genericController;
//# sourceMappingURL=generic.Controller.js.map