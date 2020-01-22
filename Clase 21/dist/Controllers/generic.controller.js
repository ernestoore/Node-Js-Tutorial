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
    constructor(model) {
        this.model = model;
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield this.model.find());
        });
    }
    detalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield this.model.findOne({ _id: id });
            res.json(user);
        });
    }
    insertar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const user = new this.model(body);
            const newUser = yield user.save();
            res.json(newUser);
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const body = req.body;
            const userUpdated = yield this.model.findByIdAndUpdate(id, body, { upsert: true });
            res.json(userUpdated);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const userDeleted = yield this.model.findByIdAndRemove(id);
            res.json(userDeleted);
        });
    }
}
exports.genericController = genericController;
//# sourceMappingURL=generic.controller.js.map