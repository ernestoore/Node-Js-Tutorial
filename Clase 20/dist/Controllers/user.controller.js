"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_Controller_1 = require("./generic.Controller");
const Models_1 = require("../Models");
//La exportacion se puede colocar tmb cuando se declara la clase.
//Se exporta para que este disponible para otros archivos.
class UserController extends generic_Controller_1.default {
    /**
     *
     */
    constructor() {
        super(Models_1.userModel);
    }
    detailMetaData(req, res) {
        res.json({ dateOfBirth: new Date() });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map