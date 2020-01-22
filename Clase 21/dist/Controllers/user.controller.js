"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_controller_1 = require("./generic.controller");
const Models_1 = require("../Models");
class userController extends generic_controller_1.genericController {
    constructor() {
        super(Models_1.modeloUsuario);
    }
}
exports.default = userController;
//# sourceMappingURL=user.controller.js.map