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
const Services_1 = require("./Services");
const begin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Services_1.serverService();
        console.log("Server is running");
    }
    catch (error) {
        console.log(error);
    }
    try {
        yield Services_1.initializeDatabase();
        console.log("Connected to Mongo");
    }
    catch (error) {
        console.log(error);
    }
});
//Iniciar el servidor.
begin();
//# sourceMappingURL=server2.js.map