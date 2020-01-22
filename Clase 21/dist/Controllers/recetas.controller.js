"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_controller_1 = require("./generic.controller");
const Models_1 = require("../Models");
class RecetaController extends generic_controller_1.genericController {
    constructor() {
        super(Models_1.modeloRecetas);
    }
}
exports.default = RecetaController;
//# sourceMappingURL=recetas.controller.js.map